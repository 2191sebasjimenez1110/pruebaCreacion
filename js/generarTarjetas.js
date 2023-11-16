import {  generarTarjetas } from './productos.js';

const productsContainer = document.getElementById("products-container");

function agregarNuevoProducto(form) {
        const imgInput = document.getElementById('imgProducto');
        const imgProducto = imgInput.files[0];
    
        const nombreProd = document.getElementById('nombreProd').value;
        const catProd = document.getElementById('catProd').value;
        const cantProd = document.getElementById('cantProd').value;
        const precioProd = document.getElementById('precioProd').value;
        const descriptionProd = document.getElementById('descriptionProd').value;
    
        // Convertir la imagen a un blob y almacenarla
        const reader = new FileReader();
    
        reader.onload = function (e) {
            const imgBlob = e.target.result;
    
            const nuevoProducto = {
                cod: localStorage.length + 1,
                img: imgBlob,
                nombre: nombreProd,
                cantidad: parseInt(cantProd),
                precio: parseFloat(precioProd),
                descripcion: descriptionProd,
                categoria: catProd
            };
    
            localStorage.setItem(nuevoProducto.cod, JSON.stringify(nuevoProducto));
            form.reset();
    
            alert('Producto agregado correctamente');
        };
        reader.readAsDataURL(imgProducto);
}

function filtrarCategoria(cat) {
    productsContainer.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = JSON.parse(localStorage.getItem(clave));
        if(cat === valor.categoria){
        generarTarjetas(valor);
        }
    }
}


export{agregarNuevoProducto,filtrarCategoria};