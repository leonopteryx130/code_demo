/**
 * 一个将 items 往下推到正确位置的空元素
 */
import { useState, useEffect, useRef, useCallback} from 'react';
import { flushSync } from 'react-dom';

import useIsInViewport from '../hooks/useIsViewport';

const colors = ['pink', 'lightgreen', 'brown', 'grey', 'lightblue', 'purple', 'orange', 'lightyellow']

function FixedSizeList({ containerHeight, itemHeight, children }) {
  // children 语义不好，赋值给 Component
  const Component = children;

  const elementRef = useRef()
  const isInview = useIsInViewport(elementRef)

  var [lis, setLis] = useState([])

  const addlis = useCallback(() => {
    let timer = setTimeout(() => {
      setLis(lis.concat(colors)) 
      console.log(lis)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInview])

  useEffect(() => {
    addlis()
  }, [addlis])

  const contentHeight = itemHeight * lis.length; // 内容总高度：每一条的高度*条目数（overflow: scroll）
  const [scrollTop, setScrollTop] = useState(0); // 滚动高度

  // 继续需要渲染的 item 索引有哪些
  let startIdx = Math.floor(scrollTop / itemHeight);
  let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight);

  // 上下额外多渲染几个 item，解决滚动时来不及加载元素出现短暂的空白区域的问题
  const paddingCount = 2;
  startIdx = Math.max(startIdx - paddingCount, 0); // 处理越界情况
  endIdx = Math.min(endIdx + paddingCount, lis.length - 1);

  const top = itemHeight * startIdx; // 第一个渲染 item 到顶部距离

  // 需要渲染的 items
  const items = [];
  for (let i = startIdx; i <= endIdx; i++) {
    items.push(<Component key={i} index={i} style={{ height: itemHeight, backgroundColor: lis[i] }} />);
  }

  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => {
        // 处理渲染异步导致的白屏现象
        flushSync(() => {
          setScrollTop(e.target.scrollTop);
        });
      }}
    >
      <div style={{ height: contentHeight }}>
        {/* 一个将 items 往下推到正确位置的空元素 */}
        <div style={{ height: top }}></div>
        {items}
      </div>
      <p ref={elementRef}>
        正在加载
      </p>
    </div>
  )
}

export default FixedSizeList;