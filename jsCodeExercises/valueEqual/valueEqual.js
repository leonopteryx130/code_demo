/*
飞猪真题

题目：
实现两个输入元素的对比，函数有两个参数，
参数可以是任意基本类型或者对象和数组，数组对象之间支持嵌套关系
函数如果只传入一个参数，那么默认返回false

例子：
isValueEqual(3) => false
isValueEqual(null, false) => false
isValueEqual(1, '1') => false
isValueEqual({a: 1}, {a: 1, b: 2}) => false
isValueEqual([1, 2], [1, 3]) => true

思路：因为如果输入

参考链接：https://zhuanlan.zhihu.com/p/157693504

*/
global.__DEV__ = 'develop'
console.log(global)

/*
function isValueEqual(a=undefined, b=undefined) {
    console.log(global == this)
}

isValueEqual(undefined)
*/