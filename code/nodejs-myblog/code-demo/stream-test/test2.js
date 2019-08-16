// process.stdin.pipe("请输入你的名字：")
console.log('请输入你的名字：')
let name = process.stdout
console.log('你的名字是：')
process.stdin.pipe(name)

//非异步操作，以上代码有逻辑问题