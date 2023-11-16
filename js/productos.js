const productsContainer = document.getElementById("products-container");

function Productos(){
    const Productos = {
        1 : {
            img:"images/Camiseta1.webp",
            nombre: "",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        2 : {
            img:"images/Camiseta2.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto naciona kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
            precio: 25.000,
            categoria: "camisa"
        },
        3 : {
            img:"images/Camiseta4.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        4 : {
            img:"images/Camiseta5.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        5 : {
            img:"images/Camiseta6.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        6 : {
            img:"images/Camiseta7.webp",
            nombre: "camiseta",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        7 : {
            img:"images/Camiseta8.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "camisa"
        },
        8 : {
            img:"images/sueter1.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        9 : {
            img:"images/sueter2.webp",
            nombre: "",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        10 : {
            img:"images/sueter3.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        11 : {
            img:"images/sueter4.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        12 : {
            img:"images/sueter5.jpg",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        13 : {
            img:"images/sueter6.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        },
        14 : {
            img:"images/sueter7.webp",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "producto de excellente calidad en el cual se demarca lo",
            precio: 25.000,
            categoria: "busos"
        },
        15 : {
            img:"images/sueter8.jpg",
            nombre: "Producto",
            cantidad: 25,
            descripcion: "camiseta de exelente calidad producto nacional",
            precio: 25.000,
            categoria: "busos"
        }
    }
    
    for(const clave in Productos){
        localStorage.setItem(clave,JSON.stringify(Productos[clave]));
    }
}

function mostrarTodosLosProductos() {
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = JSON.parse(localStorage.getItem(clave));
        generarTarjetas(valor);
    }
}

function mostrarImagen(producto) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    generarTarjetas(producto, productCard);
    productsContainer.appendChild(productCard);
}

function generarTarjetas(valor) {
    const productCardHTML = `
        <div class="product-card">
            <img class="img-card" src="${valor.img.startsWith("blob:") ? valor.img : valor.img}" />
        <div class="content-card">
            <h3 class="title-card">${valor.nombre}</h3>
            <p class="description-card">${valor.descripcion}</p>
        <div class="products-describe">
            <p class="stock-products">disponibles ${valor.cantidad}</p>
            <p class="products-category">${valor.categoria}</p>
        </div>
            <div id="container-button">
                <p class="prace-card">${valor.precio} COP</p>
                <button id="add-cart"><i class="bx bx-cart-add"></i></button>
            </div>
        </div>
    </div>
`;

productsContainer.innerHTML += productCardHTML;
}

export { mostrarImagen, mostrarTodosLosProductos, Productos,generarTarjetas };












