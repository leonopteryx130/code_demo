import { IPerCallback } from "./interfaces"
import ttiPolyfill from 'tti-polyfill'

declare global{
    interface Window {
        __tti: {
            e: any[]
        }
    }
}

let tbt = 0

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
            const name = entry.name
            if(name === 'first-contentful-paint') {
                getLongTask(entry.time)
                standardizationConsole(name, entry.startTime)
            }else {
                standardizationConsole(name, entry.startTime)
            }
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
            standardizationConsole("tbt", tbt)
        })
    })
}

export const getLCP = () => {
    getObserver('largest-contentful-paint', (entries) => {
        entries.forEach((entry) => {
            const { startTime } = entry
            standardizationConsole("LCP", startTime )
        })
    })
}

export const getTTI = () => {
    ttiPolyfill.getFirstConsistentlyInteractive().then((tti: any) => {
        standardizationConsole("tti", tti)
    })
}


const getLongTask = (fcp: number) => {
    window.__tti = { e: [] }
    getObserver('longtask', (entries) => {
        window.__tti.e = window.__tti.e.concat(entries)
        entries.forEach((entry) => {
            // get long task time in fcp -> tti
            if (entry.name !== 'self' || entry.startTime < fcp) {
            return
            }
            // long tasks mean time over 50ms
            const blockingTime = entry.duration - 50
            if (blockingTime > 0) tbt += blockingTime
        })
    })
}

export const getCLS = () => {
    getObserver('layout-shift', (entries) => {
      let value = 0
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          value += entry.value
        }
      })
      standardizationConsole("cls", value)
    })
  }