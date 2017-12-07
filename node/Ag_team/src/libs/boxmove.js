/**
 * Created by Lenovo on 2017/5/18.
 */
(function ($) {
             $.fn.extend({
                 text:function (attr,value) {
                     this.css(attr,value)
                     return this;
                 }
             })
})(jQuery);