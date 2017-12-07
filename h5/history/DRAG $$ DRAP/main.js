/**
 * Created by admin on 2017/11/5.
 */
$(function () {

    let draggableColor = $('.draggable > div');
    let redText = $('.text > div:nth-child(2)');
    draggableColor.on('dragstart',function (event) {

        event.dataTransfer.setData('ele','.draggable > div');
    });
    redText.on('dragover',function (event) {
        event.preventDefault();
    }).on('drop',function (event) {
        let dragTarget = event.dataTransfer.getData('ele');
        $(dragTarget).css('visibility','hidden');
        $(this).text('correct');
    });
});