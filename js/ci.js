// function activateFullpage() {
// 	$('#fullpage').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		navigation: true,
// 	});
// }
// activateFullpage()
let prTitle = $('.pr_title_bg img')
let ciContainer = $('.ci_container')
let colorTitle = $('.color_title > div')
let colors = $('.color')
let colorCircle = $('.color_circle')
setTimeout(() => {
  prTitle.addClass('active')
}, 500);

colorTitle.click(function() {
  let $this = $(this)
  colorTitle.removeClass('active')
  $this.addClass('active')

  if ($this.hasClass('ci_blue')) {
    colors.removeClass('orange')
    colors.addClass('blue')
    colorCircle.remove('orangeBG')
    colorCircle.addClass('blueBG')

    $('html, body , .ci_container').stop().animate({backgroundColor :'#00427a'},{
      duration:250,
      complete : function (){
        $('html, body , .ci_container').stop().animate({backgroundColor :'white'},250)
      }
    })
    
    
    let circleText = `<span>Mirae Asset blue</span>
    <ul class="color_code">
      <li><span>ㆍPANTONE : </span><span>158C</span></li>
      <li><span>ㆍCMYK : </span><span>0 / 60 / 100 / 0</span></li>
      <li><span>ㆍRGB : </span><span>245 / 130 / 32</span></li>
      <li><span>ㆍHEX : </span><span>F58220</span></li>
    </ul>
    <ul class="tag blue">
      <li># 인재 중시</li>
      <li># 사회적 책임을 실천</li>
      <li># 생동감</li>
      <li># 활력</li>
    </ul>`
    setTimeout(() => {
      colorCircle.html(circleText)
      
    }, 450);
  } else {
    colors.removeClass('blue')
    colors.addClass('orange')
    colorCircle.removeClass('blueBG')
    colorCircle.addClass('orangeBG')
    $('html, body , .ci_container').stop().animate({backgroundColor :'#f5821f'},{
      duration:250,
      complete : function (){
        $('html, body , .ci_container').stop().animate({backgroundColor :'white'},250)
      }
    })

    let circleText = `<span>Mirae Asset Orange</span>
    <ul class="color_code">
      <li><span>ㆍPANTONE : </span><span>158C</span></li>
      <li><span>ㆍCMYK : </span><span>0 / 60 / 100 / 0</span></li>
      <li><span>ㆍRGB : </span><span>245 / 130 / 32</span></li>
      <li><span>ㆍHEX : </span><span>F58220</span></li>
    </ul>
    <ul class="tag orange">
      <li># 인재 중시</li>
      <li># 사회적 책임을 실천</li>
      <li># 생동감</li>
      <li># 활력</li>
    </ul>`
    setTimeout(() => {
      colorCircle.html(circleText)
      
    }, 450);
  }
  $('.ci_title').stop().animate({opacity : 0},{
    duration:250,
    complete : function (){
      $('.ci_title').stop().animate({opacity :1},250)
    }
  })

})

