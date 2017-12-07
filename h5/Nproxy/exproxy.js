/**
 * Created by admin on 2017/11/25.
 */
let express = require('express');
let app = express();
app.use(express.static('C:\\Users\\admin\\Desktop\\java_script_stady\\h5\\Nproxy\\probuild'));
// app.get('/',function (req,res) {
//     res.end('11');
// });
app.listen(4000,()=>{
    console.log('文件挂在成功');
});