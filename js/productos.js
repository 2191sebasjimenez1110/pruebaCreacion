const Productos = {
    1 : {
        img:"images/Camiseta1.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    }/*,
    2 : {
        img:"images/Camiseta2.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    3 : {
        img:"images/Camiseta4.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    4 : {
        img:"images/Camiseta5.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    5 : {
        img:"images/Camiseta6.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    6 : {
        img:"images/Camiseta7.webp",
        nombre: "camiseta",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    7 : {
        img:"images/Camiseta8.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    8 : {
        img:"images/sueter1.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    9 : {
        img:"images/sueter2.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    10 : {
        img:"images/sueter3.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    11 : {
        img:"images/sueter4.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    12 : {
        img:"images/sueter5.jpg",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    13 : {
        img:"images/sueter6.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    },
    14 : {
        img:"images/sueter7.webp",
        nombre: "",
        cantidad: 25,
        descripcion: "producto de excellente calidad en el cual se demarca lo",
        precio: 25.000,
        categoria: "busos"
    },
    15 : {
        img:"images/sueter8.jpg",
        nombre: "",
        cantidad: 25,
        descripcion: "",
        precio: 25.000,
        categoria: "busos"
    }*/
}

for(const clave in Productos){
    localStorage.setItem(clave,JSON.stringify(Productos[clave]));
}






