
// import { Scrooth, scrollDisable, scrollAble ,setHeader } from "./common.js";
// setHeader(headerEvent);

// setHeader.headerBlack();
// common
// setHeaderFooter();
setHeaderFooter();

let $window = $(window);
let $windowHeight = $window.outerHeight();
let sct = 0;
let startEl = 0;
let excuted = false;
let activated = false;

// 쿠키 여부 체크 함수
function checkCookie(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;

  for (let cookie of cookieArr) {
    if (cookie.indexOf(name) > -1) {
      visited = true;
    }
  }
  return visited;
  // if (visited) {
  //   playVideoAnimation(visited);
  // } else {
  //   playVideoAnimation(visited);
  //   setCookie("main", "video", 1);
  // }
}

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

function showPopUp() {
  if (checkCookie("MiraeAsset")) {
    popup.classList.add("hide");
  } else popup.classList.remove("hide");
}

// --팝업 - 송림

// 쿠키생성함수
function setCookie(name, val, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${val};Expires=${date}`;
}
// 쿠키삭제
function delCookie(name) {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  document.cookie = `${name}='';Expires=${date}`;
}

// 메인 애니메이션 함수 - 준범

// --메인영상 - 준범
function playVideoAnimation() {
  let visited = checkCookie("video");

  // 메인영상 애니메이션
  const $videoContent = $(".video_content");
  const $videoFirst = $(".first_main");
  popup.classList.add("hide");

  if (visited) {
    $videoContent.removeClass("active").eq(1).addClass("active");
    showPopUp();
  } else {
    setCookie("main", "video", 1);
    $("#header").hide();
    scrollDisable();
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

                        // $videoContent
                        //   .eq(1)
                        //   .find("video")
                        //   .attr(
                        //     "src",
                        //     "./images/main/main_video/main_video_bg3.mp4"
                        //   );;
                        $("#header").slideDown();
                        scrollAble();
                        setTimeout(() => {
                          showPopUp();
                        }, 1000);
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
playVideoAnimation();
// 헤더 - 송림

// --헤더 - 송림

// 경영철학 - 선진
function businessPhilosophy() {
  // vision_scroll 이미지 크기조절

  let visionScr = $(".vision_scroll"),
    visionScrOST = visionScr.offset().top,
    visionHeight = visionScr.find(".visionBG").outerHeight(),
    visiondesc = $(".vision_scroll_wrapper ul li");
  // let scrollPosition = $(window).scrollTop();
  // let $windowHeight = $(window).outerHeight();

  // if (startEl >= visionScrOST ) {
  if (startEl >= visionScrOST && sct <= endOfEl(visionScr)) {
    console.log("bussiness");
    let scrollAmt = sct + ($windowHeight - visionScrOST);
    let leftValue = 30 - (scrollAmt / $windowHeight) * 30;
    let rightValue = 70 + (scrollAmt / $windowHeight) * 30;

    document.documentElement.style.setProperty("--clip-left", `${leftValue}%`);
    document.documentElement.style.setProperty(
      "--clip-right",
      `${rightValue}%`
    );
    visiondesc.each(function () {
      let offset = $(this).offset().top;
      let distanceFromTop = offset - sct;
      if (
        distanceFromTop >= $windowHeight / 3 &&
        distanceFromTop <= ($windowHeight / 3) * 2
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }
  // //vision_scroll 이미지 크기조절
  // 스크롤 문구 활성화
}
// --경영철학 - 선진
// //스크롤 문구 활성화

// 수상이력 - 송림
function awardHistory() {
  let targetSection = $(".main_award");
  let sectionStart = targetSection.offset().top;

  let content = $(".year_wrap .year_txt");
  let awardSlide = $(".award_slide");
  let slideBtn = $(".pagination li a");

  //최초 이미지 커졌다 작아지는 이벤트
  if (
    $window.width() > 500 &&
    sct >= sectionStart - 1500 &&
    sct <= endOfEl(targetSection)
  ) {
    console.log("award");
    let scrolledAmount = sct - (sectionStart - 400);
    let value = Math.max(1, 3 - (scrolledAmount * 0.12) / 100);
    // document.documentElement.style.setProperty('--scale', value);
    $(".main_award .content img:first-of-type").css("--scale", value);
    //--최초 이미지 커졌다 작아지는 이벤트
  }

  // 해당 slide에 도달하면 같은 내용의 txt로 변경되는 이벤트
  if ($(window).width() > 500) {
    awardSlide.each(function (idx) {
      if ($(this).offset().top - 250 <= sct && sct <= endOfEl($(this))) {
        // content.eq(idx).siblings(".year_txt").removeClass("on");
        // content.eq(idx).siblings(".year_txt").removeClass("on");
        content.removeClass("on");
        // content.eq(idx).addClass("on");
        content.eq(idx).addClass("on");

        slideBtn.removeClass("show");
        slideBtn.eq(idx).addClass("show");
      }
    });
    // --해당 slide에 도달하면 같은 내용의 txt로 변경되는 이벤트
  }

  // pagination a를 클릭했을 때 해당되는 위치로 이동 + class명 추가
  slideBtn.click(function (e) {
    e.preventDefault();

    let slideOst = awardSlide.eq($(this).parent().index()).offset().top;

    $("html,body").stop().animate({ scrollTop: slideOst }, 500, "easeOutCubic");
    //  slideBtn.removeClass('show');
    //  slideBtn.eq(e).addClass('show');
  });
  // --같은 버튼을 다시 클릭하면 클래스명이 사라지지 않도록

  // --수상이력 - 송림
}

// 수치자료 - 준범
function numericData() {
  const increaseData = $(".data_sticky");
  let increaseNumber = $(".increase_number");
  let increaseNumberOST = increaseNumber.offset().top;
  // const increaseNumberOST = $(".increase_number .title_content h2").offset().top;
  const increaseTarget = $(".data_content .textbox .strong");

  const profitData = $(".profit_data");
  const profitDataOST = profitData.offset().top;
  const profitDataHeight = profitData.find(".profitBG").outerHeight();

  // 스크롤시 숫자 증가 함수
  // console.log('스크롤',sct)
  if (
    sct >= increaseNumberOST - $window.outerHeight() / 3 &&
    sct <= endOfEl(increaseNumber)
  ) {
    console.log("numeric");

    if (!excuted) {
      increaseTarget.each(function () {
        animateInit($(this));
      });
      excuted = true;
    }
  }
  // //스크롤시 숫자 증가 함수

  // profit_scroll 이미지 크기조절
  if (
    sct + $windowHeight + 500 >= profitDataOST &&
    sct <= endOfEl(increaseNumber)
  ) {
    // console.log("test");
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
      sct >= $profitItem - ($windowHeight * 5) / 6 &&
      sct <= $profitItem - $windowHeight / 3
    ) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  // //스크롤 문구 활성화

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
}

// 사회공헌 - 선진
function csr() {
  let csrwrapper = $(".social_wrapper"),
    subbox = $(".social_subbox");

  if (
    sct + $windowHeight >= csrwrapper.offset().top &&
    sct <= endOfEl(csrwrapper)
  ) {
    console.log("social");
    if (!activated) {
      subbox.addClass("animate");
      activated = true;
    }
  } else if (activated) {
    subbox.removeClass("animate");
    // console.log("test3");
  }

  let subboxDesc = $(".subdesc");

  subbox.click(function () {
    subbox.removeClass("active");
    $(this).addClass("active");
  });

  // let csrwrapper = $('.social_wrapper'),
  //   subbox = $('.social_subbox');

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() + $(window).outerHeight() >= csrwrapper.offset().top) {
  //     subbox.addClass('animate');
  //   } else {
  //     subbox.removeClass('animate');
  //   }
  //   console.log($(window).scrollTop());
  // });

  // let subboxDesc = $('.subdesc');

  // subbox.click(function () {
  //   $(this).siblings().find('.subdesc').removeClass('active');
  //   let targetDesc = $(this).find('.subdesc');
  //   if (targetDesc.hasClass('active')) {
  //     targetDesc.removeClass('active');
  //   } else {
  //     targetDesc.addClass('active');
  //   }
  // });

  // --사회공헌 - 선진
}

let mainNews = $(".main_notice");
let vScroll = $(".vertical_scroll");
let mainNewsOST = mainNews.offset().top;
let noticeWrapper = mainNews.find(".notice_slide_container");
// let newsTitle = noticeWrapper.find('.news_title');
// let advTitle = noticeWrapper.find('.adv_title');
let activeTitle = $(".titleContainer > div");
let noticeSlideContainer = $(".notice_slide_container");
let activeSlide = $(".notice_slide_container > ul");
let slide1Width = activeSlide.eq(0).outerWidth();
function notice() {
  // 뉴스 - 준범
  // mainNews.mouseenter(function () {
  // $window.scroll(function () {
  if (sct >= mainNewsOST && sct <= endOfEl(mainNews)) {
    // let sct = $(window).scrollTop();
    // console.log(sct)
    let verScrollAmt = sct - mainNewsOST;
    if (sct >= mainNewsOST && sct < mainNewsOST + slide1Width) {
      console.log("news1");
      activeTitle.removeClass("active");
      activeTitle.eq(0).addClass("active");
      noticeWrapper.css({ transform: `translateX(${-verScrollAmt}px)` });
    } else if (sct >= mainNewsOST + slide1Width) {
      console.log("news2");
      activeTitle.removeClass("active");
      activeTitle.eq(1).addClass("active");
      noticeWrapper.css({ transform: `translateX(${-verScrollAmt}px)` });
    }
  }
  // });
  // });

  // --뉴스 - 준범
}

function getNoticeSlideWidth() {
  slide1Width = activeSlide.eq(0).outerWidth();
  let noticeSlideWidth =
    activeSlide.eq(0).outerWidth() +
    activeSlide.eq(1).outerWidth() +
    $windowHeight;
  mainNews.css({ height: noticeSlideWidth });
}

// function fetchData(path) {
// return fetch(path)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // 읽어온 JSON 데이터를 반환
//     return data;
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
// }

// function setSlide() {
//   let showNoticeCount = 6;
//   fetchData("./data/news.json").then((datas) => {
//     html = "";
//     for (let i = 0; i < showNoticeCount; i++) {
//       let data = datas[i];
//       let title = data.title;
//       let link = data.link;
//       let img = data.img;

//       html += `<li>
//       <a href="${link}" target="_blank">
//         <div class="card_top df aic">
//           <p class="card_title">${title}</p>
//         </div>
//         <img src="${img}" alt="" />
//       </a>
//       </li>`;
//       $(".newsSlider").html(html);
//       // getNoticeSlideWidth();
//     }
//   });
//   fetchData("./data/adv_video.json").then((datas) => {
//     html = "";
//     for (let i = 0; i < showNoticeCount; i++) {
//       //console.log('datas',datas[i])
//       let data = datas[i];
//       let title = data.title;
//       let link = data.show_path;
//       let img = data.thumb;

//       html += `<li>
//       <a href="${link}" target="_blank">
//         <div class="card_top df aic">
//           <p class="card_title">${title}</p>
//         </div>
//         <img src="${img}" alt="${title}" />
//       </a>
//       </li>`;
//       $(".advSlider").html(html);
//       // getNoticeSlideWidth();
//     }
//   });
// }
// setSlide.then(() => {
//   getNoticeSlideWidth()
// });

function fetchData(url) {
  return fetch(url).then((response) => response.json());
}
function generateHtml(dataArray, isNews = true) {
  let html = "";
  for (let i = 0; i < dataArray.length; i++) {
    let data = dataArray[i];
    let title = data.title;
    let link = isNews ? data.link : data.show_path;
    let img = isNews ? data.img : data.thumb;
    let altText = isNews ? title : title || ""; // alt text for image

    html += `<li>
      <a href="${link}" target="_blank">
        <div class="card_top df aic">
          <p class="card_title">${title}</p>
        </div>
        <img src="${img}" alt="${altText}" />
      </a>
    </li>`;
  }
  return html;
}
function setSlide() {
  let showNoticeCount = 6;

  // Create an array of promises for fetching data
  let newsPromise = fetchData("./data/news.json");
  let advPromise = fetchData("./data/adv_video.json");

  // Use Promise.all to wait for both fetches to complete
  return Promise.all([newsPromise, advPromise]).then(([newsData, advData]) => {
    // Generate HTML for news data
    let newsHtml = generateHtml(newsData.slice(0, showNoticeCount), true);
    $(".newsSlider").html(newsHtml);

    // Generate HTML for adv data
    let advHtml = generateHtml(advData.slice(0, showNoticeCount), false);
    $(".advSlider").html(advHtml);

    // Call the function to set slide width after HTML is updated
    getNoticeSlideWidth();
  });
}

// Call setSlide and handle any additional actions
setSlide();

// 스크롤 애니메이션
$window.scroll(function () {
  sct = $window.scrollTop();
  // console.log("sct:", sct);
  startEl = sct + $(window).outerHeight();
  // console.log(sct)
  if (sct > 0) {
    headerBlack();
  } else {
    headerWhite();
  }

  businessPhilosophy();
  awardHistory();
  numericData();
  notice();
  csr();
});

function endOfEl(el) {
  return el.offset().top + el.outerHeight();
}

// award 슬라이드 이벤트

// 부드러운 슬라이드
// class Scrooth {
//   constructor({
//     element = window,
//     strength = 10,
//     acceleration = 1.2,
//     deceleration = 0.975,
//   } = {}) {
//     this.element = element;
//     this.distance = strength;
//     this.acceleration = acceleration;
//     this.deceleration = deceleration;
//     this.running = false;

//     this.element.addEventListener("wheel", this.scrollHandler.bind(this), {
//       passive: false,
//     });
//     this.element.addEventListener("mousewheel", this.scrollHandler.bind(this), {
//       passive: false,
//     });
//     this.scroll = this.scroll.bind(this);
//   }

//   scrollHandler(e) {
//     e.preventDefault();

//     if (!this.running) {
//       this.top = this.element.pageYOffset || this.element.scrollTop || 0;
//       this.running = true;
//       this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
//       this.isDistanceAsc = true;
//       this.scroll();
//     } else {
//       this.isDistanceAsc = false;
//       this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
//     }
//   }

//   scroll() {
//     if (this.running) {
//       this.currentDistance *=
//         this.isDistanceAsc === true ? this.acceleration : this.deceleration;
//       Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false
//         ? (this.running = false)
//         : 1;
//       Math.abs(this.currentDistance) >= Math.abs(this.distance)
//         ? (this.isDistanceAsc = false)
//         : 1;

//       this.top += this.currentDistance;
//       this.element.scrollTo(0, this.top);

//       requestAnimationFrame(this.scroll);
//     }
//   }
// }

// const scroll = new Scrooth({
//   element: window,
//   strength: 40,
//   acceleration: 1.1,
//   deceleration: 0.9,
// });

const scroll = new Scrooth({
  element: window,
  strength: 50,
  acceleration: 1.05,
  deceleration: 0.9,
});

// --스크롤 차단

// const mw_768 = window.matchMedia('screen and (max-width: 768px)');

// function responsive() {
//   if (mw_768.matches) {
//     getNoticeSlideWidth();
//   } else {
//     console.log('no');
//   }
// }

$window.resize(function () {
  // getNoticeSlideWidth();
});
// responsive();
// getNoticeSlideWidth();
