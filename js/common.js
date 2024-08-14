// header footer 혹은 그 외 공통 요소 관련 js 작성
let header,
  headerLogo,
  mainMenu,
  subMenu,
  subMenuHeight,
  headerHeight,
  mobileBtn,
  mobileToggle,
  mobileMenu,
  langMenu,
  lastScrollTop = 0;

// 헤더 푸터 html 로드
let isHeaderFooterLoaded = false;
console.log("isHeaderFooterLoaded :", isHeaderFooterLoaded);
function loadHeaderFooter() {
  return new Promise((resolve, reject) => {
    if (isHeaderFooterLoaded) {
      resolve(); // 이미 로드된 경우 즉시 resolve
      return;
    }

    let headerLoaded = false;
    let footerLoaded = false;

    $("#header").load("./header.html", () => {
      headerLoaded = true;
      checkIfLoaded();
    });

    $("#footer").load("./footer.html", () => {
      footerLoaded = true;
      checkIfLoaded();
    });

    function checkIfLoaded() {
      if (headerLoaded && footerLoaded) {
        isHeaderFooterLoaded = true;
        resolve();
      }
    }
  });
}

function setHeaderFooter(callback) {
  loadHeaderFooter().then(() => {
    setHeader(); // header가 로드된 후 호출할 함수
    setFooter(); // footer가 로드된 후 호출할 함수
    console.log("isHeaderFooterLoaded :", isHeaderFooterLoaded);
    if (callback) callback(); // 사용자 콜백 호출
  });
}

// 헤더 기본 셋
function setHeader() {
  header = $("#header");
  headerLogo = header.find(".logo img");
  mainMenu = $(".gnb_wrap .gnb>li>a");
  subMenu = $(".gnb_wrap .depth02");
  subMenuList = $(".gnb_wrap .depth02>li>a");
  subMenuHeight = $(subMenu).height();
  headerHeight = header.height();
  mobileBtn = $(".m_menu_btn");
  mobileToggle = $(".m_menu_btn span");
  mobileMenu = $(".m_gnb_wrap .m_gnb > li");
  langMenu = $(".lang_wrap a");

  // return { headerBlack, headerWhite, headerInOut, headerScroll, headerMobile };
  headerWhite();
  headerInOut();
  headerScroll();
  headerMobile();
}
// 헤더 검은 글씨, 흰 배경
function headerBlack() {
  header.addClass("fixed");
  mainMenu.addClass("on");
  langMenu.addClass("on");
  subMenuList.addClass("on");
  mobileToggle.addClass("on");
  headerLogo.attr("src", "images/main/main_header/main_logo.png");
}
// 헤더 흰 글씨 , 투명 배경
function headerWhite() {
  header.removeClass("fixed");
  mainMenu.removeClass("on");
  subMenuList.removeClass("on");
  langMenu.removeClass("on");
  mobileToggle.removeClass("on");
  headerLogo.attr("src", "images/main/main_header/main_logo_white.png");
}
// 헤더 배경 투명도 조절
function headerTransparency(opacity) {
  header.css({ background: `rgba(0,0,0,${opacity})` });
}

// header mouseenter,leave 이벤트
function headerInOut(headerEvent) {
  header
    .on("mouseenter", function () {
      if ($(window).width() > 500) {
        header
          .stop()
          .animate({ height: headerHeight + subMenuHeight + 75 + "px" }, 500);
        if (headerEvent) headerEvent();
      }
    })
    .on("mouseleave", function () {
      header.stop().animate({ height: headerHeight + "px" }, 300);
    });
}
// --header mouseenter,leave 이벤트

// scroll시 헤더 업 다운 이벤트
function headerScroll() {
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // 스크롤 다운 시 실행할 코드
      header.slideUp(); // header를 위로 사라지게 함
    } else {
      // 스크롤 업 시 실행할 코드
      header.slideDown(); // header를 아래로 나타나게 함
    }
    lastScrollTop = st;
  });
}
// --scroll시 헤더 업 다운 이벤트

function headerMobile() {
  //모바일 메뉴 이벤트
  mobileBtn.click(function () {
    $(this).toggleClass("open");
    $(".m_menu_wrap").toggleClass("open");
    // mobileToggle.toggleClass('on');
    if ($(window).scrollTop() === 0) {
      if (mobileBtn.hasClass("open")) {
        mobileToggle.addClass("on");
      } else {
        mobileToggle.removeClass("on");
      }
    }
    if ($(window).scrollTop() > 0) {
      if (!mobileBtn.hasClass("open")) {
        mobileToggle.addClass("on");
      }
      if (mobileBtn.hasClass("open")) {
        mobileToggle.addClass("on");
      }
    }
  });
  mobileMenu.click(function () {
    $(this).find("ul").slideToggle();
    $(this).siblings().find("ul").slideUp();
    $(".m_gnb em").toggleClass("open");
    $(this).siblings().find("em").removeClass("open");
  });

  //--모바일 메뉴 이벤트
}
//------------------------------------header 이벤트들

function setFooter() {
  // ----backToTop
  const btt = $(".backToTop");
  const $window = $(window);
  $window.scroll(() => {
    let scrollAmt = $window.scrollTop();
    scrollAmt > 1000 ? btt.addClass("active") : btt.removeClass("active");
  });

  btt.click((e) => {
    e.preventDefault();
    // window.scrollTo(0,0)

    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
  // ----//backToTop
}

// 스크롤 효과
// --부드러운 슬라이드
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

      // 현재 거리가 너무 커지지 않도록 제한
      if (Math.abs(this.currentDistance) >= Math.abs(this.distance)) {
        this.currentDistance =
          this.currentDistance > 0 ? this.distance : -this.distance;
        this.isDistanceAsc = false;
      }

      // 현재 거리가 너무 작아지면 멈춤
      if (Math.abs(this.currentDistance) < 0.1 && !this.isDistanceAsc) {
        this.running = false;
        return;
      }

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);

      requestAnimationFrame(this.scroll);
    }
  }
}
// 스크롤 차단
function scrollDisable() {
  $("html, body")
    .addClass("no_scroll")
    .on(
      "scroll touchmove mousewheel",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
}
// 스크롤 활성화
function scrollAble() {
  $("html, body").removeClass("no_scroll").off("scroll touchmove mousewheel");
}
