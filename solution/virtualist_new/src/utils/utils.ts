const convertArray = (arr: Array<any>) => {
    /*
    这个方法的作用是把一个数组，从第一个元素开始，两两结合，
    */
    let result = []
    let meta = []
    for(let i of arr) {
        meta.push(i)
        if(meta.length === 2) {
            result.push(meta)
            meta = []
        }
    }
    return result
}


export default convertArray