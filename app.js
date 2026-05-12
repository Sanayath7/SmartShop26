// app.js
let products = [];
let cart = [];
let currentBalance =
  Number(localStorage.getItem('balance')) || 50000;let currentSlide = 0;
let couponDiscount = 0;

// banner er PICS
const banners = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1400',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400',
];

//  Reviews
const dummyReviews = [
  {
    name: 'Rahim Khan',
    comment: 'Amazing quality and super fast delivery! Highly recommended.',
    rating: 5,
  },
  {
    name: 'Nadia Islam',
    comment: 'The product exceeded my expectations. Will buy again!',
    rating: 5,
  },
  {
    name: 'Tanvir Ahmed',
    comment:
      'Great customer service. They helped me with my issue immediately.',
    rating: 4,
  },
  {
    name: 'Shabnam Akter',
    comment: 'Love the variety and competitive prices. My go-to shopping site.',
    rating: 5,
  },
  {
    name: 'Fahim Chowdhury',
    comment: 'Very reliable store. Ordered multiple times, never disappointed.',
    rating: 5,
  },
  {
    name: 'Meherun Nisa',
    comment: 'Beautiful packaging and original products. Thank you SmartShop!',
    rating: 4,
  },
];



// Team Members
const teamMembers = [
  {
    name: 'Sudipta Raj Bhdhon',
    role: 'Web Developer ',
    img: 'https://c4.wallpaperflare.com/wallpaper/673/950/395/anime-one-piece-zoro-roronoa-wallpaper-preview.jpg',
  },

  {
    name: 'Sanayath Fahim',
    role: 'UI Designer | Frontend Developer ',
    img: 'https://c4.wallpaperflare.com/wallpaper/829/597/184/anime-one-piece-monkey-d-luffy-wallpaper-preview.jpg',
  },

  {
    name: 'Anoawarul Islam Sagor',
    role: 'Web Developer',
    img: 'https://c4.wallpaperflare.com/wallpaper/100/30/528/anime-naruto-itachi-uchiha-wallpaper-preview.jpg',
  },
];

// Load Products
async function loadProducts() {
  products = [
    {
      id: 1,
      title: 'Logitech G304 Wireless Mouse',
      price: 2890,
      category: 'Mouse',
      image:
        'https://vibegaming.com.bd/wp-content/uploads/2021/09/ezgif-6-642a1f962851.jpg',
      rating: { rate: 4.8 },
    },

    {
      id: 2,
      title: 'Razer BlackWidow Keyboard',
      price: 5990,
      category: 'Keyboard',
      image:
        'https://assets3.razerzone.com/AUWIVDU7eDOhKDVaq96BrtYZLKA=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh74%2Fh37%2F9477488148510%2F230216-bw-v4-pro-1500x1000-1.jpg',
      rating: { rate: 4.7 },
    },

    {
      id: 3,
      title: '7HZ x Crinacle Zero 2 ',
      price: 2450,
      category: 'IEM',
      image:
        'https://gadgetnmusic.com/wp-content/uploads/2023/12/7HZ-x-Crinacle-Zero-2-Earphone-1.jpg',
      rating: { rate: 4.6 },
    },

    {
      id: 4,
      title: 'Sony WH-CH520 Headphone',
      price: 4490,
      category: 'Headphone',
      image:
        'https://www.sonysmart.com.bd/public/uploads/all/0uUrIYSsD05ke7bM29EvmikGYaQ3KFDSOJiB3V9C.jpg',
      rating: { rate: 4.5 },
    },

    {
      id: 5,
      title: 'RTX 4060 Graphics Card',
      price: 42900,
      category: 'PC Parts',
      image:
        'https://asset.msi.com/resize/image/global/product/product_16830017853a4e1c4c4d6f8f14ecfc2d0e9a65e6f.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
      rating: { rate: 4.9 },
    },

    {
      id: 6,
      title: 'Gaming Cap Black Edition',
      price: 690,
      category: 'Fashion',
      image:
        'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200',
      rating: { rate: 4.3 },
    },

    {
      id: 7,
      title: 'Ajazz AK650 Tri-mode Mechanical Keyboard',
      price: 6200,
      category: 'Keyboard',
      image:
        'https://vibegaming.com.bd/wp-content/uploads/2024/11/14_4e19ce0c-ac5b-4b38-9990-545b03b147f5.jpg',
      rating: { rate: 4.4 },
    },

    {
      id: 8,
      title: 'SteelSeries Gaming Mouse',
      price: 2100,
      category: 'Mouse',
      image:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200',
      rating: { rate: 4.5 },
    },
    {
  id: 9,
  title: 'Mens Premium Hoodie',
  price: 1650,
  category: 'Mens Fashion',
  image:
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200',
  rating: { rate: 4.6 },
},

{
  id: 10,
  title: 'Mens Casual Shirt',
  price: 1200,
  category: 'Mens Fashion',
  image:
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200',
  rating: { rate: 4.5 },
},

{
  id: 11,
  title: 'Women Stylish Handbag',
  price: 1850,
  category: 'Women Fashion',
  image:
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200',
  rating: { rate: 4.7 },
},

{
  id: 12,
  title: 'Women Korean Hoodie',
  price: 2100,
  category: 'Women Fashion',
  image:
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200',
  rating: { rate: 4.8 },
},

{
  id: 13,
  title: 'Luxury Analog Watch',
  price: 2750,
  category: 'Accessories',
  image:
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200',
  rating: { rate: 4.9 },
},

{
  id: 14,
  title: 'Silver Chain Necklace',
  price: 950,
  category: 'Accessories',
  image:
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200',
  rating: { rate: 4.4 },
},

{
  id: 15,
  title: 'Women Fashion Sunglasses',
  price: 780,
  category: 'Accessories',
  image:
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200',
  rating: { rate: 4.5 },
},

{
  id: 16,
  title: 'Nike Air Running Shoes',
  price: 4200,
  category: 'Fashion',
  image:
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
  rating: { rate: 4.9 },
},
  ];

  renderProducts(products);
  renderCategoryFilters();
}

//Render Products

function renderProducts(filteredProducts) {
  const container = document.getElementById('products-grid');

  container.innerHTML = filteredProducts
    .map(
      p => `
    <div class="product-card bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl">

      <img src="${p.image}"
        class="w-full h-52 object-contain p-4 bg-gray-100"
        alt="${p.title}">

      <div class="p-5">

        <h3 class="font-semibold text-sm min-h-[45px]">
          ${p.title}
        </h3>

        <div class="flex justify-between items-center mt-4">

          <span class="text-xl font-bold text-blue-600">
            ৳${p.price}
          </span>

          <span class="text-yellow-500 font-semibold">
            ★ ${p.rating.rate}
          </span>

        </div>

        <button
          onclick="addToCart(${p.id})"
          class="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl">
          Add to Cart
        </button>

      </div>
    </div>
  `,
    )
    .join('');
}

function renderCategoryFilters() {
  const categories = [...new Set(products.map(p => p.category))];

  let html = `
    <button
      onclick="filterByCategory('all')"
      class="category-btn active px-5 py-2 bg-blue-600 text-white rounded-xl">
      All
    </button>
  `;

  categories.forEach(cat => {
    html += `
      <button
        onclick="filterByCategory('${cat}')"
        class="category-btn px-5 py-2 bg-white border rounded-xl hover:bg-gray-100">
        ${cat}
      </button>
    `;
  });

  document.getElementById('category-filters').innerHTML = html;
}


// Fixed filter function
function filterByCategory(cat) {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-blue-600', 'text-white');
  });

  const buttons = document.querySelectorAll('.category-btn');
  for (let btn of buttons) {
    if (
      (cat === 'all' && btn.textContent === 'All') ||
      btn.textContent.toLowerCase() === cat.toLowerCase()
    ) {
      btn.classList.add('active', 'bg-blue-600', 'text-white');
      break;
    }
  }

  if (cat === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === cat);
    renderProducts(filtered);
  }
}

function filterProducts() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(query));
  renderProducts(filtered);
}

// Cart Functions


function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product) return;

  let currentTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (currentTotal + product.price > currentBalance) {
    alert('Not enough balance! Please add money.');
    return;
  }

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const count = cart.reduce((a, b) => a + b.quantity, 0);

  document.getElementById('cart-count').textContent = count;
}


// Render cart


function renderCart() {
  const container = document.getElementById('cart-items');

  let subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  let deliveryCharge = 0;

  if (subtotal < 500) {
    deliveryCharge = 130;
  } else if (subtotal < 700) {
    deliveryCharge = 110;
  } else if (subtotal < 1000) {
    deliveryCharge = 100;
  } else if (subtotal < 3000) {
    deliveryCharge = 80;
  } else {
    deliveryCharge = 0;
  }

  let discount = (subtotal * couponDiscount) / 100;

  let total = subtotal + deliveryCharge - discount;

  if (cart.length === 0) {
  container.innerHTML = `
    <div class="text-center text-gray-500 mt-10">
      Your cart is empty
    </div>
  `;

  document.getElementById('subtotal').textContent = '৳0';
  document.getElementById('final-total').textContent = '৳0';
  document.getElementById('delivery-charge').textContent = '0 ৳';

  return;
}

  container.innerHTML = cart
    .map(
      item => `
    <div class="flex gap-4 border-b pb-6">

      <img src="${item.image}"
        class="w-20 h-20 object-contain bg-gray-100 rounded-2xl">

      <div class="flex-1">

        <h4 class="font-medium text-sm">
          ${item.title}
        </h4>

        <p class="text-blue-600">
          ৳${item.price}
        </p>

        <div class="flex items-center gap-4 mt-2">

          <button onclick="changeQty(${item.id}, -1)"
            class="px-3 py-1 border rounded">
            -
          </button>

          <span>${item.quantity}</span>

          <button onclick="changeQty(${item.id}, 1)"
            class="px-3 py-1 border rounded">
            +
          </button>

          <button onclick="removeFromCart(${item.id})"
            class="ml-auto text-red-500 text-sm">
            Remove
          </button>

        </div>
      </div>
    </div>
  `,
    )
    .join('');

  document.getElementById(
    'subtotal',
  ).textContent = `৳${subtotal.toFixed(2)}`;

  document.getElementById(
    'final-total',
  ).textContent = `৳${total.toFixed(2)}`;

  document.getElementById(
    'delivery-charge',
  ).textContent = `${deliveryCharge} ৳`;
}

function changeQty(id, change) {
  const item = cart.find(i => i.id === id);

  if (item) {
    item.quantity += change;

    if (item.quantity < 1) {
      item.quantity = 1;
    }

    renderCart();
    updateCartCount();
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);

  renderCart();

  updateCartCount();
}

function clearCart() {
  cart = [];

  renderCart();

  updateCartCount();
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');

  sidebar.classList.toggle('translate-x-full');

  if (!sidebar.classList.contains('translate-x-full')) {
    renderCart();
  }
}

function applyCoupon() {
  const code = document
    .getElementById('coupon-input')
    .value.trim();

  if (code.toUpperCase() === 'SMART10') {
    couponDiscount = 10;

    alert('10% Discount Applied');

    renderCart();
  } else {
    alert('Invalid Coupon');
  }
}


//CHECKOUT


function checkout() {
  const total = parseFloat(
    document.getElementById('final-total').textContent.replace('৳', ''),
  );

  if (total > currentBalance) {
    alert('Insufficient Balance!');
  } else {
    alert('Order Placed Successfully!');

    currentBalance -= total;

    document.getElementById('balance-display').textContent =
      currentBalance;
      localStorage.setItem('balance', currentBalance);

    cart = [];

    updateCartCount();

    renderCart();

    toggleCart();
  }
}


function addMoney() {
  currentBalance += 1000;

  document.getElementById(
    'balance-display',
  ).textContent = currentBalance;
  localStorage.setItem('balance', currentBalance);
}

// Banner Functions
function renderBanner() {
  const slides = document.getElementById('slides');
  slides.innerHTML = banners
    .map(
      src =>
        `<img src="${src}" class="w-full h-full object-cover flex-shrink-0">`,
    )
    .join('');

  const dots = document.getElementById('banner-dots');
  dots.innerHTML = banners
    .map(
      (_, i) => `
    <button onclick="goToSlide(${i})" class="w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'} transition-all"></button>
  `,
    )
    .join('');
}

function goToSlide(n) {
  currentSlide = n;
  document.getElementById('slides').style.transform =
    `translateX(-${n * 100}%)`;
  document.querySelectorAll('#banner-dots button').forEach((dot, i) => {
    dot.classList.toggle('bg-white', i === n);
    dot.classList.toggle('bg-white/50', i !== n);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % banners.length;
  goToSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + banners.length) % banners.length;
  goToSlide(currentSlide);
}

// Reviews
function renderReviews(reviews) {
  const container = document.getElementById('review-slider');
  container.innerHTML = reviews
    .map(
      r => `
    <div class="min-w-[300px] bg-white p-6 rounded-3xl shadow-sm snap-center">
      <div class="text-yellow-400 text-2xl">${'★'.repeat(r.rating)}</div>
      <p class="italic mt-4 text-gray-600">"${r.comment}"</p>
      <p class="mt-6 font-semibold">- ${r.name}</p>
    </div>
  `,
    )
    .join('');
}

// Team Members
function renderTeam() {
  const container = document.getElementById('team-grid');
  container.innerHTML = teamMembers
    .map(
      member => `
    <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all text-center p-6">
      <img src="${member.img}" class="w-24 h-24 mx-auto rounded-2xl object-cover mb-4" alt="${member.name}">
      <h4 class="font-semibold">${member.name}</h4>
      <p class="text-blue-600 text-sm">${member.role}</p>
    </div>
  `,
    )
    .join('');
}

// Scroll Navigation (Fixed)
function scrollToSection(event, section) {
  event.preventDefault();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  event.target.classList.add('active');

  if (section === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth',
    });
  }
}

// Initialize
window.onload = () => {
  document.getElementById('balance-display').textContent = currentBalance;
  loadProducts();
  renderBanner();
  renderReviews(dummyReviews);
  renderTeam();

  //  banner slide
  setInterval(nextSlide, 4000);
  setInterval(() => {
  const slider = document.getElementById('review-slider');

  slider.scrollBy({
    left: 320,
    behavior: 'smooth',
  });

  if (
    slider.scrollLeft + slider.clientWidth >=
    slider.scrollWidth - 10
  ) {
    slider.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  }
}, 3000);


};

function clearCart() {
  cart = [];

  updateCartCount();

  renderCart();
}

function contactMessage() {
  alert('Thank you for contacting SmartShop!');
}

