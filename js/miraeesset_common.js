setHeaderFooter(() => {
  headerBlack();
});

// 서브 공통 타이틀
let targetSection = document.querySelector(".sub_tit_wrap");
let sectionStart = targetSection.offsetTop;
let sectionHeight = targetSection.offsetHeight;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let scrollPastSection = sectionStart + sectionHeight;
  let scrollFraction = 0;

  if (scrollTop > sectionStart) {
    scrollFraction = (scrollTop - sectionStart) / sectionHeight;
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
