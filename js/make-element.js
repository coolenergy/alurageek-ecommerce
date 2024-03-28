function productHeader(category) {
  const header = document.createElement("div");
  header.classList.add("product__header");
  header.innerHTML = `<h2 class="product__type">${category}</h2>
  <a href="#" class="view-all">View all <i class="fa-solid fa-arrow-right-long"></i></a>`;
  if (category === "Consoles") header.querySelector(".product__type").id = "consoles";

  // Add event listener to view all button
  const viewAllBtn = header.querySelector(".view-all");
  viewAllBtn.addEventListener("click", goToViewAllPage);

  return header;
}

function productListItem(image, name, price) {
  if (typeof onIndex === "undefined") {
    image = "../" + image;
  }
  const item = document.createElement("li");
  item.classList.add("product__list__element");
  item.innerHTML = `<img src="${image}" alt="Product image" class="product__list__element--image">
                    <p class="product__name">${name}</p>
                    <p class="product__price">$ ${price}</p>
                    <div>
                      <a href="#" class="product__view-product">View product</a>
                    </div>`

  // Add event listener to view product button
  const viewProductBtn = item.querySelector(".product__view-product");
  viewProductBtn.addEventListener("click", goToViewProductPage);
  
  return item;
}

export const makeElement = {
  productHeader,
  productListItem
}

// Event listener functions
function goToViewAllPage(e) {
  const header = e.target.parentNode;
  const category = header.querySelector(".product__type").textContent;
  if (typeof onIndex === "undefined") {
    window.location.href = `view-all.html?category=${category}`;
    return;
  }
  window.location.href = `pages/view-all.html?category=${category}`;
}

function goToViewProductPage(e) {
  const item = e.target.parentNode.parentNode;
  const productName = item.querySelector(".product__name").textContent;
  if (typeof onIndex === "undefined") {
    window.location.href = `view-product.html?name=${productName}`;
    return;
  }
  window.location.href = `pages/view-product.html?name=${productName}`;
}
