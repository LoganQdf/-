/**
 * Created by hama on 2017/7/31.
 */
$(function(){
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function(event){
        $(this).css('color','#fff');
    }).mouseout(function(){
        $(this).css('color','#a4b094');
    })
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #000');
           $('.ser2').css('border','1px solid #000').css('borderLeft','none');
       }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
       }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){
        $(this).css({
            'color':'#fff',
            'background':'orange'
        })
    }).mouseout(function(){
        $(this).css({
            'color':'#757575',
            'background':'#eee'
        })
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function(){
        if(flag){
            $('.ser1 input').css({
                'border':'1px solid #000',
                'border-right':'none'
            });
            $(this).css({
                'background':'orange',
                'color':'#fff',
                'border':'none'
            })
        }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $(this).css({
               'background':'#fff',
               'color':'#000',
               'border':'1px solid #ccc',
               'border-left':'none'
           })
       }
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
})