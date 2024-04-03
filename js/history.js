var documentHt = $(document).height();
var slideHt = $('.history_wrap').height();
var ost = $('.history_wrap').offset().top - 900;
var historyBar = $('.history_hidden_line');
var threshold =  ost + slideHt ;
var historySlide = $('.history_txt');
// console.log('오프셋'+ost, '한계'+threshold);


$(window).scroll(function() {

  var sct = $(window).scrollTop(); // 현재 스크롤 위치

  // 스크롤양이 ost 이상이고 threshold 이하일 때
  if (sct >= ost && sct <= threshold) {
      var percent = ((sct - ost) / (threshold - ost)) * 100;
      percent = Math.min(100, Math.max(0, percent)); // percent 값을 0과 100 사이로 제한
     // console.log(percent);
      // percent 값에 따라 애니메이션 적용
      // 예시: percent 값을 어떤 요소의 width에 적용하여 애니메이션 효과를 줌
      historyBar.css("--line", percent +'%');
  }
});