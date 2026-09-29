("use strict");

const param = new URLSearchParams(window.location.search);
const selectedSeason = param.get("season");
// console.log("selectedSeason", selectedSeason);

const productURL = `https://kea-alt-del.dk/t7/api/products?season=${selectedSeason}`;
const listContainer = document.querySelector(".product_list_container");

function getData(url) {
  fetch(url).then((response) => {
    response.json().then((products) => {
      showProducts(products);
    });
  });
}

function showProducts(products) {
  // console.log("First product", products[0]);
  // console.log("Number of products", products.length);

  listContainer.innerHTML = "";

  products.forEach((products) => {
    listContainer.innerHTML += `<article class="product ${products.soldout ? "soldout" : ""}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp" alt="Placeholder" />
          <h3>${products.productdisplayname}</h3>
          <p>${products.brandname} - ${products.category}</p>
          <div>
          ${products.discount ? `<p>${getDiscountPrice(products.price, products.discount)} kr</p>` : ""}
          <p>${products.price} kr ${products.discount ? "<em>-" + products.discount + "%" : ""}</p> 
          </div>
          <p><a href="product.html?id=${products.id}">Read More</a></p>
          ${products.soldout ? "<p class='soldout_tag'>Sold Out</p>" : ""}
        </article>`;
  });
}
getData(productURL);

function getDiscountPrice(originalPrice, discount) {
  return Math.round(originalPrice * (100 - discount)) / 100;
}
// console.log("100 - 25%", getDiscountPrice(24, 17));
