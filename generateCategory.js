//  Get category from URL
const params = new URLSearchParams(window.location.search);
const categoryFilter = params.get("category")?.toLowerCase();  

//  Select <main> container
const container = document.querySelector(".category-main");

//  category heading
const title = document.createElement("h1");
title.textContent = categoryFilter ? categoryFilter.toUpperCase() : "ALL PRODUCTS";
title.style.textAlign = "center";
title.style.margin = "20px 0";
container.appendChild(title);

//  Create section for filtered gallery
const section = document.createElement("section");
section.className = "product-gallery";
container.appendChild(section);

//  Loop through products and only display those in the selected category
for (let key in products) {
    const p = products[key];

    if (categoryFilter && p.category !== categoryFilter) continue;

    const a = document.createElement("a");
    a.href = `product.html?id=${key}`;
    a.className = "A-Child";

    a.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="info-overlay">
            <h1>${p.name}</h1>
            <p>Price: ${p.price}</p>
        </div>
    `;

    section.appendChild(a);
}