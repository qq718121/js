/**
 * Created by admin on 2017/12/3.
 */
async function es7() {
    let a = await Promise.resolve(1);
    let b = await Promise.resolve(a*2);
    let c = await Promise.resolve(b+3);
    return c;
};
es7().then(function (data) {
   console.log(data);
});