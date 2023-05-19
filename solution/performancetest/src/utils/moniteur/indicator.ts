import { IPerCallback } from "./interfaces"

const getObserver = (type: string, cb: IPerCallback) => {
    /*
    封装PerformanceObserver和observe
    */
    const perfObserver = new PerformanceObserver((entryList) => {
      cb(entryList.getEntries())
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