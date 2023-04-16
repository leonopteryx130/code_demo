/*
实现树结构的深度优先遍历和广度优先遍历

javascript树的结构可以用对象和数组来模拟，示例数据：
const tree = {
  value:"a",
  children:[
    {
      value:"b",
      children:[
        {
          value:"d",
          children:[
            {
              value:"e",
              children:[]
            }
          ]
        }
      ]
    },
    {
      value:"c",
      children:[
        {
          value:"f",
          children:[]
        },
        {
          value:"g",
          children:[]
        }
      ]
    }
  ]
}

*/

//深度优先代码
const dfs = (nodes)=>{
    console.log(nodes.value);
    nodes.children.forEach(dfs);
}

dfs(tree);

const bfs = (nodes)=>{
    //根节点入队
    const stack = [nodes];
    while (stack.length > 0){

        const node = stack.shift();
        //遍历根节点，把它的子节点推入栈尾
        node.children.forEach((item)=> stack.push(item));
    }
}
  
bfs(tree);
  