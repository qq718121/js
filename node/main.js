/**
 * Created by admin on 2017/10/25.
 */
const fs = require('fs');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((res,req)=>{
   console.log('laile');
});
// fs.readFile('C:\\Users\\admin\\Desktop\\node\\index.text',(err,data)=>{
//     if(err){
//         console.log('去你妈错了');
//     }else{
//         console.log(data.toString());
//     }
// });
server.listen(port,hostname,()=>{
    console.log('启动陈宫');
});

