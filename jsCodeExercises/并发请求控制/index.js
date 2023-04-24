/**
    同花顺面试原题coding：
    要求实现promise并发请求，并发数量可控（可以用参数控制），直到请求队列为空

    解题思路在github上找的，
 */
let mapLimit = (list, limit, asyncHandle) => {
    let recursion = (arr) => {
        return asyncHandle(arr.shift())
            .then(()=>{
                if (arr.length!==0) return recursion(arr)   // 数组还未迭代完，递归继续进行迭代
                else return 'finish';
            })
    };
    
    let listCopy = [].concat(list);
    let asyncList = []; // 正在进行的所有并发异步操作
    while(limit--) {
        asyncList.push( recursion(listCopy) ); 
    }
    return Promise.all(asyncList);  // 所有并发异步操作都完成后，本次并发控制迭代完成
}


//调用方法：
var dataLists = [1,2,3,4,5,6,7,8,9,11,100,123];
var count = 0;
mapLimit(dataLists, 3, (curItem)=>{
    return new Promise(resolve => {
		count++
        setTimeout(()=>{
			console.log(curItem, '当前并发量:', count--)
            resolve();
        }, Math.random() * 5000)  
    });
}).then(response => {
    console.log('finish', response)
})