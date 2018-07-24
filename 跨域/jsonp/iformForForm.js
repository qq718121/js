/**
 * @author pck
 * @name 利用iframe&form 实现跨域POST请求
 * @param url 请求地址
 * @param data 请求参数
 */

const iframeReq = (url, data) => {
      //首先创建一个iframe
      let ifr = document.createElement('iframe');
      let fo = document.createElement('form');
      let inp = document.createElement('input');
      ifr.name = 'ifrPost'
      ifr.style.display = 'none';
      document.body.appendChild(ifr);
      fo.target = ifr.name;
      fo.action = url;
      fo.method = 'get';
      for (let i in data) {
            inp.name = i;
            inp.value = data[i].toString();
            fo.appendChild(inp.cloneNode());
      }
      document.body.appendChild(fo);
      fo.submit();
      document.body.removeChild(fo);
}