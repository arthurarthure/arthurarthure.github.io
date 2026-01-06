// Get the product ID from the URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Get product data
const product = products[id];

// Handle invalid ID
if (!product) {
  document.body.innerHTML = "<h1 style='text-align:center;margin-top:50px;'>Product not found</h1>";
  throw new Error("Invalid product ID");
}

// Fill product info
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = product.price;
document.getElementById("product-image").src = product.image;
document.getElementById("product-image").alt = product.name;

// Fill sizes
const sizeContainer = document.getElementById("product-sizes");

product.sizes.forEach(size => {
  const btn = document.createElement("button");
  btn.textContent = size;

  // Add active class toggle
  btn.addEventListener("click", () => {
    document.querySelectorAll(".size-grid button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });

  sizeContainer.appendChild(btn);
});

const addToCartBtn = document.querySelector(".add-to-cart");

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    alert("Sorry, the web-developer was too lazy to add that function 😅");
  });
}