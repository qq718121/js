/**
 * Created by Administrator on 2017/7/19.
 */
let express=require('express');

let app = express();

app.use(express.static('src'));
app.get('/',function (req,res) {
    res.end();
});
app.listen('3000',function () {
    console.log('start ...');
});