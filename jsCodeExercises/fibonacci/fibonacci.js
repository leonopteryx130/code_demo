/* 
题目：生成斐波那契数列
描述：输入n为一个整数，计算第n位的斐波那契数列

demo：
fib(4) => [1, 1, 2, 3] => 结果输出3
经过三次加法迭代运算

fib(6) => [1, 1, 2, 3, 5, 8] => 结果输出8
*/

function fib_1(n) {
    /*
    实现方法一：通过for循环遍历生成
    */
    if (n < 3) {
        return 1
    } else {
        numLis = [1, 1]; //初始化数列
        for (let i = 2; i < n + 1; i++) {
            numLis.push(numLis[i - 2] + numLis[i - 1]);
        }
        return numLis[n];
    }
}


function fib_2(n) {
    /*
    实现方法二：递归生成（可扩展性高）,但是时间复杂度高
    */
    if(n == 1 || n == 0) {
        return 1
    }else{
        return fib_2(n-2) + fib_2(n-1)
    }
}

console.log(fib_2(5))