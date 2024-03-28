import { services } from "./services.js";
import { makeElement } from "./make-element.js";

async function getProductInfo() {
  const param = new URLSearchParams(window.location.search);
  const productName = param.get("name");
  const products = await services.getProducts();
  for (let i = 0; i < products.length; i++) {
    if (productName === products[i].name) {
      return [products[i], products];
    }
  }
}

async function renderProduct() {
  const productToRender = (await getProductInfo())[0];
  const productSection = document.querySelector(".product__section");
  productSection.innerHTML = `<div class="product__section__container">
                                <img src="../${productToRender.image}" class="product__img">
                                <div class="product__info__container">
                                  <h1 class="product__name">${productToRender.name}</h2>
                                  <h3 class="product__price">$ ${productToRender.price}</h3>
                                  <p class="product__description">${productToRender.description}</p>
                                </div>
                              </div>`;
}

async function renderSimilarProducts() {
  const similarProductsList = document.getElementById("similar-products__list");
  const [productToRender, products] = await getProductInfo();
  products.forEach(({image, name, price, category}) => {
    if (productToRender.category === category  && productToRender.name !== name) {
      const item = makeElement.productListItem(image, name, price);
      similarProductsList.appendChild(item);
    }
  });
}

renderProduct();
renderSimilarProducts();
