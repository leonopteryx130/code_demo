# 前端工程化：性能检测

### 开发流程：

#### 第一步：
**目标**：先实现白屏时间检测（FP），封装为一个函数，在项目里可以随时调用

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

