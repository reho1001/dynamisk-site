("use strict");

const params = new URLSearchParams(window.location.search);
const selectedID = params.get("id");
// console.log("selectedID", selectedID);

const detailURL = `https://kea-alt-del.dk/t7/api/products/${selectedID}`;

// console.log("detailURL", detailURL);

const productDetails = document.querySelector(".product_container");

function loadData(url) {
  fetch(url).then((response) => {
    response.json().then((details) => {
      showDetails(details);
    });
  });
}

function showDetails(details) {
  console.log("details", details);
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${details.id}.webp`;
  document.querySelector(".detail-category").innerHTML = details.category;
  document.querySelector(".detail-product").innerHTML = details.productdisplayname;
  document.querySelector(".detail-brand").innerHTML = details.brandname;
  document.querySelector(".detail-description").innerHTML = details.articletype;
  document.querySelector(".detail-color").innerHTML = details.subcategory;

  document.querySelector(".detail-price").innerHTML = `${details.price} kr ${details.discount ? " <em>-" + details.discount + "%</em>" : ""}`;

  if (details.discount) {
    document.querySelector(".discount-price").innerHTML = `${getDiscountPrice(details.price, details.discount)}`;
  }

  // productDetails.innerHTML = `
  //       <img src="https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp" alt="Product image">
  //       <div class="product_information">
  //           <h2>${detail.productdisplayname}</h2>
  //           ${detail.discount ? "<p class='discount_tag'>" + getDiscountPrice(detail.price, detail.discount) + " kr</p>" : ""}
  //           <p>${detail.price} kr  ${detail.discount ? " <em>-" + detail.discount + "%</em>" : ""}</p>
  //           <p>${detail.brandname}</p>
  //           <p>${detail.subcategory}</p>
  //       </div>
  //       <div class="order_product">
  //         <h3>${detail.productdisplayname}</h3>
  //         <p>${detail.brandname} - ${detail.subcategory}</p>
  //         <button>Add to basket</button>
  //       </div>`;
}

function getDiscountPrice(originalPrice, discount) {
  return Math.round((originalPrice * (100 - discount)) / 100);
}
loadData(detailURL);
