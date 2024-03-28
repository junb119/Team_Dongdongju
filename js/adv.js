const fetchData = () => {
  return fetch("./data/adv.json")
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
  let videoDatas = datas.video
  let printDatas = datas.print

  $('.list_adv li').each(function (idx) {
    
    let thumb = $(this).find('figure img')
    let desc = $(this).find('figcaption')
    let targetData = videoDatas[idx]
    console.log(thumb)
    console.log(desc)
    thumb.attr('src', targetData.img_path)
    desc.text(targetData.title)
  })

  
  $('.display_adv video').attr('src', videoDatas[0].video_path)


  // 페이지네이션
  

  // --페이지네이션
})