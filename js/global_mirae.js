// fullPage.js
function activateFullpage() {
  scrollAble();
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    navigation: true,
    afterLoad: function (origin, destination, direction) {
      let titleBg = destination.item.querySelector(".gm_sub_title img");
      $(titleBg).css({ transform: "scale(1.1)" });
      headerTransparency(0.5);
      // if (destination.index >= 5) {
      //   // Index of the section after which you want normal scroll
      //   fullpage_api.setAutoScrolling(false);
      //   fullpage_api.setAllowScrolling(false);
      // } else {
      //   // fullpage_api.setAutoScrolling(true);
      //   fullpage_api.setAutoScrolling(true);
      //   fullpage_api.setAllowScrolling(true);
      // }
    },
    onLeave: function (origin, destination, direction) {
      if (direction === "down") {
        $("#header").slideUp();
      } else if (direction === "up") {
        $("#header").slideDown();
      }
    },
  });
}

let mainImg = $(".main_m");
let mainTitle = $(".gm_main_title");
let scrollIcon = $(".scroll_icon ");
let section = $(".section ");
let largeM = $(".large_m ");

// $("#header").slideUp(0);

function start() {
  setHeaderFooter();
  scrollDisable();
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
              largeM
                .stop()
                .delay(500)
                .animate(
                  { opacity: 1 },
                  {
                    duration: 600,
                    complete: function () {
                      $("#header").slideDown(500);
                      activateFullpage();
                      $("body").css({ background: "#fff" });
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

const element = document.querySelector(".global_main");
console.log(element);
const bg = window
  .getComputedStyle(element)
  .getPropertyValue("background-color");

$("body").css({ background: bg });

start();
