var documentHt = $(document).height();
var slideHt = $('.history_wrap').height();
var slidePos = $('.history_wrap').offset().top;
var historyBar = $('.history_hidden_line');
var threshold =  slidePos + slideHt;
// console.log(slidePos, threshold);



$(window).on('scroll', function() {
  var scrollPos = $(this).scrollTop();
  console.log(scrollPos,slidePos)
  if(scrollPos > slidePos - 1000) {
    let percent = (scrollPos - slidePos) /threshold * 100;
    console.log('퍼센트'+percent, threshold - slidePos, threshold);
    historyBar.css("--line",percent +'%');
  }
});
/*
$(window).on('scroll', function() {
  var scrollPos = $(this).scrollTop();
  console.log(scrollPos, threshold);
  if(scrollPos > slidePos - 500) {
    let percent;
    let constant;
    if (scrollPos >= threshold) {
      percent = 100;
    } else {
      // 초반에는 작은 상수를 사용하고, 중반 이후에는 큰 상수를 사용하여 더 빠르게 증가하도록 설정
      if (scrollPos < slidePos + 1000) {
        constant = scrollPos / (slidePos + 500); // 초반 상수
      } else {
        constant = Math.max(1, 2 - (scrollPos - (slidePos + 1000)) / (threshold - (slidePos + 1000)) * 2); // 중간 상수
      }
      // 후반에는 상수를 1로 설정하여 100%가 되도록 함
      constant = scrollPos >= threshold ? 1 : constant;
      percent = 100 * (1 - Math.exp(-(scrollPos - slidePos + 1000) / (threshold - slidePos + 1000) * constant)); // 상수를 적용하여 계산
    }
    console.log(percent);
    historyBar.css("--line", percent +'%');
  }
});
*/

