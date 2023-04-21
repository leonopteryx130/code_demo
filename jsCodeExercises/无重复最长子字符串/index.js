/*
力扣第三题：
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

/*
我第一次做的实现方法：
模拟一个可伸缩的滑动窗口，窗口头部不断延长，当发现窗口内有重复字符时候，尾部收缩到重复字符串的地方，并记录长度
*/
var lengthOfLongestSubstring = function(s) {
    var subString = []
    var len = 0
    for(let i of s) {
        if(subString.includes(i)) {
            var index = subString.indexOf(i)
            len = subString.length>len?subString.length:len
            subString = [...subString.slice(index+1, subString.length), i]
        }else{
            subString.push(i)
        }
    }
    len = subString.length>len?subString.length:len
    return len
};

/*
一个比较优秀的方法：
用left和right两个指针, right指针前移的时候, 去检测max值, left指针前移的时候，直接进去下一个循环
*/
var lengthOfLongestSubstring = function(str) {
    if (str.length <= 1) {return str.length}
      let left = 0
      let right = 1
      let max = 0
      let temp
      while(right<str.length){
        temp = str.slice(left, right)
        if (temp.indexOf(str.charAt(right)) > -1) {
          left++
          continue
        } else {
          right++
        }
        if (right - left > max) { max = right - left }
      }
      return max
};