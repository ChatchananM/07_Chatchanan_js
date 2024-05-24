//Let's start!!!
let productPriceNum;

document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productImage = document.getElementById("productImage").value;

     //Validation
    if (productName.length < 5 || productName.length > 30) {
        alert("Product Name must be at least 5 characters, and not over 30 characters.");
        return;
    }

    productPriceNum = Number(productPrice);

    if (isNaN(productPriceNum)) {
        alert("Price must be a Number.");
        return;
    } 

    if (!isImgUrl(productImage)) {
        alert("Image URL must be file type; Jpg, Jpeg, Png, Gif.");
        return;
    }

    //Create new Product object
    const newProduct = {
      name: productName,
      price: productPriceNum,
      image: productImage,
    };
    console.log(newProduct);
    console.log(products);

    addProductToDashboard(newProduct);
    
    document.getElementById("productForm").reset(); //Reset product form
  });

  let products =[];

  function addProductToDashboard(newProduct) {
    products.push(newProduct);
    displayProductDashboard();
}


//Display Product on Product Dashboard
function displayProductDashboard() {
    const productDashboard = document.getElementById("productDashboard");
    products.forEach((newProduct, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "bg-grey-100 rounded flex justify-between";
        
        productDiv.innerHTML =`
        <input type="checkbox" class="mr-6">
        <img src="${newProduct.image} alt="${newProduct.name}" class="w-12 h-12 object-cover rounded">
        <span class="text-base font-semibold text-gray-800">${newProduct.name}</span>
        <span class="text-base font-semibold text-gray-800">THB ${newProduct.price}</span>
        `;
        
        console.log(newProduct.name);
        console.log(newProduct.price);

        productDashboard.appendChild(productDiv);
    });
}

// Validating image URLs using RegEx
function isImgUrl(productImage) {
  const input = new URL(productImage);
  return /\.(jpg|jpeg|png|gif)$/.test(input.pathname);
}
