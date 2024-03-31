let targetSection = document.querySelector('.sub_tit_wrap');
let sectionStart = targetSection.offsetTop;
let sectionHeight = targetSection.offsetHeight;
console.log(sectionStart, sectionHeight)

window.addEventListener('scroll',()=>{
  let scrollTop = window.scrollY;
  let scrollPastSection = sectionStart + sectionHeight;
  console.log('scroll:'+scrollTop, 'sps:'+scrollPastSection);


  let scrollFraction = 0;

  if(scrollTop > sectionStart) {
    scrollFraction = (scrollTop - sectionStart) / sectionHeight;
    console.log(scrollFraction);
  }
  if(scrollTop >= scrollPastSection) {
    scrollFraction = 1;
  }
  
  let value = scrollFraction * 100;
  document.documentElement.style.setProperty('--crop',`${value}%`);
})