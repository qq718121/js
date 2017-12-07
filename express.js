/**
 * Created by admin on 2017/11/25.
 */
let express = require('express');
let app =express();
app.use(express.static('C:\\Users\\lenovo\\Desktop\\javascript_study\\java_script_stady'));
app.listen(5000,()=>{
    console.log('服务器已启动');
});