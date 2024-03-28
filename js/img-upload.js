import { imgURL } from "./crud-validation.js";

const imgInput = document.getElementById("img-file");

imgInput.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const imgDisplay = document.querySelector(".image-display");
    imgDisplay.style.backgroundImage = `url(${reader.result})`;
    imgDisplay.style.display = "block";
  });
  reader.readAsDataURL(imgInput.files[0]);
});
