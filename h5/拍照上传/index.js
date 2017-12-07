/**
 * Created by lenovo on 2017/11/29.
 */
let express = require('express');
let app = express();
let path = require('path');
app.use(express.static('C:\\Users\\lenovo\\Desktop\\javascript_study\\java_script_stady'));
app.post('/upload',function (req,res) {
    handlefileUploadRequest(req, res);
});
app.listen(3000,function () {
    console.log('start....');
});
function handlefileUploadRequest(req, res) {
    if (req.type === 'POST') {
        //构建formdata实例
        let form = new formidable.IncomingForm();
        //坚挺formdata上传出错事件
        form.on('error', function (error) {
            res.writeHead(500);
            res.write('上传失败' + error);
            res.end();
        }).parse(req, function (error, fileds, files) {
            //解析form上传数据
            //遍历上出啊你的文件

            for (let key in files) {
                //获取上传的文件
                let file = files[key];
                let img_path = path.resolve(__dirname, 'public/images', 12, file.name);
                let ws = fs.createWriteStream(img_path);//构建写入流
                fs.createWriteStream(file.path).pipe(ws);//写入文件到服务
            };
            //设置成功的响应头
            res.writeHead(200);
            res.end();
        })
    }
}