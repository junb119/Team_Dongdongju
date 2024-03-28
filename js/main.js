// 팝업 - 송림   
const popup = document.querySelector('.popup');
const input = popup.querySelector('input');
const closeBtn =popup.querySelector('button');


closeBtn.addEventListener('click',()=>{
  // console.log(in5660put.checked);
  if(input.checked){
    //쿠키생성
    setCookie('Portfolio','MiraeAsset', 1);
  }else{
    //쿠키삭제
    delCookie('Portfolio');
  }
  popup.classList.add('hide');
});
function setCookie(name, val, day){
    let date = new Date();
    date.setDate(date.getDate()+day);
    document.cookie = `${name}=${val};Expires=${date}`;
  }
  function delCookie(name){
    let date = new Date();
    date.setDate(date.getDate()-1);
    document.cookie = `${name}='';Expires=${date}`;
  }

  function checkCookie(name){
    let cookieArr = document.cookie.split(';');
    let visited = false;

    for(let cookie of cookieArr){
      if(cookie.indexOf(name) > -1) {
        visited = true;
      }
    }
    if(visited) {
      popup.classList.add('hide');
    } else {
      popup.classList.remove('hide');
    }
  }
  checkCookie('MiraeAsset');

// --팝업 - 송림 

// 헤더 - 송림   

// --헤더 - 송림 

// 메인영상 - 준범 

// --메인영상 - 준범 

// 경영철학 - 선진   
// --경영철학 - 선진 


// 수상이력 - 송림   

let targetSection = $('.main_award');
let sectionStart = targetSection.offset().top;

let content = $('.year_wrap .year_txt');
let awardSlide = $('.award_slide');
let slideBtn = $('.pagination li a');

$(window).scroll(()=> {
  //최초 이미지 커졌다 작아지는 이벤트
  let scrollTop = $(window).scrollTop();  
  if (scrollTop > sectionStart - 1500) {
      let scrolledAmount = scrollTop - (sectionStart - 400);
      let value = Math.max(1, 3 - scrolledAmount * 0.08 / 100);
      document.documentElement.style.setProperty("--scale", value); 
    }
  //--최초 이미지 커졌다 작아지는 이벤트

  // 해당 slide에 도달하면 같은 내용의 txt로 변경되는 이벤트
    let sct = $(window).scrollTop();
    awardSlide.each(function(idx){
      if($(this).offset().top - 250 <= sct){
        content.removeClass('on');
        content.eq(idx).addClass('on');

        slideBtn.removeClass('show');
        slideBtn.eq(idx).addClass('show');
      }
    });
   // --해당 slide에 도달하면 같은 내용의 txt로 변경되는 이벤트

   
  });
  // pagination a를 클릭했을 때 해당되는 위치로 이동 + class명 추가
  slideBtn.click(function(e){
     e.preventDefault();
     
     let slideOst = awardSlide.eq($(this).parent().index()).offset().top;
     console.log(slideOst);
     $('html,body').stop().animate({scrollTop:slideOst}, 500,'easeOutCubic'); 
    //  slideBtn.removeClass('show');
    //  slideBtn.eq(e).addClass('show');
});
// --같은 버튼을 다시 클릭하면 클래스명이 사라지지 않도록




// --수상이력 - 송림 

// 수치자료 - 준범 
// --수치자료 - 준범 

// 사회공헌 - 선진 
// --사회공헌 - 선진 

// 뉴스 - 준범 
// --뉴스 - 준범

// 푸터 - 선진 
// --푸터 - 선진
// award 슬라이드 이벤트

