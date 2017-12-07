/**
 * Created by admin on 2017/11/5.
 */
//创建媒体数据源
let mediaSource = new MediaSource();
//添加媒体数据源打开的监听
mediaSource.addEventListener('sourceopen',handleSourceOpen,false);
//声明变量
let mediaRecorder , recordedBlobs,sourceBuffer;
//获取原视频，录制视频和按钮
let sourceVideo = document.getElementById('source');
let recordedVideo = document.getElementById('recorded');
let recordButton = document.getElementById('record');
recordButton.onclick = toggleRecording;
//设置媒体约束，接受声音和视频，视频宽度为320px;
let constraints = { audio:true,video : {width:320}};
//获取媒体成功
function handleSuccess(stream) {
    recordButton.disabled = false;
    window.stream = stream;
    sourceVideo.srcObject = stream;
    //将画面显示在sourceVideo
}
function handleError(error) {
    console.log('获取媒体错误',error);
}

//获取用户媒体
navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
//处理元媒体打开
function handleSourceOpen() {
    sourceBuffer = mediaSource.addSourceBuffer('video/webm',codecs = 'vp8');
};
//处理数据可用
function handleDataAvailable(event) {
    if(event.data && event.data.size >0){
        //将数据追加到录制记录中
        recordedBlobs.push(event.data);
    }
};
//切换录制
function toggleRecording() {
    if(recordButton.textContent === '开始录制'){
        stratRecording();
    }else{
        stopRecording();
        recordButton.textContent = '开始录制';
    }
};
//开始录制
function stratRecording() {
    //数据记录初始化
    recordedBlobs = [];
    let mimeTypes = [
        'video/webm;codecs = vp9',
        'video/webm;codecs = vp8',
        'video/webm'
    ];
    //查找支持视频的格式
    let mimeType = mimeTypes.find(type => MediaRecorder.isTypeSupported(type)) || '';
    try {
        //创建媒体录制器
        mediaRecorder = new MediaRecorder(window.stream,{mimeType});
    }catch (e){
        alert('创建媒体录制异常' + options.mimeType);
        return;
    }
    recordButton.textContent = '停止录制';
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start(10);
}
function stopRecording() {
    mediaRecorder.stop();
    let buf = new Blob(recordedBlobs,{type:'video/webm'});
    //设置已经录制视频的源为录制好的视频
    recordedVideo.src = window.URL.createObjectURL(buf);
}
