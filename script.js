const products = [
  {
    id: 1,
    name: "Футболка темно-синяя", 
    category: "shirt", 
    img: "images/photo1.jpeg",
    price: 6000,
    sizes: ["S","M","L","XL"]},
  {
    id: 2,
    name: "Футболка темно-зеленая", 
    category: "shirt",  
    img: "images/photo2.jpeg", 
    price: 6000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 3,
    name: "Футболка черно-белая", 
    category: "shirt", 
    img: "images/photo3.jpeg", 
    price: 6000,
    sizes: ["S","M","L","XL"]
    },
  {
    id: 4,
    name: "Футболка серая", 
    category: "shirt", 
    img: "images/photo4.jpeg", 
    price: 6000,
    sizes: ["S","M","L","XL"]
    }, 
  {
    id: 5,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo5.jpeg", 
    price: 6000,
    sizes: ["S","M","L","XL"]
    },
  {
    id: 6,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo6.jpeg", 
    price: 6000,
    sizes: ["S","M","L","XL"]
  }, 
  {
    id: 7,
    name: "Футболка серая", 
    category: "shirt", 
    img: "images/photo7.jpeg", 
    price: 6000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 8,
    name: "Футболка черно-белая", 
    category: "shirt", 
    img: "images/photo8.jpeg", 
    price: 6000,
    sizes: ["S","M","L","XL"]
  },
   {
    id: 9,
    name: "Футболка черно-белая", 
    category: "shirt", 
    img: "images/photo9.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 10,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo10.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 11,
    name: "Футболка черно-белая", 
    category: "shirt", 
    img: "images/photo11.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 12,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo12.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 13,
    name: "Футболка голубая", 
    category: "shirt", 
    img: "images/photo13.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 14,
    name: "Футболка розовая", 
    category: "shirt", 
    img: "images/photo14.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 15,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo15.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 16,
    name: "Футболка черная ", 
    category: "shirt", 
    img: "images/photo16.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 17,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo17.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 18,
    name: "Футболка серая", 
    category: "shirt", 
    img: "images/photo18.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 19,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo19.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 20,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo20.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 21,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo21.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 22,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo22.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 23,
    name: "Футболка белая", 
    category: "shirt", 
    img: "images/photo23.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 24,
    name: "Футболка белая", 
    category: "shirt", 
    img: "images/photo24.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 25,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo25.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 26,
    name: "Футболка черная", 
    category: "shirt", 
    img: "images/photo26.jpeg", 
    price: 5000,
    sizes: ["S","M","L","XL"]
  },
   {
    id: 27,
    name: "Спортивный костюм черный", 
    category: "kostem", 
    img: "images/kostem1.jpeg", 
    price: 10000,
    sizes: ["S","M","L","XL"]
  },
   {
    id: 28,
    name: "Спортивный костюм белый, адидас", 
    category: "kostem", 
    img: "images/kostem2.jpeg", 
    price: 10000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 29,
    name: "Спортивный костюм черно-фиолетовый", 
    category: "kostem", 
    img: "images/kostem3.jpeg", 
    price: 10000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 30,
    name: "Спортивный костюм белый, найк", 
    category: "kostem", 
    img: "images/kostem4.jpeg", 
    price: 10000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 31,
    name: "Спортивный костюм черный, найк", 
    category: "kostem", 
    img: "images/kostem5.jpeg", 
    price: 10000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 32,
    name: "Костюм черный", 
    category: "kostem", 
    img: "images/kostem6.jpeg", 
    price: 8000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 33,
    name: "Костюм белый", 
    category: "kostem", 
    img: "images/kostem7.jpeg", 
    price: 8000,
    sizes: ["S","M","L","XL"]
  },
  {
    id: 34,
    name: "Кепка серая", 
    category: "cap", 
    img: "images/kepka1.jpeg", 
    price: 2500
  },
  {
    id: 35,
    name: "Кепка черная", 
    category: "cap", 
    img: "images/kepka2.jpeg", 
    price: 2500
  },
  {
    id: 36,
    name: "Кепка серая", 
    category: "cap", 
    img: "images/kepka3.jpeg", 
    price: 2500
  },
  {
    id: 37,
    name: "Кроссовки черно-белые", 
    category: "krossowki", 
    img: "images/krossowki1.jpeg", 
    price: 5000,
    sizes: ["38","39","40","41", "42","43"]
  },
  {
    id: 38,
    name: "Кроссовки зелёно-белые", 
    category: "krossowki", 
    img: "images/krossowki2.jpeg", 
    price: 5000,
    sizes: ["38","39","40","41", "42","43"]
  },
  {
    id: 40,
    name: "Кроссовки черно-белые", 
    category: "krossowki", 
    img: "images/krossowki3.jpeg", 
    price: 5000,
    sizes: ["38","39","40","41", "42","43"]
  },
  {
    id: 41,
    name: "Кроссовки красно-черно-белые", 
    category: "krossowki", 
    img: "images/krossowki6.jpeg", 
    price: 5000,
    sizes: ["38","39","40","41", "42","43"]
  },
    {
    id: 42,
    name: "Кроссовки зелено-бежевые", 
    category: "krossowki", 
    img: "images/krossowki7.jpeg", 
    price: 5000,
    sizes: ["38","39","40","41", "42","43"]
  },
    {
    id: 43,
    name: "Кроссовки серые", 
    category: "krossowki", 
    img: "images/krossowki8.jpeg", 
    price: 4000,
    sizes: ["38","39","40","41", "42","43"]
  },
    {
    id: 44,
    name: "Кроссовки черно-белые", 
    category: "krossowki", 
    img: "images/krossowki9.jpeg", 
    price: 4000,
    sizes: ["38","39","40","41", "42","43"]
  },
    {
    id: 45,
    name: "Кроссовки белые", 
    category: "krossowki", 
    img: "images/krossowki10.jpeg", 
    price: 5000,
    sizes: ["38","39","40","41", "42","43"]
  },
    {
    id: 46,
    name: "Кроссовки черно-белые", 
    category: "krossowki", 
    img: "images/krossowki11.jpeg", 
    price: 5000,
    sizes: ["38","39","40","41", "42","43"]
  },
  {
    id: 47,
    name: "Сланцы", 
    category: "slates", 
    img: "images/tapki.jpeg", 
    price: 2000,
    sizes: ["38","39","40","41", "42","43"]
  },
]

localStorage.setItem("allProducts", JSON.stringify(products));

function render(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card" onclick="openProduct(${p.id})">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <div class="price">${p.price} ₸</div>
      </div>
    `;
  });
}

function applyFilters() {
  const filter = document.getElementById("filter").value;

  let result = products;

  if (filter !== "all") {
    result = result.filter(p => p.category === filter);
  }

  render(result);
}

function resetFilter() {
  document.getElementById("filter").value = "all";
  document.getElementById("products").innerHTML = "";
}

function showAll() {
  render(products);
}

function openProduct(id) {
  localStorage.setItem("productId", id);
  window.location.href = "product.html";
}

function openCart() {
  window.location.href = "cart.html";
}

function openContacts() {
  document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

function goWhatsApp() {
  window.open("https://wa.me/77476975946");
}

function goTelegram() {
  window.open("https://t.me/websitecreation_div");
}

function showNotification(text) {

    const old = document.querySelector(".notification");

    if(old) old.remove();

    const div = document.createElement("div");

    div.className = "notification";

    div.innerText = text;

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 2000);
}
