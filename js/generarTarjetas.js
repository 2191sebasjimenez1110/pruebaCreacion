document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < localStorage.length; i++) {
        generarTarjetas(i);
    }
});

function generarTarjetas(i) {
    const productsContainer = document.getElementById("products-container");
    const clave = localStorage.key(i);
    const valor = JSON.parse(localStorage.getItem(clave));
    
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    
    const productImage = document.createElement("img");
    productImage.classList.add("img");
    productImage.src = valor.img;
    productCard.appendChild(productImage);
    
    const productName = document.createElement("h3");
    productName.textContent = valor.nombre;
    productCard.appendChild(productName);
    
    const productDescribe = document.createElement("p");
    productDescribe.textContent = valor.descripcion;
    productCard.appendChild(productDescribe);

	const productCant = document.createElement("p");
	productCant.textContent = `disponibles ${valor.cantidad}`;
	productCard.appendChild(productCant);
    
    const productPrice = document.createElement("p");
    productPrice.textContent = `${valor.precio} COP`;
    productCard.appendChild(productPrice);
    
    const productButton = document.createElement("button");
    productButton.textContent = `Agregar Al Carrito`;
    productButton.id = clave;
    productCard.appendChild(productButton);
    productsContainer.appendChild(productCard);
}