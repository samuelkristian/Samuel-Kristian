let cart = [];
let cartCount = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    alert(productName + ' telah ditambahkan ke keranjang.');
}