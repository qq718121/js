/**
 * Created by lenovo on 2017/12/19.
 */
import _ from 'lodash';
import './style.css';
import Icon from './1.png';
import Data from './data.xml';
import PrintMe from './print';
function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = PrintMe;
    element.innerHTML = _.join(['Hellow', 'webpack', '  ']);
    element.classList.add('hello');
    let myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    element.appendChild(btn);
    console.log(1);
    return element;
}
document.body.appendChild(component());