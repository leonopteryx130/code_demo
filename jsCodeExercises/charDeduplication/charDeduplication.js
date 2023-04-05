/*
腾讯真题

题目：
给定一个只包含小写字母字符串，每次可以选择两个相同的字符删除，并在字符串结尾新增任意一个小写字母。
请问最少多少次操作后，所有的字母都不相同？

举例：
输入 "adnnfoae"
第一次迭代，消去两个a，尾部随机加入一个字符，得到"dnnfoam"
第二次迭代，消去两个n，尾部随机加入一个字符，得到"dfoame"
没有重复字符串，停止迭代，最终应该输出2

注意：这里不要求实现迭代过程，只要求算出需要迭代的次数，因此属于一道数学题，用数学的方法解决问题，强行实现迭代会浪费很多时间
*/

function charDeduplication(character) {
    /*
    方法：
    注意，题目要求的是*最少*多少次，那么就尽可能的让新字母不相同
    按照连连看消除的思路，给字符两两配对，相当于一种新的游戏规则，每消除一组，就会重新生成一个新的牌，直到所有牌都不一样为止。
    首先记录每个字符有多少对，也就是说要消多少次，对应游戏规则也就是说要加多少牌
    记录26个字母里，有哪几个字母是空着的，有哪几个字母是单数字母，单数字母意味着不能优先给这几个空生成牌，统计剩下的可生成牌的位数x
    如果字母对数小于等于可生成牌的位数x，那么直接输出对数即可

    如果大于可生成牌的位数，那么游戏规则可以从连连看变成2合1的合成小游戏，因此次数可以直接等于 总对数+总对数-位数x
    */
    var eliminatingPool = {
        //定义一个记录消除对数的字母池
    }

    for(let i of character){
        //遍历输入字符串，填充字母池
        if(eliminatingPool[i]) {
            eliminatingPool[i] +=1
        }else{
            eliminatingPool[i] = 1
        }
    }

    let vacantPos = 26 - Object.keys(eliminatingPool).length //26个字母中没有出现的字母数
    let letterPair = 0
    for(let i of Object.values(eliminatingPool)) {
        letterPair += Math.floor(i/2)
        if(i%2 === 1){
            vacantPos += 1
        }
    }

    if(letterPair <= vacantPos) {
        return letterPair
    }else{
        return 2*letterPair - vacantPos
    }
}