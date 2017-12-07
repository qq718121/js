/**
 * Created by admin on 2017/11/5.
 */
$(function () {
    let menu = $('ul.navigator > li');
    let content = $('div.content');
    //根据当前的URL初始化页面
    function initPage(page) {
        //清除导航栏元素选中样式
        menu.removeClass('selected-item');

        //找到当前导航栏元素
        menu.filter(function () {
            console.log(page);
            return $(this).text().toLowerCase().trim() === page;
        }).addClass('select-item');//设置当前导航栏选中样式
        content.text('this is a ' + page + 'page');//设置内容区域央视
    }
    initPage(location.pathname.substring(1));//根据当前的URL初始化页面
    menu.on('click',function () {
        let page = $(this).text().toLowerCase().trim();//获取被单机的元素
        initPage(page);//初始化页面
        history.pushState('1',page,page);//修改URL
        console.log(history.pushState('',page,page));
    });
    //监听URL的变化
    window.addEventListener('popstate',function (e) {
        //根据当前的URL初始化页面
        initPage(location.pathname.substring(1));
    })
});