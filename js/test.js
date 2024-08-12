let isHeaderFooterLoaded = false;

function loadHeaderFooter() {
  return new Promise((resolve, reject) => {
    if (isHeaderFooterLoaded) {
      resolve(); // 이미 로드된 경우 즉시 resolve
      return;
    }

    let headerLoaded = false;
    let footerLoaded = false;

    $("#header").load("./header.html", () => {
      headerLoaded = true;
      checkIfLoaded();
    });

    $("#footer").load("./footer.html", () => {
      footerLoaded = true;
      checkIfLoaded();
    });

    function checkIfLoaded() {
      if (headerLoaded && footerLoaded) {
        isHeaderFooterLoaded = true;
        resolve();
      }
    }
  });
}
let header;
function setHeaderFooter(callback) {
  loadHeaderFooter().then(() => {
    header = document.querySelector("#header"); // header가 로드된 후 호출할 함수

    // footer가 로드된 후 호출할 함수
    if (callback) callback(); // 사용자 콜백 호출
  });
}
