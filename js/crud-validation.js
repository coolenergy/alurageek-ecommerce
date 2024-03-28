import validateInput from "./form-validation.js";

export const imgURL = document.getElementById("img-url");
const category = document.getElementById("category");
const productName = document.getElementById("product-name");
const price = document.getElementById("price");
const description = document.getElementById("description");

imgURL.addEventListener("blur", validateInput);
category.addEventListener("blur", validateInput);
productName.addEventListener("blur", validateInput);
price.addEventListener("blur", validateInput);
description.addEventListener("blur", validateInput);

// Toggler
const imgMethodToggle = document.getElementById("image-method");
const imgMethods = document.querySelectorAll(".method");

imgMethodToggle.addEventListener("change", () => {
  imgMethods.forEach(imgMethod => imgMethod.toggleAttribute("hidden"));
});