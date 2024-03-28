import { makeElement } from "./make-element.js";
import { services } from "./services.js";

async function renderViewAll() {
  // Get params in link to get the category
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  // Render category title
  const title = document.querySelector(".product__type");
  title.textContent = category;
  // Render each product in the category
  const products = await services.getProducts();
  products.forEach(product => {
    if (product.category === category) {
      const productList = document.getElementById("category__items");
      const productListItem = makeElement.productListItem(product.image, product.name, product.price);
      productList.appendChild(productListItem);
    }
  });
}

renderViewAll();
