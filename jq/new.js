/**
 * Created by Administrator on 2016/7/19 0019.
 */

$(window).load(function(){
    var topHeight = $("#right_aside").offset().top;
    // console.log(topHeight);
    $(window).scroll(function(){
        var stHeight = $(document).scrollTop();
        // console.log(stHeight);
        if(stHeight >= topHeight) {
            if(stHeight >= 1310){
                $("#right_aside").css({
                    "position":"fixed",
                    "top":"",
                    "bottom":224+stHeight-1310+'px',
                    "left":"952px"
                });
                return;
            }
            $("#right_aside").css({
                "position": "fixed",
                "top": 0,
                "left" : "952px",
            });


           
        }
            else{
               
                $("#right_aside").css("position", "static");
            }
    })

})

$(function(){
    $(".subnav li").click(function(){
        $(this).addClass("active").siblings(".subnav li").removeClass("active");
        var index = $(this).index();
        //console.log(index);
        
        $(".main").eq(index).addClass("selected").siblings().removeClass("selected")

    })
})