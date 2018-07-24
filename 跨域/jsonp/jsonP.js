
/**
 * @name JSONP 请求工具
 * @param url  请求地址
 * @param data 请求参数
 * @author pck

 */
// import { promises } from "fs";
const jsonReq = (url, data) => {
      return new Promise((resolve, reject) => {
            const handleData = (data) => {
                  const keys = Object.keys(data);
                  const len = keys.length;

                  keys.reduce((pre, cur, index) => {
                        const val = data[cur];
                        const flag = index !== len - 1
                              ? '&'
                              : ' '
                        return `${pre}${cur}=${val}${flag}`
                  }, '')
            }

            // 动态创建script标签
            const script = document.createElement('script')
            // 接口返回的数据获取
            window.jsonpCb = (res) => {
                  document
                        .body
                        .removeChild(script)
                  delete window.jsonpCb
                  resolve(res)
            }
            script.src = `${url}?${handleData(data)}&cb=jsonpCb`
            document
                  .body
                  .appendChild(script)
      })
}
