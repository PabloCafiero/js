let condicion;
let resultado = autos;

let busqueda=0;

let busquedaMarca=0;
let busquedaYear=0;
let busquedaPrecioMax =0;

let marca="";
let year;
let precioMaximo;


///////////////////////////////////////////////////
// INGRESO MARCA
const marcaForm = document.querySelector("#marca-form");
const marcaInput = document.querySelector("#marca-input");

marcaForm.addEventListener("input", (e) => {
    e.preventDefault();
    marca = marcaInput.value.toUpperCase();

    if(marca !="")
    busquedaMarca=1;
    else{
    busquedaMarca=0;
    resultado = autos;
    }

    filtro();
});


// INGRESO AÑO
const yearForm = document.querySelector("#year-form");
const yearInput = document.querySelector("#year-input");

yearForm.addEventListener("input", (e) => {
    e.preventDefault();
    year = yearInput.value

    if(year !="")
    busquedaYear=1;
    else{
    busquedaYear=0;
    resultado = autos;
    }

    filtro();
});


// INGRESO PRECIOMAX
const priceMaxForm = document.querySelector("#pricemax-form");
const priceMaxInput = document.querySelector("#pricemax-input");

priceMaxForm.addEventListener("input", (e) => {
    e.preventDefault();
    
    precioMaximo = priceMaxInput.value

    if(precioMaximo !="")
    busquedaPrecioMax=1;
    else{
    busquedaPrecioMax=0;
    resultado = autos;
    }

    filtro();
});


///////////////////////////////////////////////////
// MUESTREO
const seccionListaAutos = document.querySelector(".lista-busqueda");

const listaAutos = document.createElement("ul");
listaAutos.classList.add("listaAutos")

seccionListaAutos.append(listaAutos)

const tituloListaBusqueda = document.querySelector("#titulo-lista-busqueda")

imprimirAutos()


/* function mostrarAutos(automoviles){

    automoviles.forEach(auto => {
        console.log(auto.marca + " - " + auto.modelo + " - " + auto.year + " - " + auto.puertas + " Puertas - $" + auto.precio)
    });
} */

function imprimirAutos(automoviles){


    if(busquedaMarca==0 &&busquedaYear==0)
        busqueda=0;
    else
        busqueda=1;

    if(busqueda==1){
        tituloListaBusqueda.innerHTML = `<h4 id="titulo-lista-busqueda">Busqueda</h4>`
        if(automoviles.length>0){
            listaAutos.innerHTML = ``;
            automoviles.forEach(auto => {
                listaAutos.innerHTML += ` <li class="autos"> ${auto.marca} -  ${auto.modelo} - ${auto.year} - $${auto.precio} </li>` ;
            });

        }else{listaAutos.innerHTML = ` <li class="error"> No hay resultados </li>`
    resultado = autos;
    }

    }else{
        tituloListaBusqueda.innerHTML = `<h4 id="titulo-lista-busqueda">Catalogo</h4>`
        listaAutos.innerHTML = ``;
        autos.forEach(auto => {
            listaAutos.innerHTML += ` <li class="autos"> ${auto.marca} -  ${auto.modelo} - ${auto.year} - $${auto.precio} </li>` ;
        });
    }
}


// FILTRO

function filtro(){

    if(busquedaMarca==1)
    filtrarMarca(marca)

    if(busquedaYear==1)
    filtrarYear(year)

    if(busquedaPrecioMax==1)
    filtrarPrecioMax(precioMaximo)

    imprimirAutos(resultado)
}


function filtrarMarca(marca){

    resultado = resultado.filter((auto) => auto.marca == marca)
}

function filtrarYear(year){

    

    resultado = resultado.filter((auto) => auto.year == year)

}

function filtrarPrecioMax(precioMaximo){
    resultado = resultado.filter((auto) => auto.precio <= precioMaximo)
}

