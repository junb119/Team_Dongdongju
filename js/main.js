// common
let $window = $(window);

// 팝업 - 송림
const popup = document.querySelector(".popup");
const input = popup.querySelector("input");
const closeBtn = popup.querySelector("button");

closeBtn.addEventListener("click", () => {
  // console.log(in5660put.checked);
  if (input.checked) {
    //쿠키생성
    setCookie("Portfolio", "MiraeAsset", 1);
  } else {
    //쿠키삭제
    delCookie("Portfolio");
  }
  popup.classList.add("hide");
});
function setCookie(name, val, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${val};Expires=${date}`;
}
function delCookie(name) {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  document.cookie = `${name}='';Expires=${date}`;
}

function checkCookie(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;

  for (let cookie of cookieArr) {
    if (cookie.indexOf(name) > -1) {
      visited = true;
    }
  }
  if (visited) {
    // popup.classList.add("hide");
    playVideoAnimation(true);
  } else {
    // popup.classList.remove("hide");
    playVideoAnimation(false);
  }
}

// popup.classList.add("hide");
checkCookie("MiraeAsset");
// --팝업 - 송림

// 헤더 - 송림

// --헤더 - 송림

// 메인영상 - 준범

// 메인영상 애니메이션
function playVideoAnimation(visited) {
  const $videoContent = $(".video_content");
  const $videoFirst = $(".first_main");

  if (visited) {
    $videoContent.removeClass("active");
    $videoContent.eq(1).addClass("active");
    popup.classList.add("hide");
  } else {
    $("#header").hide();
    
    scrollDisable()
    $videoFirst
      .find("h2")
      .delay(500)
      .animate(
        { opacity: "1" },
        {
          duration: 1000,
          complete: function () {
            $videoFirst.find(".first_down_bg").animate(
              {
                top: "50%",
                transform: "translate(-100px,-56px)",
              },
              {
                duration: 2000,
                easing: "easeInOutQuad",
                complete: function () {
                  $videoFirst.find(".first_down_bg").animate(
                    {
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      width: "100%",
                      height: "100%",
                      transform: "translate(0,0)",
                    },
                    {
                      duration: 1000,
                      easing: "easeInOutQuad",
                      complete: function () {
                        $videoContent
                          .removeClass("active")
                          .eq(1)
                          .addClass("active");

                        $videoContent
                          .eq(1)
                          .find("video")
                          .attr("autoplay", "autoplay");
                        popup.classList.remove("hide");
                        $("#header").slideDown();
                        scrollAble()
                      },
                    }
                  );
                },
              }
            );
          },
        }
      );
  }
}

// --메인영상 - 준범

// 경영철학 - 선진
// --경영철학 - 선진

// 수상이력 - 송림

let targetSection = $(".main_award");
let sectionStart = targetSection.offset().top;

let content = $(".year_wrap .year_txt");
let awardSlide = $(".award_slide");
let slideBtn = $(".pagination li a");

$(window).scroll(() => {
  //최초 이미지 커졌다 작아지는 이벤트
  let scrollTop = $(window).scrollTop();
  if (scrollTop > sectionStart - 1500) {
    let scrolledAmount = scrollTop - (sectionStart - 400);
    let value = Math.max(1, 3 - (scrolledAmount * 0.08) / 100);
    document.documentElement.style.setProperty("--scale", value);
  }
  //--최초 이미지 커졌다 작아지는 이벤트

  // 해당 slide에 도달하면 같은 내용의 txt로 변경되는 이벤트
  let sct = $(window).scrollTop();
  awardSlide.each(function (idx) {
    if ($(this).offset().top - 250 <= sct) {
      content.removeClass("on");
      content.eq(idx).addClass("on");

      slideBtn.removeClass("show");
      slideBtn.eq(idx).addClass("show");
    }
  });
  // --해당 slide에 도달하면 같은 내용의 txt로 변경되는 이벤트
});
// pagination a를 클릭했을 때 해당되는 위치로 이동 + class명 추가
slideBtn.click(function (e) {
  e.preventDefault();

  let slideOst = awardSlide.eq($(this).parent().index()).offset().top;
  console.log(slideOst);
  $("html,body").stop().animate({ scrollTop: slideOst }, 500, "easeOutCubic");
  //  slideBtn.removeClass('show');
  //  slideBtn.eq(e).addClass('show');
});
// --같은 버튼을 다시 클릭하면 클래스명이 사라지지 않도록

// --수상이력 - 송림

// 수치자료 - 준범
const increaseData = $(".data_sticky");
const increaseNumberOST = $(".increase_number .title_content h2").offset().top;
const increaseTarget = $(".data_content .textbox .strong");
let excuted = false;

const profitData = $(".profit_data");
const profitDataOST = profitData.offset().top;
const profitDataHeight = profitData.find(".profitBG").outerHeight();

$window.scroll(function () {
  // 스크롤시 숫자 증가 함수
  let sct = $window.scrollTop();
  // console.log('스크롤',sct)
  if (sct >= increaseNumberOST - $window.outerHeight() / 3) {
    if (!excuted) {
      increaseTarget.each(function () {
        animateInit($(this));
      });
      excuted = true;
    }
  }
  // //스크롤시 숫자 증가 함수

  // profit_scroll 이미지 크기조절
  let $windowHeight = $(window).outerHeight();
  if (sct + $windowHeight >= profitDataOST) {
    let scrollAmt = sct + ($windowHeight - profitDataOST);
    let leftValue = 30 - (scrollAmt / $windowHeight) * 30;
    let rightValue = 70 + (scrollAmt / $windowHeight) * 30;

    document.documentElement.style.setProperty("--clip-left", `${leftValue}%`);
    document.documentElement.style.setProperty(
      "--clip-right",
      `${rightValue}%`
    );
  }
  // //profit_scroll 이미지 크기조절

  // profit_scroll 이미지 전환
  const $profitOST = $(".profit_data").offset().top;
  let profigBG = $(".profitBG img");
  let $profitItems = $(".profit_scroll_wrapper ul li");
  if (sct >= $profitOST) {
    increaseData.css({ opacity: "0" });
  } else {
    increaseData.css({ opacity: "1" });
  }
  profigBG.each(function () {
    let itemloc = $profitOST + $(this).index() * $windowHeight;
    if (sct >= itemloc) {
      profigBG.removeClass("active");
      $(this).addClass("active");
    }
  });
  // profit_scroll 이미지 전환

  // 스크롤 문구 활성화
  $profitItems.each(function () {
    let $profitItem = $(this).offset().top;
    if (
      sct >= $profitItem - ($windowHeight * 5) / 7 &&
      sct <= $profitItem - $windowHeight / 5
    ) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  // //스크롤 문구 활성화
});

function animateInit(target) {
  // 수치자료 증가 함수
  let targetData = target;
  let targetNumber = targetData.attr("data-numeric");

  $({ num: 0 })
    .stop()
    .animate(
      { num: targetNumber },
      {
        duration: 1000,
        progress: function () {
          let now = Math.floor(this.num);
          targetData.text(now);
        },
      }
    );
}

// --수치자료 - 준범

// 사회공헌 - 선진

let csrwrapper = $(".social_wrapper");
console.log(csrwrapper.scrollTop());

subbox = $(".social_subbox");

$(window).scroll(function () {
  if ($(window).scrollTop() > 805) {
    subbox.addClass("animate");
  } else {
    subbox.removeClass("animate");
  }
  // console.log(csrwrapper.scrollTop());
});

let subboxDesc = $(".subdesc");

subbox.click(function () {
  $(".subdesc").removeClass("active");
  $(this).find(".subdesc").toggleClass("active");
});

// --사회공헌 - 선진

// 뉴스 - 준범
// let mainNews = $('.main_news')
// let vScroll = $('.vertical_scroll')
// let mainNewsOST = mainNews.offset().top
// let newsWrapper = mainNews.find('.news_wrapper')
// let newsTitle = newsWrapper.find('.news_title')
// let advTitle = newsWrapper.find('.adv_title')

// let advWrapper = mainNews.find('.adv_wrapper')

// console.log('adw',advWrapper.offset().top)

// mainNews.mouseenter(function() {
//   console.log(window.scrollY)
//   $(window).scroll(function () {
//     let sct = $(window).scrollTop()
//     // console.log(sct)
//     if (sct >= mainNewsOST) {
//       let verScrollAmt = sct - mainNewsOST
//       vScroll.css({transform: `translateX(${-verScrollAmt}px)`})
//       // console.log(verScrollAmt)

//       if (verScrollAmt <= newsWrapper.outerWidth() - (mainNews.outerHeight() * 0.08)){
//         newsTitle.css({transform: `translateX(${verScrollAmt}px)`})
//       }

//       if (sct >= advWrapper.offset().top - $(window).outerHeight()) {
//         verScrollAmt = sct - advWrapper.offset().top
//         // console.log(advTitle)
//         advTitle.css({transform: `translateX(${-verScrollAmt}px)`})

//       }
//       // if (verScrollAmt <= vScroll.outerWidth() - newsWrapper.outerWidth()) {
//       //   let newScrollAmt =

//       // }
//     }

//   })
// })

// --뉴스 - 준범

// 뉴스2
let mainNews = $(".main_notice");
let vScroll = $(".vertical_scroll");
let mainNewsOST = mainNews.offset().top;
let noticeWrapper = mainNews.find(".notice_slide_container");
let newsTitle = noticeWrapper.find(".news_title");
let advTitle = noticeWrapper.find(".adv_title");
let activeTitle = $(".titleContainer > div");
let activeSlide = $(".notice_slide_container > ul");
let slide1Width = activeSlide.eq(0).outerWidth();
// console.log(advTitle.offset().top)

mainNews.mouseenter(function () {
  $(window).scroll(function () {
    let sct = $(window).scrollTop();
    // console.log(sct)
    if (sct >= mainNewsOST && sct < mainNewsOST + slide1Width) {
      activeTitle.removeClass("active");
      activeTitle.eq(0).addClass("active");
    } else if (sct >= mainNewsOST + slide1Width) {
      activeTitle.removeClass("active");
      activeTitle.eq(1).addClass("active");
    }
    let verScrollAmt = sct - mainNewsOST;
    noticeWrapper.css({ transform: `translateX(${-verScrollAmt}px)` });
  });
});
// --뉴스2

// 푸터 - 선진
// --푸터 - 선진
// award 슬라이드 이벤트

class Scrooth {
  constructor({
    element = window,
    strength = 10,
    acceleration = 1.2,
    deceleration = 0.975,
  } = {}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener("wheel", this.scrollHandler.bind(this), {
      passive: false,
    });
    this.element.addEventListener("mousewheel", this.scrollHandler.bind(this), {
      passive: false,
    });
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *=
        this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false
        ? (this.running = false)
        : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance)
        ? (this.isDistanceAsc = false)
        : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);

      requestAnimationFrame(this.scroll);
    }
  }
}

// const scroll = new Scrooth({
//   element: window,
//   strength: 40,
//   acceleration: 1.1,
//   deceleration: 0.975,
// });

// 스크롤 차단


function scrollDisable() {
  $("html, body").addClass("no_scroll").on('scroll touchmove mousewheel', function(e){
    e.preventDefault();
});
}
function scrollAble() {
  $("html, body").removeClass("no_scroll").off('scroll touchmove mousewheel');
}
