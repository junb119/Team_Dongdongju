const fetchData = () => {
  return fetch("./data/news.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // 읽어온 JSON 데이터를 반환
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

fetchData().then((datas) => {
  console.log(datas); //150개

  let newsList = $(".news_item");
  console.log("newslist", newsList);
  newsList.each(function (idx, item) {
    const link = $(item).find(".link");
    const img = $(item).find(".thumb");
    const date = $(item).find(".date");
    const pub = $(item).find(".text_content .media");
    const nation = $(item).find(".text_content .national");
    const title = $(item).find(".text_content  .article_title");

    const data = datas[idx];
    const titleData = data.title;
    const publishData = data.publish;
    const nationData = data.nation;
    const dateData = data.date;
    const imgData = data.img;
    const linkData = data.link;

    link.attr("href", linkData);
    img.attr("src", imgData);
    date.text(dateData);
    pub.text(publishData);
    nation.text(nationData);
    title.text(titleData);
  });
});
