
const products = [
    {
        id: 1,
        name: "Premium Watch",
        price: 1850,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 2,
        name: "Fashion Bag",
        price: 1250,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500"
    },
    {
        id: 3,
        name: "Headphones",
        price: 2450,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 4,
        name: "Sneakers",
        price: 2200,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    }
];

let cart = [];

const grid = document.getElementById("productGrid");

function showProducts(list) {
    grid.innerHTML = "";

    list.forEach(product => {
        grid.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>৳${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add To Cart +
                </button>
            </div>
        `;
    });
}

function addToCart(id) {
    cart.push(products.find(p => p.id === id));
    updateCart();
}

function updateCart() {
    document.getElementById("cartCount").textContent = cart.length;

    document.getElementById("cartItems").innerHTML =
        cart.map(item => `
            <div class="cart-item">
                ${item.name} - ৳${item.price}
            </div>
        `).join("");

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById("total").textContent =
        "Total: ৳" + total;
}

document.getElementById("cartButton").onclick = () => {
    document.getElementById("cartPanel").classList.add("open");
};

document.getElementById("closeCart").onclick = () => {
    document.getElementById("cartPanel").classList.remove("open");
};

document.getElementById("search").addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    showProducts(products.filter(p =>
        p.name.toLowerCase().includes(value)
    ));
});

document.getElementById("orderButton").onclick = () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("This is a demo. Online order system will be added later.");
    }
};

showProducts(products);
