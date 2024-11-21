// script.js

// Sample product data
const products = [
  {
      id: 1,
      name: "Smartphone",
      price: "$699",
      description: "A sleek and powerful smartphone with cutting-edge features.",
      image: "https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg"
  },
  {
      id: 2,
      name: "Laptop",
      price: "$999",
      description: "A lightweight laptop perfect for work and play.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9zTsUw9GLhneuaoFGKsx3WAzZc9qE1SK_w&s"
  },
  {
      id: 3,
      name: "Headphones",
      price: "$199",
      description: "Noise-cancelling headphones for immersive audio experience.",
      image: "https://t3.ftcdn.net/jpg/00/91/07/82/360_F_91078252_i7cx2uJzDzgoJGDdUAHtVAcpjugVauX9.jpg"
  },
  {
      id: 4,
      name: "Smartwatch",
      price: "$299",
      description: "A smartwatch to keep you connected on the go.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ntxFk2eobTlMK_g1Ly40XzxehddCKvpinA&s"
  },
  {
      id: 5,
      name: "Camera",
      price: "$499",
      description: "Capture life's moments in stunning detail.",
      image: "https://cdn.mos.cms.futurecdn.net/S2sZwt73Ff8qeiuJK5PsYe-320-80.png"
  }
];

// Function to render products
function renderProducts() {
  const productContainer = document.getElementById("product-container");

  products.forEach(product => {
      // Create a product card
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      // Add product image
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;

      // Add product name
      const productName = document.createElement("h3");
      productName.textContent = product.name;

      // Add product description
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;

      // Add product price
      const productPrice = document.createElement("p");
      productPrice.textContent = `Price: ${product.price}`;
      productPrice.style.fontWeight = "bold";

      // Append elements to the product card
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      productCard.appendChild(productDescription);
      productCard.appendChild(productPrice);

      // Append product card to the container
      productContainer.appendChild(productCard);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", renderProducts);
