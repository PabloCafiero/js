let marcaAnterior = "ningunamarca";
let yearAnterior = 0;
let marca;
let condicion;
let resultado = autos;

let marcaFiltrada =0;
let yearFiltrada =0;

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

console.log("asd")

const marcaForm = document.querySelector("#marca-form");
const marcaInput = document.querySelector("#marca-input");

marcaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    marca = marcaInput.value.toUpperCase();
    filtrarMarca(marca);
});




const yearForm = document.querySelector("#year-form");
const yearInput = document.querySelector("#year-input");

yearForm.addEventListener("submit", (e) => {
    e.preventDefault();
/*     console.log(yearInput.value) */
    filtrarYear(yearInput.value);
});




const priceMaxForm = document.querySelector("#pricemax-form");
const priceMaxInput = document.querySelector("#pricemax-input");

priceMaxForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filtrarPrecioMax(priceMaxInput.value);
});


// INGRESO DE VARIABLES
/* do {
    marca = prompt("Ingresar Marca").toUpperCase();
    if(marca == "AUDI" || marca == "BMW" || marca == "MERCEDEZ BENZ" || marca == "FORD" || marca == "DODGE" || marca == "CHEVROLET"){
    condicion = 1;
    console.log("Marca: " + marca);
    }else{
    condicion = 0; 
    console.log("No existen autos de esa marca")
    }
}while(condicion == 0);
filtrarMarca();

let year =   Number(prompt("Ingresar Año"))
console.log("-----------------------------------------------------");
console.log("Marca: " + marca + " Año: " + year);
filtrarYear();

let precioMaximo = Number(prompt("Ingrese el precio Máximo"))
console.log("-----------------------------------------------------");
console.log("Marca: " + marca + " Año: " + year + "Precio Máximo: " + precioMaximo);
filtrarPrecio();
 */


// MUESTREO

function mostrarAutos(automoviles){

    automoviles.forEach(auto => {
        console.log(auto.marca + " - " + auto.modelo + " - " + auto.year + " - " + auto.puertas + " Puertas - $" + auto.precio)
    });
}

// FILTRO

function filtrarMarca(marca){

        if(marcaAnterior != marca && yearFiltrada == 0){
            resultado = autos.filter((auto) => auto.marca == marca)
            marcaAnterior = marca;
            marcaFiltrada = 1;
        }else{
            resultado = resultado.filter((auto) => auto.marca == marca)
        }


        if(resultado.length>0){
            mostrarAutos(resultado) 
        }else
        { console.log("No hay resultados");}
}

function filtrarYear(year){

    console.log(marcaFiltrada)

    if(yearAnterior != year && marcaFiltrada == 0){
        resultado = autos.filter((auto) => auto.year == year)
        yearAnterior = year;
        yearFiltrada = 1;
    }else{
        resultado = resultado.filter((auto) => auto.year == year)
    }

/*     resultado = resultado.filter((auto) => auto.year == year)
 */
    if(resultado.length>0){
        mostrarAutos(resultado) 
    }else
    {console.log("No hay resultados");}
}

function filtrarPrecioMax(precioMaximo){
    resultado = resultado.filter((auto) => auto.precio <= precioMaximo)
    if(resultado.length>0){
        mostrarAutos(resultado) 
    }else
    { console.log("No hay resultados");}
}

