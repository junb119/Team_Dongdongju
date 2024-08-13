setHeaderFooter(() => {
  headerBlack();
});

//json 데이터 연결//
let targetUl = $(".container");
let listHtml = "";

fetch("./data/csr_news.json")
  .then((res) => res.json())
  .then((result) => makeList(result));

function makeList(result) {
  let list = $(result);
  list.each(function (idx, item) {
    listHtml += `<div class="article">
    <a href="csr_news_enter.html?id=${idx + 1}">
      <div class="article_date">
        <div class="date"> ${list[idx].date}</div>
        <div class="source">${list[idx].source}</div>
      </div>
      <div class="article_title">${list[idx].title}</div>
      <div class="article_contents">${list[idx].contents}</div>
    </a>
  </div>`;
  });
  targetUl.html(listHtml);

  //말줄임표
  $(document).ready(function () {
    $(".article_contents").each(function () {
      var content = $(this).text();
      if (content.length > 50) {
        $(this).text(content.substring(0, 50) + "...");
      }
    });
  });

  // // //페이지네이션 생성하기
  // $('.pagination').pagination({
  //   dataSource: function(done){
  //   $.ajax({
  //       type: 'GET',
  //       url: './data/csr_news.json',
  //       success: function(response){
  //           done(response);
  //       }
  //   });
  // },
  //   pageSize: 8,
  //   pageRange: null,
  //   showPageNumbers: true,
  //   callback: function(data, pagination) {
  //       // template method of yourself
  //       var html = template(data);
  //       $('.article').html(html);
  //   }
  // })

  const maxPageNum = 5;
  let pageGroupIdx = 0; //현재 페이지 그룹의 번호

  //페이지네이션 생성하기

  const perPage = 8;
  const rows = document.querySelectorAll(".article");
  const rowsCount = rows.length; //40
  const pageCount = Math.ceil(rowsCount / perPage); //5
  const numbers = document.querySelector("#numbers");
  const prevBtn = document.querySelector(".pagination .fa-arrow-left");
  const nextBtn = document.querySelector(".pagination .fa-arrow-right");

  for (let i = 1; i <= pageCount; i++) {
    numbers.innerHTML += `<li><a href="#">${i}</a></li>`;
  }

  let pagenationList = numbers.querySelectorAll("#number li");
  let numberBtn = numbers.querySelectorAll("#number li a");
  let pageGroupCount = Math.ceil(pagenationList.length / maxPageNum);

  numberBtn.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      displayRow(idx);
    });
  });

  function displayRow(idx) {
    const rowsArr = [...rows];
    //모든 tr을 display none
    for (let row of rows) {
      row.style.display = "none";
    }
    let start = idx * perPage;
    let end = start + perPage;
    let newRows = rowsArr.slice(start, end);
    for (let nw of newRows) {
      nw.style.display = "";
    }
    for (let nb of numberBtn) {
      nb.classList.remove("active");
    }
    numberBtn[idx].classList.add("active");
  }
  displayRow(0);

  function displayPage(idx) {
    const pageArr = [...pagenationList];

    //모든 li를 display none
    for (let pl of pagenationList) {
      pl.style.display = "none";
    }
    let start = idx * maxPageNum;
    let end = start + maxPageNum;
    let newRows = pageArr.slice(start, end);
    for (let nw of newRows) {
      nw.style.display = "";
    }
    for (let nb of numberBtn) {
      nb.classList.remove("active");
    }
    numberBtn[idx * maxPageNum].classList.add("active");
    displayRow(idx * maxPageNum);

    if (pageGroupIdx == 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }
    if (pageGroupIdx == pageGroupCount - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }
  displayPage(0);

  nextBtn.addEventListener("click", () => {
    displayPage(++pageGroupIdx);
  });

  prevBtn.addEventListener("click", () => {
    displayPage(--pageGroupIdx);
  });
}
