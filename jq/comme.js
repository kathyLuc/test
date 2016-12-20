/* 
* @Author: anchen
* @Date:   2016-01-08 14:24:03
* @Last Modified by:   anchen
* @Last Modified time: 2016-01-12 14:29:26
*/  
// banner
$(function(){
    ;(function(){
        $('.nav ul li a').mouseenter(function(event) {
        $(this).children('span').stop().animate({'margin-top':-60},500);
        $(this).children('em').css('color','#fff').children('i').css('color','#fff');
    }).mouseleave(function(event) {
        $('.nav ul li a span').stop().animate({'margin-top':10},500);
        $(this).children('em').css('color','#000').children('i').css('color','#777170');
    });
    })();
    
    
});