const perPage = 10;
const rows = document.querySelectorAll('.article');
const rowsCount = rows.length; //100
const pageCount = Math.ceil(rowsCount/perPage); //10
const numbers = document.querySelector('#numbers');
const prevBtn = document.querySelector('.pagination .fa-arrow-left');
const nextBtn = document.querySelector('.pagination .fa-arrow-right');


//json 데이터 연결//

const maxPageNum = 5;
let pageGroupIdx = 0; //현재 페이지 그룹의 번호
let targetUl = $('.product');
let listHtml = '';

fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(result => makeList(result));

function makeList(result){
  console.log(result);
  result.products.forEach((item, idx)=>{  
    listHtml+=`<li><a href="product.html?id=${idx +1}">item ${idx +1}</a></li>`;
  });
  targetUl.html(listHtml);
}





//페이지네이션 생성하기
for(let i = 1;i<=pageCount;i++){
  numbers.innerHTML += `<li><a href="#">${i}</a></li>`;
}

let pagenationList = numbers.querySelectorAll('#number li');
let numberBtn = numbers.querySelectorAll('a');
let pageGroupCount = Math.ceil(pagenationList.length/maxPageNum); 


numberBtn.forEach((item,idx)=>{  
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    displayRow(idx);
  })
});

function displayRow(idx){
  const rowsArr = [...rows];
  //모든 tr을 display none
  for(let row of rows){
    row.style.display = 'none';
  }
  let start = idx*perPage;
  let end = start + perPage;
  let newRows = rowsArr.slice(start,end);
  for(let nw of newRows){
    nw.style.display = '';
  }
  for(let nb of numberBtn){
    nb.classList.remove('active');
  }
  numberBtn[idx].classList.add('active');  
}
displayRow(0);

function displayPage(idx){
  const pageArr = [...pagenationList];

  //모든 li를 display none
  for(let pl of pagenationList){
    pl.style.display = 'none';
  }
  let start = idx*maxPageNum;
  let end = start + maxPageNum;
  let newRows = pageArr.slice(start,end);
  for(let nw of newRows){
    nw.style.display = '';
  }
  for(let nb of numberBtn){
    nb.classList.remove('active');
  }
  numberBtn[idx*maxPageNum].classList.add('active');  
  displayRow(idx*maxPageNum);

  if(pageGroupIdx == 0){
    prevBtn.style.display = 'none';
  }else{
    prevBtn.style.display = 'block';
  }
  if(pageGroupIdx == pageGroupCount -1){
    nextBtn.style.display = 'none';
  } else{
    nextBtn.style.display = 'block';
  }

}
displayPage(0);

nextBtn.addEventListener('click',()=>{
  displayPage(++pageGroupIdx);
});

prevBtn.addEventListener('click',()=>{
  displayPage(--pageGroupIdx);
});