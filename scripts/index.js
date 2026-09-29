("use strict");

const category = document.querySelector(".category");
const categoryUrl = "https://kea-alt-del.dk/t7/api/categories";

getData(categoryUrl);

function getData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showData(data);
    });
  });
}

function showData(data) {
  let myInnerHtml = "";
  data.forEach((category) => {
    console.log(category);

    myInnerHtml += `<a href="productlist.html?season=${seasons.season}">
        ${seasons.season}
      </a>`;
  });
  category.innerHTML = myInnerHtml;
}
