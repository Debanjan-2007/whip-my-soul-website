/* ===== Admin Dashboard JavaScript ===== */

// Default data store (uses localStorage for persistence)
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
    soulEggRolls: [
      { name: 'Collard Green Egg Rolls', price: 8.50, description: 'Homemade collard green filling' },
      { name: 'Cheezy Mac and Shrimp Egg Rolls', price: 9.50, description: 'Mac & cheese with shrimp filling' }
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
    { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', alt: 'Fried Catfish' },
    { src: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80', alt: 'Soul Food Plate' },
    { src: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80', alt: 'Mac and Cheese' },
    { src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80', alt: 'Fried Chicken' },
    { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80', alt: 'Waffles' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Restaurant Interior' }
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

/* ===== Admin Navigation ===== */
function initAdminNav() {
  const sidebarLinks = document.querySelectorAll('.admin-sidebar a[data-section]');
  const sections = document.querySelectorAll('.admin-section');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-section');

      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(s => s.classList.remove('active'));
      const targetSection = document.getElementById(target);
      if (targetSection) targetSection.classList.add('active');
    });
  });
}

/* ===== Render Menu Items ===== */
function renderMenuAdmin() {
  const data = getData();
  const container = document.getElementById('admin-menu-list');
  if (!container) return;

  let html = '';
  const categoryLabels = {
    appetizers: 'Appetizers',
    wafflePlates: 'Waffle Plates',
    dinnerPlates: 'Dinner Plates',
    soulEggRolls: 'Soul Egg Rolls',
    sides: 'Sides',
    desserts: 'Desserts',
    drinks: 'Drinks'
  };

  Object.keys(data.menu).forEach(category => {
    html += `<h4 style="margin: 20px 0 10px; color: var(--primary); font-family: var(--font-heading);">${categoryLabels[category] || category}</h4>`;
    html += `<table class="admin-table"><thead><tr><th>Item</th><th>Price</th><th>Actions</th></tr></thead><tbody>`;
    data.menu[category].forEach((item, index) => {
      html += `<tr>
        <td>${item.name}</td>
        <td>${item.price > 0 ? '$' + item.price.toFixed(2) : 'Ask'}</td>
        <td>
          <button class="admin-btn admin-btn-edit" onclick="editMenuItem('${category}', ${index})">Edit</button>
          <button class="admin-btn admin-btn-delete" onclick="deleteMenuItem('${category}', ${index})">Delete</button>
        </td>
      </tr>`;
    });
    html += `</tbody></table>`;
    html += `<button class="admin-btn admin-btn-add" style="margin: 10px 0;" onclick="addMenuItem('${category}')">+ Add ${categoryLabels[category]} Item</button>`;
  });

  container.innerHTML = html;
}

/* ===== Menu CRUD ===== */
function editMenuItem(category, index) {
  const data = getData();
  const item = data.menu[category][index];
  const modal = document.getElementById('admin-modal');
  const modalContent = document.getElementById('modal-body');

  modalContent.innerHTML = `
    <h3>Edit Menu Item</h3>
    <div class="admin-form-group">
      <label>Name</label>
      <input type="text" id="edit-name" value="${item.name}">
    </div>
    <div class="admin-form-group">
      <label>Price ($)</label>
      <input type="number" step="0.01" id="edit-price" value="${item.price}">
    </div>
    <div class="admin-form-group">
      <label>Description</label>
      <textarea id="edit-desc" rows="3">${item.description || ''}</textarea>
    </div>
    <button class="admin-btn admin-btn-add" onclick="saveMenuItem('${category}', ${index})">Save Changes</button>
    <button class="admin-btn" style="background:#eee;" onclick="closeModal()">Cancel</button>
  `;

  modal.classList.add('active');
}

function saveMenuItem(category, index) {
  const data = getData();
  data.menu[category][index] = {
    name: document.getElementById('edit-name').value,
    price: parseFloat(document.getElementById('edit-price').value) || 0,
    description: document.getElementById('edit-desc').value
  };
  saveData(data);
  renderMenuAdmin();
  closeModal();
}

function addMenuItem(category) {
  const data = getData();
  const modal = document.getElementById('admin-modal');
  const modalContent = document.getElementById('modal-body');

  modalContent.innerHTML = `
    <h3>Add Menu Item</h3>
    <div class="admin-form-group">
      <label>Name</label>
      <input type="text" id="edit-name" value="">
    </div>
    <div class="admin-form-group">
      <label>Price ($)</label>
      <input type="number" step="0.01" id="edit-price" value="0">
    </div>
    <div class="admin-form-group">
      <label>Description</label>
      <textarea id="edit-desc" rows="3"></textarea>
    </div>
    <button class="admin-btn admin-btn-add" onclick="saveNewMenuItem('${category}')">Add Item</button>
    <button class="admin-btn" style="background:#eee;" onclick="closeModal()">Cancel</button>
  `;

  modal.classList.add('active');
}

function saveNewMenuItem(category) {
  const data = getData();
  data.menu[category].push({
    name: document.getElementById('edit-name').value,
    price: parseFloat(document.getElementById('edit-price').value) || 0,
    description: document.getElementById('edit-desc').value
  });
  saveData(data);
  renderMenuAdmin();
  closeModal();
}

function deleteMenuItem(category, index) {
  if (!confirm('Are you sure you want to delete this item?')) return;
  const data = getData();
  data.menu[category].splice(index, 1);
  saveData(data);
  renderMenuAdmin();
}

/* ===== Hours Management ===== */
function renderHoursAdmin() {
  const data = getData();
  const container = document.getElementById('admin-hours-list');
  if (!container) return;

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  let html = '<table class="admin-table"><thead><tr><th>Day</th><th>Hours</th><th>Actions</th></tr></thead><tbody>';

  days.forEach((day, i) => {
    const h = data.hours[day];
    const display = h.closed ? '<span style="color:var(--primary)">Closed</span>' : `${h.open} - ${h.close}`;
    html += `<tr>
      <td>${dayLabels[i]}</td>
      <td>${display}</td>
      <td><button class="admin-btn admin-btn-edit" onclick="editHours('${day}', '${dayLabels[i]}')">Edit</button></td>
    </tr>`;
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}

function editHours(day, label) {
  const data = getData();
  const h = data.hours[day];
  const modal = document.getElementById('admin-modal');
  const modalContent = document.getElementById('modal-body');

  modalContent.innerHTML = `
    <h3>Edit ${label} Hours</h3>
    <div class="admin-form-group">
      <label><input type="checkbox" id="edit-closed" ${h.closed ? 'checked' : ''}> Closed</label>
    </div>
    <div class="admin-form-group">
      <label>Opening Time</label>
      <input type="text" id="edit-open" value="${h.open}" placeholder="e.g. 11:00 AM">
    </div>
    <div class="admin-form-group">
      <label>Closing Time</label>
      <input type="text" id="edit-close" value="${h.close}" placeholder="e.g. 8:30 PM">
    </div>
    <button class="admin-btn admin-btn-add" onclick="saveHours('${day}')">Save</button>
    <button class="admin-btn" style="background:#eee;" onclick="closeModal()">Cancel</button>
  `;

  modal.classList.add('active');
}

function saveHours(day) {
  const data = getData();
  data.hours[day] = {
    closed: document.getElementById('edit-closed').checked,
    open: document.getElementById('edit-open').value,
    close: document.getElementById('edit-close').value
  };
  saveData(data);
  renderHoursAdmin();
  closeModal();
}

/* ===== Gallery Management ===== */
function renderGalleryAdmin() {
  const data = getData();
  const container = document.getElementById('admin-gallery-list');
  if (!container) return;

  let html = '<div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">';
  data.gallery.forEach((img, i) => {
    html += `<div style="position:relative; border-radius:8px; overflow:hidden;">
      <img src="${img.src}" alt="${img.alt}" style="width:100%; height:150px; object-fit:cover;">
      <div style="padding:8px; background:#f5f5f5;">
        <small>${img.alt}</small><br>
        <button class="admin-btn admin-btn-edit" style="margin-top:5px;" onclick="editGalleryItem(${i})">Edit</button>
        <button class="admin-btn admin-btn-delete" onclick="deleteGalleryItem(${i})">Delete</button>
      </div>
    </div>`;
  });
  html += '</div>';
  html += `<button class="admin-btn admin-btn-add" style="margin-top:20px;" onclick="addGalleryItem()">+ Add Image</button>`;
  container.innerHTML = html;
}

function editGalleryItem(index) {
  const data = getData();
  const item = data.gallery[index];
  const modal = document.getElementById('admin-modal');
  const modalContent = document.getElementById('modal-body');

  modalContent.innerHTML = `
    <h3>Edit Gallery Image</h3>
    <div class="admin-form-group">
      <label>Image URL</label>
      <input type="text" id="edit-img-src" value="${item.src}">
    </div>
    <div class="admin-form-group">
      <label>Alt Text / Caption</label>
      <input type="text" id="edit-img-alt" value="${item.alt}">
    </div>
    <img src="${item.src}" alt="" style="width:100%; height:150px; object-fit:cover; border-radius:8px; margin-bottom:15px;">
    <button class="admin-btn admin-btn-add" onclick="saveGalleryItem(${index})">Save</button>
    <button class="admin-btn" style="background:#eee;" onclick="closeModal()">Cancel</button>
  `;

  modal.classList.add('active');
}

function saveGalleryItem(index) {
  const data = getData();
  data.gallery[index] = {
    src: document.getElementById('edit-img-src').value,
    alt: document.getElementById('edit-img-alt').value
  };
  saveData(data);
  renderGalleryAdmin();
  closeModal();
}

function addGalleryItem() {
  const modal = document.getElementById('admin-modal');
  const modalContent = document.getElementById('modal-body');

  modalContent.innerHTML = `
    <h3>Add Gallery Image</h3>
    <div class="admin-form-group">
      <label>Image URL</label>
      <input type="text" id="edit-img-src" value="" placeholder="https://...">
    </div>
    <div class="admin-form-group">
      <label>Alt Text / Caption</label>
      <input type="text" id="edit-img-alt" value="">
    </div>
    <button class="admin-btn admin-btn-add" onclick="saveNewGalleryItem()">Add Image</button>
    <button class="admin-btn" style="background:#eee;" onclick="closeModal()">Cancel</button>
  `;

  modal.classList.add('active');
}

function saveNewGalleryItem() {
  const data = getData();
  data.gallery.push({
    src: document.getElementById('edit-img-src').value,
    alt: document.getElementById('edit-img-alt').value
  });
  saveData(data);
  renderGalleryAdmin();
  closeModal();
}

function deleteGalleryItem(index) {
  if (!confirm('Delete this image?')) return;
  const data = getData();
  data.gallery.splice(index, 1);
  saveData(data);
  renderGalleryAdmin();
}

/* ===== Popular Dishes Management ===== */
function renderDishesAdmin() {
  const data = getData();
  const container = document.getElementById('admin-dishes-list');
  if (!container) return;

  let html = '<table class="admin-table"><thead><tr><th>Dish</th><th>Description</th><th>Actions</th></tr></thead><tbody>';
  data.popularDishes.forEach((dish, i) => {
    html += `<tr>
      <td>${dish.name}</td>
      <td>${dish.description}</td>
      <td>
        <button class="admin-btn admin-btn-edit" onclick="editDish(${i})">Edit</button>
        <button class="admin-btn admin-btn-delete" onclick="deleteDish(${i})">Delete</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table>';
  html += `<button class="admin-btn admin-btn-add" style="margin-top:15px;" onclick="addDish()">+ Add Dish</button>`;
  container.innerHTML = html;
}

function editDish(index) {
  const data = getData();
  const dish = data.popularDishes[index];
  const modal = document.getElementById('admin-modal');
  const modalContent = document.getElementById('modal-body');

  modalContent.innerHTML = `
    <h3>Edit Popular Dish</h3>
    <div class="admin-form-group">
      <label>Name</label>
      <input type="text" id="edit-dish-name" value="${dish.name}">
    </div>
    <div class="admin-form-group">
      <label>Description</label>
      <textarea id="edit-dish-desc" rows="2">${dish.description}</textarea>
    </div>
    <div class="admin-form-group">
      <label>Image URL</label>
      <input type="text" id="edit-dish-img" value="${dish.image}">
    </div>
    <button class="admin-btn admin-btn-add" onclick="saveDish(${index})">Save</button>
    <button class="admin-btn" style="background:#eee;" onclick="closeModal()">Cancel</button>
  `;

  modal.classList.add('active');
}

function saveDish(index) {
  const data = getData();
  data.popularDishes[index] = {
    name: document.getElementById('edit-dish-name').value,
    description: document.getElementById('edit-dish-desc').value,
    image: document.getElementById('edit-dish-img').value
  };
  saveData(data);
  renderDishesAdmin();
  closeModal();
}

function addDish() {
  const modal = document.getElementById('admin-modal');
  const modalContent = document.getElementById('modal-body');

  modalContent.innerHTML = `
    <h3>Add Popular Dish</h3>
    <div class="admin-form-group">
      <label>Name</label>
      <input type="text" id="edit-dish-name" value="">
    </div>
    <div class="admin-form-group">
      <label>Description</label>
      <textarea id="edit-dish-desc" rows="2"></textarea>
    </div>
    <div class="admin-form-group">
      <label>Image URL</label>
      <input type="text" id="edit-dish-img" value="">
    </div>
    <button class="admin-btn admin-btn-add" onclick="saveNewDish()">Add Dish</button>
    <button class="admin-btn" style="background:#eee;" onclick="closeModal()">Cancel</button>
  `;

  modal.classList.add('active');
}

function saveNewDish() {
  const data = getData();
  data.popularDishes.push({
    name: document.getElementById('edit-dish-name').value,
    description: document.getElementById('edit-dish-desc').value,
    image: document.getElementById('edit-dish-img').value
  });
  saveData(data);
  renderDishesAdmin();
  closeModal();
}

function deleteDish(index) {
  if (!confirm('Delete this dish?')) return;
  const data = getData();
  data.popularDishes.splice(index, 1);
  saveData(data);
  renderDishesAdmin();
}

/* ===== Modal ===== */
function closeModal() {
  const modal = document.getElementById('admin-modal');
  if (modal) modal.classList.remove('active');
}

/* ===== Mobile Admin Sidebar Toggle ===== */
function toggleAdminSidebar() {
  const sidebar = document.querySelector('.admin-sidebar');
  if (sidebar) sidebar.classList.toggle('active');
}

/* ===== Initialize Admin ===== */
document.addEventListener('DOMContentLoaded', () => {
  initAdminNav();
  renderMenuAdmin();
  renderHoursAdmin();
  renderGalleryAdmin();
  renderDishesAdmin();
});
