let marcaAnterior = "ningunamarca";
let yearAnterior = 0;
let marca;
let condicion;
let resultado = autos;

let marcaFiltrada =0;
let yearFiltrada =0;

let busqueda = 0;
let busqueda1 = 0;
let busqueda2 = 0;
let busqueda3 = 0;

/* 
autos.forEach(auto =>{
    document.body.innerHTML += ` 
    <div class="card" style="width: 18rem;" class="col" >
    <img src="./img/foto auto.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${auto.marca} ${auto.modelo}</h5>
      <p class="card-text">Año ${auto.year }</p>
      <p class="card-text">$ ${auto.precio }</p>

      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
` 
});
 */


///////////////////////////////////////////////////


// INGRESO MARCA
const marcaForm = document.querySelector("#marca-form");
const marcaInput = document.querySelector("#marca-input");

marcaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    marca = marcaInput.value.toUpperCase();
    filtrarMarca(marca);
});


// INGRESO AÑO
const yearForm = document.querySelector("#year-form");
const yearInput = document.querySelector("#year-input");

yearForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filtrarYear(yearInput.value);
});


// INGRESO PRECIOMAX
const priceMaxForm = document.querySelector("#pricemax-form");
const priceMaxInput = document.querySelector("#pricemax-input");

priceMaxForm.addEventListener("input", (e) => {
    e.preventDefault();
    filtrarPrecioMax(priceMaxInput.value);
});

///////////////////////////////////////////////////


function comprobacion(){
    if(marcaInput.value != "")busquedaMarca=1;else busquedaMarca=0;
     
}




///////////////////////////////////////////////////
// MUESTREO
const seccionListaAutos = document.querySelector(".lista-busqueda");

let listaAutos = document.createElement("ul");
listaAutos.classList.add("listaAutos")

seccionListaAutos.append(listaAutos)

imprimirAutos()

function mostrarAutos(automoviles){

    automoviles.forEach(auto => {
        console.log(auto.marca + " - " + auto.modelo + " - " + auto.year + " - " + auto.puertas + " Puertas - $" + auto.precio)
    });
}

function imprimirAutos(automoviles){

    if(busqueda1==0 && busqueda2==0 && busqueda3==0)
    busqueda =0;

    if(busqueda==1){
        if(automoviles.length>0){
            
            listaAutos.innerHTML = ``
            automoviles.forEach(auto => {
                listaAutos.innerHTML += ` <li class="autos"> ${auto.marca} -  ${auto.modelo} - ${auto.year} - $${auto.precio} </li>` ;
            }); 
        }else{listaAutos.innerHTML = ` <li class="error"> No hay resultados </li>`
    resultado = autos;
    }

    }else{
        autos.forEach(auto => {
            listaAutos.innerHTML += ` <li class="autos"> ${auto.marca} -  ${auto.modelo} - ${auto.year} - $${auto.precio} </li>` ;
        });
    }
}



// FILTRO

function filtrarMarca(marca){
        resultado = resultado.filter((auto) => auto.marca == marca)

        if(marca=="")busqueda1=0
        else
        busqueda1=1;
        busqueda =1

        imprimirAutos(resultado)
}

function filtrarYear(year){

   resultado = resultado.filter((auto) => auto.year == year)

   if(year=="")busqueda2=0
   else
   busqueda2=1;
    busqueda =1

   imprimirAutos(resultado)
}

function filtrarPrecioMax(precioMaximo){
    resultado = resultado.filter((auto) => auto.precio <= precioMaximo)

    imprimirAutos(resultado)

}

