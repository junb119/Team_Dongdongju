// header footer 혹은 그 외 공통 요소 관련 js 작성
// jquery 로드 요청

//header 이벤트들
$(function(){
    let header = $('#header'),
        headerLogo = header.find('.logo img'),
        mainMenu = $('.gnb_wrap .gnb>li>a'),
        subMenu = $('.gnb_wrap .depth02'),
        subMenuHeight = 0,
		    headerHeight = header.height(),
        langMenu = $('.lang_wrap a');

    $(window).on('scroll', function () {
      var st = $(this).scrollTop();
  
      if (st > 0) {
        header.addClass('fixed');
        mainMenu.addClass('on');
        langMenu.addClass('on');
        headerLogo.attr('src','images/main_logo.png');
      
      } else {
        header.removeClass('fixed');
        mainMenu.removeClass('on'); 
        langMenu.removeClass('on'); 
        headerLogo.attr('src','images/main_logo_white.png');
      }
    });
  
    subMenu.each(function(){
      if(subMenuHeight < $(this).height()){
        subMenuHeight = $(this).height();
      }
    });

    header.on('mouseenter', function(){
      header.stop().animate({height:headerHeight + subMenuHeight + 75 + 'px'});
      header.addClass('fixed');
      mainMenu.addClass('on');
      langMenu.addClass('on');
      headerLogo.attr('src','images/main_logo.png');
    })
    .on('mouseleave',function(){
      header.stop().animate({height:headerHeight+'px'});
      // header.removeClass('fixed');
      // mainMenu.removeClass('on'); 
      // langMenu.removeClass('on'); 
      // headerLogo.attr('src','images/main_logo_white.png');
    })
    

//header 이벤트들


});
