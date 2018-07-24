const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;
const sever = http.createServer(((req, res) => {
      var query = url.parse(req.url).query;
      var callback = queryParams(query);
      // res.statusCode = 200;
      // res.setHeader('Content-Type', 'text/plain');
      // res.end(callback + "({name:'潘晨凯',age:25})");
}));
sever.listen(port, hostname, (() => {
      console.log('服务已启动');
      console.log('open ' + hostname + ':' + port);
}));

function queryParams(q) {
      if (!q) return;
      var arr = q.split('=');
      return arr[1]
}