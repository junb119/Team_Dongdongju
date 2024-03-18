// header footer 혹은 그 외 공통 요소 관련 js 작성
// jquery 로드 요청

//header 이벤트들
$(function(){
    let header = $('#header'),
        headerLogo = header.find('.logo img'),
        menu = $('.gnb_wrap .gnb>li>a'),
        subMenu = $('.gnb_wrap .depth02'),
        langMenu = $('.lang_wrap a');

    $(window).on('scroll', function () {
      var st = $(this).scrollTop();
  
      if (st > 0) {
        header.addClass('fixed');
        menu.addClass('on');
        langMenu.addClass('on');
        headerLogo.attr('src','images/main_logo.png');
      } else {
        header.removeClass('fixed');
        menu.removeClass('on'); 
        langMenu.removeClass('on'); 
        headerLogo.attr('src','images/main_logo_white.png');
      }
    });
  
    $('#header .gnb_wrap')
      .on('mouseenter', function () {
        $('#header').addClass('fixed');
        menu.addClass('on');
        subMenu.addClass('on');
        langMenu.addClass('on');
        headerLogo.attr('src','images/main_logo.png');
      })
      .on('mouseleave', function () {
        $('#header').removeClass('fixed');
        menu.removeClass('on'); 
        subMenu.removeClass('on'); 
        langMenu.removeClass('on'); 
        headerLogo.attr('src','images/main_logo_white.png');
      });
//header 이벤트들


});