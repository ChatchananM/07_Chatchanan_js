//Start here
let upLoads = [];
let idCounter = 0;
let productPriceNum;

document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    console.log(productName);
    const productPrice = document.getElementById("productPrice").value;
    console.log(productPrice);
    const productImage = document.getElementById("productImage").value;
    console.log(productImage);
    const errorMessage = document.getElementById("errorMessage");

    //Validation
    if (productName.length < 5 || productName.length > 30) {
      errorMessage.textContent =
        "Product Name must be at least 5 characters, and not over 30 characters.";
      return;
    }

    productPriceNum = Number(productPrice);
    console.log(productPrice);
    console.log(typeof productPrice);
    console.log(productPriceNum);
    console.log(typeof productPriceNum);

    if (isNaN(productPriceNum)) {
      console.log("Price is not a Number");
      errorMessage.textContent = "Price must be a Number.";
      return;
    } else {
      console.log("Price is a valid Number");
    }

    if (!isImgUrl(productImage)) {
      errorMessage.textContent =
        "Image URL must be file type; Jpg, Jpeg, Png, Gif.";
      return;
    }

    //Create new upload object
    const newUpload = {
      id: idCounter++,
      name: productName,
      price: productPriceNum,
      imageURL: productImage,
    };

    upLoads.push(newUpload);
    // displayUpload(newUpload);
    errorMessage.textContent = "";
    document.getElementById("productForm").reset();
  });

// Validating image URLs using RegEx
function isImgUrl(productImage) {
  const input = new URL(productImage);
  return /\.(jpg|jpeg|png|gif)$/.test(input.pathname);
}
