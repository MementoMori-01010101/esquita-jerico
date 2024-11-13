const cart = {};

function addToCart(id, name, price) {
  if (!cart[id]) {
    cart[id] = { name, price, quantity: 1 };
  } else {
    cart[id].quantity += 1;
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let totalPrice = 0;

  Object.keys(cart).forEach((id) => {
    const item = cart[id];
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <span>${item.name} - $${item.price} x ${item.quantity}</span>
      <div>
        <button onclick="decreaseQuantity(${id})">-</button>
        <button onclick="increaseQuantity(${id})">+</button>
        <button onclick="removeFromCart(${id})">Remove</button>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });

  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}

const checkoutBtn = document.getElementById("checkoutBtn");
checkoutBtn.disabled = totalPrice === 0;

function increaseQuantity(id) {
  cart[id].quantity += 1;
  updateCart();
}

function decreaseQuantity(id) {
  if (cart[id].quantity > 1) {
    cart[id].quantity -= 1;
  } else {
    delete cart[id];
  }
  updateCart();
}

function removeFromCart(id) {
  delete cart[id];
  updateCart();
}

function checkout() {
  const totalPrice = document.getElementById("totalPrice").textContent;
  if (parseFloat(totalPrice) > 0) {
    alert(`Checkout successful! Total: $${totalPrice}`);
    Object.keys(cart).forEach((id) => delete cart[id]);
    updateCart();
  } else {
    alert("Your cart is empty!");
  }
}
