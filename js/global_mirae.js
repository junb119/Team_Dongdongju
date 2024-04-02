function activateFullpage() {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    navigation: true,
    afterLoad: function (origin, destination) {
			let titleBg =destination.item.querySelector('.gm_sub_title img')
			console.log(titleBg)
			$(titleBg).css({transform: 'scale(1.1)'})
			$('#header').css({opacity:0})
		},
  });
}
activateFullpage();

let mainImg = $(".main_m");
let mainTitle = $(".gm_main_title");
let scrollIcon = $(".scroll_icon ");
let section = $(".section ");
let largeM = $(".large_m ");
mainImg.stop().animate(
  { opacity: 0 },
  {
    duration: 1000,
    complete: function () {
      mainImg.stop().animate(
        { opacity: 1 },
        {
          duration: 1000,
          complete: function () {
            mainImg.stop().animate({ left: "30%" }, 500);
            mainTitle.stop().animate({ opacity: 1 }, 500);
            scrollIcon.stop().animate({ opacity: 1 }, 500);
            largeM.stop().delay(500).animate({ opacity: 1 },600);
            $("#header").slideDown(2000);
          },
        }
      );
    },
  }
);

// section.each(function(){
// 	if($(window).offset().top === $(this).offset().top){
// 		console.log('test')

// 	}
// })
