# 前端工程化：性能检测

Performance API提供了很多的接口供我们访问前端性能指标，这些指标是浏览器自动生成的，不需要额外的运行或者监听，只需要调用接口访问即可。

关于Performance用法，以及Performance在MDN上如何查询使用的文档可以[点击这里](http://49.235.67.41/notes/JavaScript/%E5%87%BD%E6%95%B0%E5%8F%8Aapi/Performance.html)，如果访问不了可以看[github](https://github.com/leonopteryx130/notes_docs/blob/main/notes/JavaScript/%E5%87%BD%E6%95%B0%E5%8F%8Aapi/Performance.md)

### 开发流程：

#### 第一步：
**目标**：先实现白屏时间检测（FP）和首屏检测(FCP)，封装为一个函数，在项目里可以随时调用

代码封装：
创建```utils/moniteur```文件夹，```index.ts```用于暴露方法，```interfaces.ts```用于声明类型和接口，```indicators.ts```是核心函数，包含计算各类指标的方法。

主要用到```PerformanceObserver``` API，对接口基本用法进行一个简单的封装：

```
const getObserver = (type: string, callback: IPerCallback) => {
  const perfObserver = new PerformanceObserver((entryList) => {
    callback(entryList.getEntries())
  })
  perfObserver.observe({ type, buffered: true })
}
```
```getObserver```方法接受两个参数，type就是entry type所对应的字符串。其实封装后的用法和```PerformanceObserver```的用法差不多，核心都是执行回调函数，只是需要多加一个参数指定type。使用方法也很简单，在回调函数中遍历参数，输出对应的属性即可

将type设置为paint，遍历回调函数传入的参数，即可得到FP和FCP的数据

#### 第二步：
**目标**：实现FID的计算，交互指标需要传入的entry type为first-input，遍历方法不变。根据定义得到FID时间为：```entry.processingStart - entry.startTime```

#### 第三步：
**目标**：实现LCP。

entryType：`largest-contentful-paint`
属性startTime: MDN上是这样解释的，如果这个属性值不为0，那么就会返回renderTime的值，如果这个属性值为0，那么就会返回loadTime的值。为什么会出现这个情况呢？是因为renderTime是渲染时间，loadTime是加载时间，如果最大内容是一个跨域的外部资源，那么对于浏览器而言，该资源就不会触发渲染，而是会用到加载时间。

#### 第四步：
**目标**：实现CLS

entryType：```layout-shift```，MDN解释是根据页面上元素的移动报告布局的稳定性

**tti**：tti的测量可以用谷歌提供的模块tti-polyfill，