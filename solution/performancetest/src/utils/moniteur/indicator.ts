import { IPerCallback } from "./interfaces"

const getObserver = (type: string, callback: IPerCallback) => {
    /*
    封装PerformanceObserver和observe
    */
    const perfObserver = new PerformanceObserver((entryList) => {
        callback(entryList.getEntries())
    })
    perfObserver.observe({ type, buffered: true })
}

const standardizationConsole = ( evt: string|null, time: number ) => {
    /*
    一个用于标准化输出的方法（待完善）
    */
    console.log(evt, ': ', time)
}

export const getPaintTime = () => {
    /*
    该方法用于输出fp和fcp的数据，单位为ms
    */
    getObserver('paint', (entries) => {
        entries.forEach((entry) => {
            standardizationConsole(entry.name, entry.startTime)
        })
    })
}

export const getFID = () => {
    /*
    该方法用于输出FID
    */
    getObserver('first-input', (entries) => {
        entries.forEach((entry) => {
            //entry.name：事件名称，比如mousedown，keydown等，pointerdown等
            //entry.startTime：交互事件发生的时间
            //entry.processingStart：交互事件的代码开始运行的时间
            const time = entry.processingStart - entry.startTime
            standardizationConsole("FID", time)
        })
    })
}

export const getLCP = () => {
    getObserver('largest-contentful-paint', (entries) => {
        entries.forEach((entry) => {
            const { startTime, renderTime} = entry
            console.log("startTime:", startTime)
            console.log("renderTime:", renderTime)
            standardizationConsole("LCP", startTime | renderTime)
        })
    })
  }