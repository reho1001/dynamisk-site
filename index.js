// "use strict";
// const categories = document.querySelector(".categories");
// const productUrl = "https://kea-alt-del.dk/t7/api/categories";

// getData();

// function getData() {
//   fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
// }

// function showData(data) {
//   categories.innerHTML = "";
//   let myInnerHtml = "";
//   data.forEach((categories) => {
//     console.log(categories);

//     myInnerHtml += `<a href="productlist.html">${categories.category}</a>`;
//     categories.innerHTML = myInnerHtml;
//   });
//   categories.innerHTML = myInnerHtml;
// }
// `<a href="productlist.html?category=${category.category}">
//   ${category.category}
// </a>`;

// console.log("JS ER LOADET");

("use strict");

const category = document.querySelector(".category");
const categoryUrl = "https://kea-alt-del.dk/t7/api/categories";

getData();

function getData() {
  fetch(categoryUrl)
    .then((response) => response.json())
    .then((data) => showData(data));
}

function showData(data) {
  let myInnerHtml = "";

  data.forEach((category) => {
    console.log(category);

    myInnerHtml += `
      <a href="productlist.html?category=${category.category}">
        ${category.category}
      </a>
    `;
  });

  category.innerHTML = myInnerHtml;
}
