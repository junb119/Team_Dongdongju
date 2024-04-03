const slider = $('.slider');

$(document).on('click',activate); 

function activate(e){
  const companies = slider.find('.company');

  e.target.matches('.next') && slider.append(companies.eq(0));
  e.target.matches('.prev') && slider.prepend(companies.eq(companies.length -1));

}