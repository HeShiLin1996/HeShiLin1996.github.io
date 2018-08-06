require('../less/common.less');
require('../less/normalized.less');
require('../less/detailsofa.less');

$(function(){
    $.ajax({
        url:"../json/common.json",
        type:"GET",
        dataType:"json",
        success:(response)=>{
            $('header').html(response.top)
            $('.sofamn').html(response.comn)
            $('.sofam').html(response.comm)
            $('footer').html(response.fot);
            $('.nav_menu').html(response.nav_menu);
            $('.logAndShop').prepend(response.login);
            $('.header_log').html(response.goindex);
            $('.look').html(response.look);
       
    
    ($(".imglist")).children('li').on('click',(e)=>{
        $('.imglist>li').removeClass("bor");
        $('.bigimg').html(`<img src="../images/example_${e.currentTarget.className}.jpg" alt="">`);
        $(`.${e.currentTarget.className}`).addClass('bor');
    })

    $('.plus').on('click',()=>{
        let num = $('.nums').val();
        if(num<3){
        num++;
        $('.nums').val(num);
        }
    })
    $('.minus').on('click',()=>{
        let num = $('.nums').val();
        if(num>0){
        num--;
        $('.nums').val(num);
        }
    })
    var x = 0;
    $(".header_bg").on("click",function(){
        console.log(1);
        if(x%2 ==0){
            $(".shopBrief").css("border","1px solid #ccc").css("display","block");
            $(".shopping").css("border","1px solid #ccc").css("border-bottom","2px solid white");
        }else{
            $(".shopBrief").css("display","none");
            $(".shopping").css("border","1px solid transparent");
        }
        x = x + 1;
    })

    $("#nav_search").on("focus",function(){
        $(this).css("box-shadow","0px 0px 14px 0px green");
    });
    $("#nav_search").blur(function(){
        $(this).css("box-shadow","0px 0px 0px 0px white");
    });
}
});
})