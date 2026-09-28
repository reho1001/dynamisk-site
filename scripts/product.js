const params = new URLSearchParams(window.location.search);
const selectedID = params.get("id");
console.log("selectedID", selectedID);

const detailURL = `https://kea-alt-del.dk/t7/api/products/${selectedID}`;
console.log("detailURL", detailURL);

const productDetails = document.querySelector(".product_container");

function loadData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showDetails(data);
    });
  });
}

function showDetails(detail) {
  console.log("detail", detail);
  productDetails.innerHTML = "";

  detail.forEach((detail) => {
    productDetails.innerHTML += `
<img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Product image">
        <div class="product_information">
            <h2>${detail.productdisplayname}</h2>
            ${detail.discount ? "<p class='discount_tag'>" + getDiscountPrice(detail.price, detail.discount) + " kr</p>" : ""}   
            <p>${detail.price} kr  ${detail.discount ? " <em>-" + detail.discount + "%</em>" : ""}</p>
            <p>${detail.brandname}</p>
            <p>${detail.subcategory}</p>
        </div>
        <div class="order_product">
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p>Nike - Apparel</p>
            <button>Add to basket</button>
        </div>




`;
  });
}

loadData(detailURL);

function getDiscountPrice(origianlPrice, discount) {
  return Math.round((origianlPrice * (100 - discount)) / 100);
}

//  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp`;
//   // document.querySelector(".detail_model").innerHTML = detail.productdisplayname;
