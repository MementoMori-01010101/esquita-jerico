async function fetchProducts() {
  const container = document.getElementById("productContainer");
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-content">
              <h3 class="card-title">${product.title}</h3>
              <p class="card-description">${product.description}</p>
              <p class="card-price">$${product.price.toFixed(2)}</p>
            </div>
          `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    container.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
}

fetchProducts();
