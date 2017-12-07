/**
 * Created by admin on 2017/12/3.
 */
function * gen() {
    yield 1;
    yield 2;
    return 3;
};
console.log(gen().next(),gen().next(),gen().next());
