/**
 * Created by admin on 2017/10/28.
 */
require.config({
    baseUrl:'java_script_stady',
    // paths:{
    //     jquery:'jquery.js'
    // }
});
require([],function () {
   let el = document.querySelector('#content');
   el.addEventListener('blur',()=>{
       //获取文本内容
       //if是浏览器在线状态
       if(navigator.onLine){
           let data = el.value;
           //将内容保存到服务器
       }else{
           //保存到本地
           localStorage.setItem('data',data)
       }

       //当用户再次进入当页现在本地查找
       let data = localStorage.getItem('data');
       if(!data){
           //如果本地没有就发送请求去服务器获取

       }else{
           //如果本地存在获取内容进行渲染然后保存到服务器并且删除本地
           localStorage.removeItem('data');
       }
       saveOnline(data);
   });
    function saveOnline() {
        //代码就不详细说明了 这一步是发送post请求把文本保存到服务器
    }
    //<html lang="en" manifest=".appcache"> 剩下的只要在html标签上加上manifest属性，浏览器就会自动的解析缓存文件，判断哪些资源需要缓存
});

/*
* 利用service workder缓存文件

 下面介绍一个利用service worker缓存离线文件的例子
 准备index.js，用于注册service-worker

 JavaScript

 if (navigator.serviceWorker) {
 navigator.serviceWorker.register('service-worker.js').then(function(registration) {
 console.log('service worker 注册成功');
 }).catch(function (err) {
 console.log('servcie worker 注册失败')
 });
 }

 if (navigator.serviceWorker) {
 navigator.serviceWorker.register('service-worker.js').then(function(registration) {
 console.log('service worker 注册成功');
 }).catch(function (err) {
 console.log('servcie worker 注册失败')
 });
 }
 在上述代码中，注册了service-worker.js作为当前路径下的service worker。由于service worker的权限很高，所有的代码都需要是安全可靠的，所以只有https站点才可以使用service worker，当然localhost是一个特例。
 注册完毕，现在开始写service-worker.js代码。
 根据前面的生命周期图，在一个新的service worker被注册以后，首先会触发install事件，在service-workder.js中，可以通过监听install事件进行一些初始化工作，或者什么也不做。
 因为我们是要缓存离线文件，所以可以在install事件中开始缓存，但是只是将文件加到caches缓存中，真正想让浏览器使用缓存文件需要在fetch事件中拦截

 JavaScript

 var cacheFiles = [
 'about.js',
 'blog.js'
 ];
 self.addEventListener('install', function (evt) {
 evt.waitUntil(
 caches.open('my-test-cahce-v1').then(function (cache) {
 return cache.addAll(cacheFiles);
 })
 );
 });

 var cacheFiles = [
 'about.js',
 'blog.js'
 ];
 self.addEventListener('install', function (evt) {
 evt.waitUntil(
 caches.open('my-test-cahce-v1').then(function (cache) {
 return cache.addAll(cacheFiles);
 })
 );
 });
 首先定义了需要缓存的文件数组cacheFile，然后在install事件中，缓存这些文件。
 evt是一个InstallEvent对象,继承自ExtendableEvent，其中的waitUntil()方法接收一个promise对象，直到这个promise对象成功resolve之后，才会继续运行service-worker.js。
 caches是一个CacheStorage对象，使用open()方法打开一个缓存，缓存通过名称进行区分。
 获得cache实例之后，调用addAll()方法缓存文件。

 这样就将文件添加到caches缓存中了，想让浏览器使用缓存，还需要拦截fetch事件

 JavaScript

 // 缓存图片
 self.addEventListener('fetch', function (evt) {
 evt.respondWith(
 caches.match(evt.request).then(function(response) {
 if (response) {
 return response;
 }
 var request = evt.request.clone();
 return fetch(request).then(function (response) {
 if (!response && response.status !== 200 && !response.headers.get('Content-type').match(/image/)) {
 return response;
 }
 var responseClone = response.clone();
 caches.open('my-test-cache-v1').then(function (cache) {
 cache.put(evt.request, responseClone);
 });
 return response;
 });
 })
 )
 });

 // 缓存图片
 self.addEventListener('fetch', function (evt) {
 evt.respondWith(
 caches.match(evt.request).then(function(response) {
 if (response) {
 return response;
 }
 var request = evt.request.clone();
 return fetch(request).then(function (response) {
 if (!response && response.status !== 200 && !response.headers.get('Content-type').match(/image/)) {
 return response;
 }
 var responseClone = response.clone();
 caches.open('my-test-cache-v1').then(function (cache) {
 cache.put(evt.request, responseClone);
 });
 return response;
 });
 })
 )
 });
 通过监听fetch事件，service worker可以返回自己的响应。

 首先检缓存中是否已经缓存了这个请求，如果有，就直接返回响应，就减少了一次网络请求。否则由service workder发起请求，这时的service workder起到了一个中间代理的作用。

 service worker请求的过程通过fetch api完成，得到response对象以后进行过滤，查看是否是图片文件，如果不是，就直接返回请求，不会缓存。

 如果是图片，要先复制一份response，原因是request或者response对象属于stream，只能使用一次，之后一份存入缓存，另一份发送给页面。
 这就是service worker的强大之处：拦截请求，伪造响应。fetch api在这里也起到了很大的作用。



 service worker的更新很简单，只要service-worker.js的文件内容有更新，就会使用新的脚本。但是有一点要注意：旧缓存文件的清除、新文件的缓存要在activate事件中进行，因为可能旧的页面还在使用之前的缓存文件，清除之后会失去作用。



 在初次使用service worker的过程中，也遇到了一些问题，下面是其中两个

 问题1. 运行时间

 service worker并不是一直在后台运行的。在页面关闭后，浏览器可以继续保持service worker运行，也可以关闭service worker，这取决与浏览器自己的行为。所以不要定义一些全局变量，例如下面的代码(来自https://jakearchibald.com/2014/service-worker-first-draft/):

 JavaScript

 var hitCounter = 0;

 this.addEventListener('fetch', function(event) {
 hitCounter++;
 event.respondWith(
 new Response('Hit number ' + hitCounter)
 );
 });
 1
 2
 3
 4
 5
 6
 7
 8
 var hitCounter = 0;

 this.addEventListener('fetch', function(event) {
 hitCounter++;
 event.respondWith(
 new Response('Hit number ' + hitCounter)
 );
 });
 返回的结果可能是没有规律的：1,2,1,2,1,1,2….，原因是hitCounter并没有一直存在，如果浏览器关闭了它，下次启动的时候hitCounter就赋值为0了
 这样的事情导致调试代码困难，当你更新一个service worker以后，只有在打开新页面以后才可能使用新的service worker，在调试过程中经常等上一两分钟才会使用新的，比较抓狂。

 问题2. 权限太大

 当service worker监听fetch事件以后，对应的请求都会经过service worker。通过chrome的network工具，可以看到此类请求会标注：from service worker。如果service worker中出现了问题，会导致所有请求失败，包括普通的html文件。所以service worker的代码质量、容错性一定要很好才能保证web app正常运行。*/