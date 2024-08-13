// let header = $("header");
// header.hide();
setHeaderFooter(() => {
  headerBlack();
});
// let lastScrollTop = 0;
// $(window).scroll(function () {
//   var st = $(this).scrollTop();
//   //console.log(st);

//   if (st > lastScrollTop && st > 300) {
//     // 스크롤 다운 시 실행할 코드
//     header.slideUp(); // header를 위로 사라지게 함
//   } else if (st <= lastScrollTop) {
//     // 스크롤 업 시 실행할 코드
//     header.slideDown(); // header를 아래로 나타나게 함
//     if (st === 0) {
//       // console.log('0000');
// header.css({display:'none'});
//  }
//   }

//   lastScrollTop = st;
// });

// 서브 공통 타이틀
let targetSection = document.querySelector(".sub_tit_wrap");
let sectionStart = targetSection.offsetTop;
let sectionHeight = targetSection.offsetHeight;
//console.log(sectionStart, sectionHeight)

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let scrollPastSection = sectionStart + sectionHeight;
  //console.log('scroll:'+scrollTop, 'sps:'+scrollPastSection);

  let scrollFraction = 0;

  if (scrollTop > sectionStart) {
    scrollFraction = (scrollTop - sectionStart) / sectionHeight;
    //  console.log(scrollFraction);
  }
  if (scrollTop >= scrollPastSection) {
    scrollFraction = 1;
  }

  let value = scrollFraction * 100;
  document.documentElement.style.setProperty("--crop", `${value}%`);
});
// -------서브 공통 타이틀

// aos.js실행
AOS.init();
