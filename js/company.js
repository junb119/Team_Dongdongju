const slider = $('.slider');

$(document).on('click',activate); 

function activate(e){
  const companys = slider.find('.company');


  e.target.matches('.next') && slider.append(companys.eq(0));
  e.target.matches('.next') && slider.append(companys.eq(companys.length -1));
}
