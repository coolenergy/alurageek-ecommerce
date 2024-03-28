import { services } from "./services.js";
import { makeElement } from "./make-element.js";

async function renderProducts() {
  const products = await services.getProducts();
  const productsByCategory = {};
  const categories = [];
  // Classify products by category
  products.forEach(product => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
      categories.push(product.category);
    }
    productsByCategory[product.category].push(product);
  });

  const productsSection = document.querySelector(".products");
  productsSection.innerHTML = '';
  categories.forEach(category => {
    // For each category render a header
    productsSection.appendChild(makeElement.productHeader(category));
    // Create product list
    const productList = document.createElement("ul");
    productList.classList.add("product__list");
    productsSection.appendChild(productList);
    // Iterate over each product and add it 
    // to the list of the current category
    productsByCategory[category].forEach(product => {
      productList.appendChild(makeElement.productListItem(product.image, product.name, product.price));
    });
  });
}

renderProducts();
