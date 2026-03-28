/* ===== Shared Data Layer ===== */
/* Used by both admin.js and front-end pages to read/write restaurant data */

const defaultData = {
  menu: {
    appetizers: [
      { name: 'Hush Puppies', price: 9.00, description: 'Golden fried cornmeal bites' },
      { name: 'Fried Pickles', price: 9.00, description: 'Crispy southern fried pickles' },
      { name: 'Fried Gizzards', price: 9.00, description: 'Seasoned and deep fried' }
    ],
    wafflePlates: [
      { name: 'Wings and Waffle Plate', price: 15.75, description: 'Crispy wings with golden waffle' },
      { name: 'Tenders and Waffle Plate', price: 15.75, description: 'Chicken tenders with golden waffle' },
      { name: 'Fish and Waffle Plate', price: 16.75, description: 'Fried fish with golden waffle' },
      { name: 'Shrimps and Waffle Plate', price: 18.25, description: 'Fried shrimp with golden waffle' }
    ],
    dinnerPlates: [
      { name: 'Wings Dinner Plate', price: 15.99, description: 'Served with 2 sides and cornbread' },
      { name: 'Tenders Dinner Plate', price: 15.99, description: 'Served with 2 sides and cornbread' },
      { name: 'Fish Dinner Plate', price: 16.99, description: 'Served with 2 sides and cornbread' },
      { name: 'Fried Shrimp Dinner Plate', price: 19.99, description: 'Served with 2 sides and cornbread' },
      { name: 'Oxtails Dinner Plate', price: 32.99, description: 'Served with 2 sides and cornbread' },
      { name: 'Pork Chop Dinner Plate', price: 15.75, description: 'Served with 2 sides and cornbread' },
      { name: 'Baked Chicken Dinner Plate', price: 17.99, description: 'Served with 2 sides and cornbread' },
      { name: 'Baked Fish Dinner Plate', price: 18.50, description: 'Served with 2 sides and cornbread' }
    ],
    samplePlatters: [
      { name: '2 Wings, 2 Fish And 2 Tenders Platter', price: 24.99, description: '' },
      { name: '3 Wings And 3 Tenders Platter', price: 23.99, description: '' },
      { name: '2 Wings And 2 Tenders Platter', price: 18.99, description: '' },
      { name: '4 Shrimp And 2 Wings Platter', price: 18.99, description: '' },
      { name: '4 Shrimp And 2 Tenders Platter', price: 18.99, description: '' },
      { name: '4 Shrimp And 2 Piece Fish Platter', price: 19.50, description: '' },
      { name: '1 Pork Chop, 1 Wing And 1 Fish Platter', price: 19.50, description: '' }
    ],
    soulEggRolls: [
      { name: 'Collard Green Egg Rolls', price: 8.50, description: 'Homemade collard green filling' },
      { name: 'Cheezy Mac and Shrimp Egg Rolls', price: 9.50, description: 'Mac & cheese with shrimp filling' }
    ],
    shrimpAndGrits: [
      { name: 'Shrimp And Grits', price: 17.50, description: '' }
    ],
    buckets: [
      { name: '12 Piece Chicken Bucket With 2 Large Sides', price: 40.95, description: '' },
      { name: '12 Piece Fish Bucket With 2 Large Sides', price: 41.95, description: '' }
    ],
    sandwichesAndFries: [
      { name: 'Buffalo Chicken Sandwich', price: 12.75, description: '' },
      { name: 'Pork Chop Sandwich', price: 12.75, description: '' }
    ],
    waffles: [
      { name: 'Waffles', price: 6.50, description: '' }
    ],
    sides: [
      { name: 'Fried Okra', price: 5.00, description: '' },
      { name: 'Onion Rings', price: 5.00, description: '' },
      { name: 'Cheezy Mac', price: 5.00, description: '' },
      { name: 'Sweet Glazed Yams', price: 5.00, description: '' },
      { name: 'Red Beans and Rice', price: 6.00, description: '' },
      { name: 'Cornbread', price: 1.25, description: '' },
      { name: 'Mean Greens', price: 5.00, description: '' },
      { name: 'Cheese Grits', price: 5.00, description: '' }
    ],
    weekendSpecialSides: [
      { name: 'Black Eyed Peas', price: 5.00, description: '' },
      { name: 'Southern Corn Bread Dressing', price: 5.00, description: '' },
      { name: 'Fried Cabbage', price: 5.00, description: '' }
    ],
    kidsMeal: [
      { name: 'Kids Meal', price: 7.50, description: 'Wing or tender' }
    ],
    desserts: [
      { name: 'Homemade Peach Cobbler', price: 7.25, description: '' },
      { name: 'Cake Slice', price: 4.75, description: '' },
      { name: 'Red Velvet Chocolate Chip Cookies', price: 7.25, description: '' }
    ],
    drinks: [
      { name: 'Sweet Tea', price: 0, description: '' },
      { name: 'Mexi Cola', price: 0, description: '' },
      { name: 'Lemon Lime', price: 0, description: '' },
      { name: 'Kool Aid Flavors', price: 0, description: '' },
      { name: 'Watermelon Cucumber Water', price: 0, description: '' }
    ]
  },
  hours: {
    monday: { open: '', close: '', closed: true },
    tuesday: { open: '11:00 AM', close: '8:30 PM', closed: false },
    wednesday: { open: '11:00 AM', close: '8:30 PM', closed: false },
    thursday: { open: '11:00 AM', close: '8:30 PM', closed: false },
    friday: { open: '11:00 AM', close: '8:30 PM', closed: false },
    saturday: { open: '11:00 AM', close: '8:30 PM', closed: false },
    sunday: { open: '11:00 AM', close: '4:30 PM', closed: false }
  },
  gallery: [
    { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', alt: 'Fried Catfish Plate' },
    { src: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80', alt: 'Soul Food Spread' },
    { src: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80', alt: 'Mac and Cheese' },
    { src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80', alt: 'Fried Chicken and Waffles' },
    { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80', alt: 'Golden Waffles' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Food Spread' },
    { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', alt: 'BBQ Ribs and Meat' },
    { src: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80', alt: 'Fried Shrimp' },
    { src: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&q=80', alt: 'Peach Cobbler' },
    { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', alt: 'Grilled Dishes' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Restaurant Interior' },
    { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80', alt: 'Southern Cooking' }
  ],
  popularDishes: [
    { name: 'Fried Catfish', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', description: 'Southern-style crispy catfish fillets' },
    { name: 'Oxtails', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', description: 'Slow-braised tender oxtails' },
    { name: 'Fried Shrimp', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80', description: 'Golden crispy fried shrimp' },
    { name: 'Chicken & Waffles', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80', description: 'Classic southern combo' },
    { name: 'Mac & Cheese', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80', description: 'Homemade cheezy mac' },
    { name: 'Peach Cobbler', image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&q=80', description: 'Warm homemade peach cobbler' }
  ]
};

function getData() {
  const stored = localStorage.getItem('whipMySoulData');
  return stored ? JSON.parse(stored) : defaultData;
}

function saveData(data) {
  localStorage.setItem('whipMySoulData', JSON.stringify(data));
}

// Initialize data on first load
if (!localStorage.getItem('whipMySoulData')) {
  saveData(defaultData);
}

/* ===== Front-End Rendering Functions ===== */

/**
 * Renders popular dishes on the homepage (index.html)
 * Replaces static HTML in .dishes-grid with data from localStorage
 */
function renderPopularDishes() {
  const container = document.querySelector('.dishes-grid');
  if (!container) return;

  const data = getData();
  let html = '';
  data.popularDishes.forEach(dish => {
    html += `<div class="dish-card">
          <div class="dish-card-img-wrapper">
            <img src="${dish.image}" alt="${dish.name}" class="dish-card-img">
          </div>
          <div class="dish-card-body">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
          </div>
        </div>`;
  });
  container.innerHTML = html;
}

/**
 * Renders menu items on the menu page (menu.html)
 * Replaces static HTML in #dynamic-menu with data from localStorage
 */
function renderMenu() {
  const container = document.getElementById('dynamic-menu');
  if (!container) return;

  const data = getData();
  const categoryLabels = {
    appetizers: 'Appetizers',
    wafflePlates: 'Waffle Plates',
    dinnerPlates: 'Dinner Plates',
    samplePlatters: 'Sample Platters',
    soulEggRolls: 'Soul Egg Rolls',
    shrimpAndGrits: 'Shrimp and Grits',
    buckets: 'Buckets',
    sandwichesAndFries: 'Sandwiches and Fries',
    waffles: 'Waffles',
    sides: 'Sides',
    weekendSpecialSides: 'Weekend Special Sides',
    kidsMeal: 'Kids Meal',
    desserts: 'Desserts',
    drinks: 'Drinks'
  };

  let html = '';
  Object.keys(data.menu).forEach(category => {
    const label = categoryLabels[category] || category;
    html += `<div class="menu-section">
        <h3 class="menu-section-title">${label}</h3>
        <div class="menu-grid">`;
    data.menu[category].forEach(item => {
      const priceDisplay = item.price > 0 ? `$${item.price.toFixed(2)}` : 'Ask';
      html += `<div class="menu-item">
            <div class="menu-item-info">
              <h4>${item.name}</h4>
              ${item.description ? `<p>${item.description}</p>` : ''}
            </div>
            <span class="menu-item-price">${priceDisplay}</span>
          </div>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}

/**
 * Renders gallery images on the gallery page (gallery.html)
 * Replaces static HTML in .gallery-grid with data from localStorage
 */
function renderGallery() {
  const container = document.querySelector('.gallery-grid');
  if (!container) return;

  const data = getData();
  let html = '';
  data.gallery.forEach(img => {
    html += `<div class="gallery-item">
          <img src="${img.src}" alt="${img.alt}" loading="lazy">
        </div>`;
  });
  container.innerHTML = html;
}

/**
 * Renders opening hours in the footer across all pages
 * Targets the footer Hours section and replaces with data from localStorage
 */
function renderFooterHours() {
  const container = document.getElementById('footer-hours');
  if (!container) return;

  const data = getData();
  const h = data.hours;

  // Group days by their hours for a compact display
  const lines = [];

  // Tue - Thu
  if (!h.tuesday.closed) {
    lines.push({ label: 'Tue - Thu', hours: `${h.tuesday.open} - ${h.tuesday.close}` });
  }
  // Fri - Sat
  if (!h.friday.closed) {
    lines.push({ label: 'Fri - Sat', hours: `${h.friday.open} - ${h.friday.close}` });
  }
  // Sunday
  if (!h.sunday.closed) {
    lines.push({ label: 'Sunday', hours: `${h.sunday.open} - ${h.sunday.close}` });
  } else {
    lines.push({ label: 'Sunday', hours: 'Closed', isClosed: true });
  }
  // Monday
  if (h.monday.closed) {
    lines.push({ label: 'Monday', hours: 'Closed', isClosed: true });
  } else {
    lines.push({ label: 'Monday', hours: `${h.monday.open} - ${h.monday.close}` });
  }

  let html = '';
  lines.forEach(line => {
    if (line.isClosed) {
      html += `<p style="color:var(--primary);font-size:0.9rem;">${line.label}: ${line.hours}</p>`;
    } else {
      html += `<p style="color:#aaa;font-size:0.9rem;margin-bottom:5px;">${line.label}: ${line.hours}</p>`;
    }
  });

  container.innerHTML = html;
}

/**
 * Renders the full hours table on the contact page (contact.html)
 * Targets #contact-hours-table
 */
function renderContactHours() {
  const table = document.getElementById('contact-hours-table');
  if (!table) return;

  const data = getData();
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  let html = '';
  days.forEach(function(day, i) {
    const h = data.hours[day];
    if (h.closed) {
      html += `<tr><td>${dayLabels[i]}</td><td class="closed">Closed</td></tr>`;
    } else {
      html += `<tr><td>${dayLabels[i]}</td><td>${h.open} - ${h.close}</td></tr>`;
    }
  });
  table.innerHTML = html;
}

/* ===== Auto-initialize on front-end pages ===== */
document.addEventListener('DOMContentLoaded', function() {
  renderPopularDishes();
  renderMenu();
  renderGallery();
  renderFooterHours();
  renderContactHours();
});
