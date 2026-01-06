const container = document.querySelector("main");

// create a new section for full product gallery
const section = document.createElement("section");
section.className = "product-gallery"; // <-- new class
container.appendChild(section);

// create each product card directly in the grid
for (let key in products) {
    const p = products[key];

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