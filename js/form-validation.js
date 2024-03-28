// Validate contact us form
const inputName = document.getElementById("name");
const inputMessage = document.getElementById("message");

const validityErrors = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "stepMismatch"
];
const errorMessages = {
  name: {
    valueMissing: "Please fill out your name or company name"
  },
  message: {
    valueMissing: "Please fill out your message in this field"
  },
  email: {
    valueMissing: "Please fill out your email in this field",
    typeMismatch: "Invalid email",
    patternMismatch: "Invalid email"
  },
  password: {
    valueMissing: "Please fill out your password in this field"
  },
  "img-url": {
    valueMissing: "Please fill out the image URL of the product",
    typeMismatch: "This is not a valid URL"
  },
  category: {
    valueMissing: "Please fill out the category"
  },
  "product-name": {
    valueMissing: "Please fill out the product name"
  },
  price: {
    valueMissing: "Please indicate the product's base price",
    typeMismatch: "This is not a valid price, make sure to use numbers only",
    stepMismatch: "Only up to 2 decimal places are allowed"
  },
  description: {
    valueMissing: "Please add a description to the product"
  }
}

export default function validateInput(e) {
  const dataType = this.id; // Get data type from the id name of the element
  const errorMessage = e.composedPath()[2].querySelector(".form__error-message");
  const inputContainer = e.composedPath()[1];
  // Check for validity of the input with each of the validity errors
  for (let i = 0; i < validityErrors.length; i++) {
    if (this.validity[validityErrors[i]]) {
      errorMessage.textContent = errorMessages[dataType][validityErrors[i]];
      inputContainer.style.borderColor = "red";
      return;
    }
  }
  errorMessage.textContent = '';
  inputContainer.style.borderColor = "transparent";
}

inputName.addEventListener("blur", validateInput);
inputMessage.addEventListener("blur", validateInput);
