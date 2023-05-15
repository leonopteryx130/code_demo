import FixedSizeList from './components/FixedSizeList';
import './App.css';

function Item({ style }: any) {
  return (
    <div
      className="item"
      style={{
        ...style,
      }}
    >
      {style.backgroundColor}
    </div>
  );
}

export default function App() {

  return (
    <>
      列表项高度固定 - 虚拟列表实现
      <FixedSizeList>
        {Item}
      </FixedSizeList>
    </>
  );
}