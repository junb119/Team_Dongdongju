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
    popup.classList.add("hide");
  } else {
    popup.classList.remove("hide");
  }
}
checkCookie("MiraeAsset");
// --팝업 - 송림

// 헤더 - 송림

// --헤더 - 송림

// 메인영상 - 준범

// --메인영상 - 준범

// 경영철학 - 선진
// --경영철학 - 선진

// 수상이력 - 송림
$(".award_slide").bxSlider({
  pager: false,
  controls: false,
  mode: "vertical",
  minSlides: 4,
});
// --수상이력 - 송림

// 수치자료 - 준범
const increaseData = $(".data_sticky");
const increaseNumberOST = $(".increase_number .title_content h2").offset().top;
const increaseTarget = $(".data_content .textbox .strong");
let excuted = false;

const profitData = $(".profit_data");
const profitDataOST = profitData.offset().top;
const profitDataHeight = profitData.find(".profitBG").outerHeight();

console.log(profitDataHeight);
$window.scroll(function () {
  // console.log('위치',profitData.offset().top + ($window.outerHeight() * 3 / 4))
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
    let scrollAmt = sct + $windowHeight - profitDataOST;

    // if (scrollAmt >= profitDataHeight){
    //   scrollAmt = profitDataHeight
    // }

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
// --사회공헌 - 선진

// 뉴스 - 준범
// --뉴스 - 준범

// 푸터 - 선진
// --푸터 - 선진
// award 슬라이드 이벤트
