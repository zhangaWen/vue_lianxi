let express = require('express')
let app = express()
app.use(express.static('public'))
app.get('/testGET',(request,response)=>{
    console.log('testGET路由被调用了')
    response.send('我是服务器返回的GET请求的信息')
})
app.listen(3000,(err)=>{
    if(!err){
        console.log('服务器启动成功:请求地址为：http://localhost:3000/index.html')

    }else(
        console.log(err)
    )
})