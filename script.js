
const products = [
  // PRODUCTS AND PRICES FROM YOUR SHOP PHOTO
  {
    id: 1, name: "Fan Khari", category: "Khari",
    price: 360, unit: "per kg", step: 0.5, tag: "Shop Special",
    description: "Crispy, flaky classic khari.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2, name: "Twisted Khari", category: "Khari",
    price: 360, unit: "per kg", step: 0.5, tag: "Shop Special",
    description: "Crunchy twisted puff pastry.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3, name: "Cheez Khari", category: "Khari",
    price: 400, unit: "per kg", step: 0.5, tag: "Special",
    description: "A savoury cheese-style khari.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4, name: "Special Khari", category: "Khari",
    price: 400, unit: "per kg", step: 0.5, tag: "Special",
    description: "A classic bakery puff snack.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5, name: "Maska Khari", category: "Khari",
    price: 360, unit: "per kg", step: 0.5, tag: "Popular",
    description: "Buttery, crisp khari biscuits.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6, name: "Maska Toast", category: "Toast",
    price: 340, unit: "per kg", step: 0.5, tag: "Shop Special",
    description: "Crunchy toast for tea time.",
    image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7, name: "Special Kaju Toast", category: "Toast",
    price: 400, unit: "per kg", step: 0.5, tag: "Special",
    description: "Special toast from the shop display.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8, name: "Maska Butter", category: "Biscuits",
    price: 340, unit: "per kg", step: 0.5, tag: "Popular",
    description: "Classic buttery bakery biscuits.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9, name: "Special Butter", category: "Biscuits",
    price: 360, unit: "per kg", step: 0.5, tag: "Shop Special",
    description: "Rich, crunchy butter biscuits.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10, name: "Til Butter", category: "Biscuits",
    price: 340, unit: "per kg", step: 0.5, tag: "Classic",
    description: "Sesame-style butter biscuits.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11, name: "Jeera Butter", category: "Biscuits",
    price: 360, unit: "per kg", step: 0.5, tag: "Popular",
    description: "Cumin-flavoured savoury biscuits.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12, name: "Special Jeera Butter", category: "Biscuits",
    price: 400, unit: "per kg", step: 0.5, tag: "Special",
    description: "Special jeera butter biscuits.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
  },

  // ADDITIONAL PRODUCTS
  // Prices below are sample prices, not confirmed shop prices.
  {
    id: 13, name: "Cream Roll", category: "Cream Rolls",
    price: 30, unit: "per piece", step: 1, tag: "Sweet Treat",
    sample: true,
    description: "Cream-filled, crispy pastry roll.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14, name: "Chocolate Cream Roll", category: "Cream Rolls",
    price: 40, unit: "per piece", step: 1, tag: "Sweet Treat",
    sample: true,
    description: "A chocolate-flavoured cream roll.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15, name: "White Bread", category: "Bread",
    price: 40, unit: "per loaf", step: 1, tag: "Daily Essential",
    sample: true,
    description: "Soft bread for everyday meals.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16, name: "Brown Bread", category: "Bread",
    price: 55, unit: "per loaf", step: 1, tag: "Classic",
    sample: true,
    description: "A hearty loaf for breakfast.",
    image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17, name: "Chocolate Cookies", category: "Biscuits",
    price: 120, unit: "per 250g pack", step: 1, tag: "Sweet Treat",
    sample: true,
    description: "Crunchy cookies with chocolate chips.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18, name: "Plain Cream Cake", category: "Cakes",
    price: 350, unit: "per 500g", step: 1, tag: "Celebration",
    sample: true,
    description: "A simple cake for special occasions.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19, name: "Chocolate Cake", category: "Cakes",
    price: 650, unit: "per 500g", step: 1, tag: "Chocolate",
    sample: true,
    description: "A rich chocolate celebration cake.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20, name: "Veg Puff", category: "Other Snacks",
    price: 25, unit: "per piece", step: 1, tag: "Tea Time",
    sample: true,
    description: "Crispy pastry with vegetable filling.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  }
];

const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");
const resultsCount = document.getElementById("resultsCount");

const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItems");

let activeCategory = "All";
let cart = [];

function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN", {
    maximumFractionDigits: 2
  });
}

function formatQuantity(quantity) {
  return Number(quantity.toFixed(2)).toString();
}

// Display products
function renderProducts() {
  const searchText = searchInput.value.trim().toLowerCase();

  const filtered = products.filter(product => {
    const categoryMatches =
      activeCategory === "All" ||
      product.category === activeCategory;

    const searchMatches =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    return categoryMatches && searchMatches;
  });

  productsContainer.innerHTML = "";
  emptyMessage.hidden = filtered.length > 0;

  resultsCount.textContent =
    `${filtered.length} products found` +
    (filtered.some(product => product.sample)
      ? " • Some prices are sample prices"
      : "");

  filtered.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.animationDelay = `${Math.min(index, 8) * 35}ms`;

    const tag = product.sample ? "Sample Price" : product.tag;

    card.innerHTML = `
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400/fff0d8/482719?text=RAJDHANI+BAKERY'"
        >
        <span class="product-tag">${tag}</span>
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>

        <div class="product-bottom">
          <div>
            <div class="price">${formatPrice(product.price)}</div>
            <small class="unit-label">${product.unit}</small>
          </div>

          <button class="add-btn" data-add="${product.id}">
            🛒 Add
          </button>
        </div>
      </div>
    `;

    productsContainer.appendChild(card);
  });
}

// Category filtering
function setCategory(category) {
  activeCategory = category;

  document.querySelectorAll(".filter-btn").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === category
    );
  });

  renderProducts();
}

// Cart operations
function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity = Number(
      (existing.quantity + product.step).toFixed(2)
    );
  } else {
    cart.push({
      ...product,
      quantity: product.step
    });
  }

  renderCart();
  showToast(`${product.name} added to cart!`);
}

function changeQuantity(id, direction) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.quantity = Number(
    (item.quantity + item.step * direction).toFixed(2)
  );

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(product => product.id !== id);
  renderCart();
}

function getCartTotal() {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function getTotalQuantity() {
  return cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

// Update cart UI
function renderCart() {
  const totalCount = getTotalQuantity();

  document.getElementById("cartCount").textContent =
    formatQuantity(totalCount);

  document.getElementById("cartItemsCount").textContent =
    formatQuantity(totalCount);

  document.getElementById("cartTotal").textContent =
    formatPrice(getCartTotal());

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <h3>Your cart is empty!</h3>
        <p>Explore our bakery products and add your favourites.</p>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = "";

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
      <img
        src="${item.image}"
        alt="${item.name}"
        onerror="this.style.display='none'"
      >

      <div>
        <h4>${item.name}</h4>
        <p class="item-price">
          ${formatPrice(item.price * item.quantity)}
        </p>
        <small class="unit-label">${item.unit}</small>

        <div class="quantity-controls">
          <button data-minus="${item.id}" aria-label="Decrease quantity">−</button>
          <span>${formatQuantity(item.quantity)}</span>
          <button data-plus="${item.id}" aria-label="Increase quantity">+</button>
          <button class="remove-item" data-remove="${item.id}" aria-label="Remove item">🗑</button>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(row);
  });
}

// Cart drawer
function openCart() {
  cartPanel.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Product buttons
productsContainer.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

// Cart quantity buttons
cartItemsContainer.addEventListener("click", event => {
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");

  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);
  });
});

// Category cards
document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);

    document.getElementById("products").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Search
searchInput.addEventListener("input", renderProducts);

// Clear cart
document.getElementById("clearCart").addEventListener("click", () => {
  cart = [];
  renderCart();
  showToast("Cart cleared!");
});

// Toast notification
let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// WhatsApp order
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Please add a product first!");
    return;
  }

  // Enter your real shop WhatsApp number below.
  // Example format: 919876543210
  const whatsappNumber = "";

  if (!/^\d{10,15}$/.test(whatsappNumber)) {
    showToast("Please configure the shop WhatsApp number in script.js.");
    return;
  }

  const lines = cart.map(item => {
    const quantityLabel = item.unit === "per kg"
      ? `${formatQuantity(item.quantity)} kg`
      : `${formatQuantity(item.quantity)} unit(s)`;

    return `${item.name} - ${quantityLabel} - ${formatPrice(item.price * item.quantity)}`;
  });

  const message = [
    "Hello RAJDHANI BAKERY!",
    "I would like to enquire about this order:",
    "",
    ...lines,
    "",
    `Estimated total: ${formatPrice(getCartTotal())}`,
    "",
    "Please confirm product availability and final prices."
  ].join("\n");

  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Start website
renderProducts();
renderCart();
