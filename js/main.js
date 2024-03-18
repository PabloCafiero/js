
let marca
let condicion


// INGRESO DE VARIABLES
do {
    marca = prompt("Ingresar Marca")
    if(marca == "Audi" || marca == "BMW" || marca == "Mercedes Benz" || marca == "Mercedes Benz" || marca == "Mercedes Benz" || marca == "Ford" || marca == "Dodge"){
    condicion = 1;
    }else{
    condicion = 0; 
    console.log("ingrese una marca valida")
    }
} while(condicion == 0);

let year =   Number(prompt("Ingresar Año"))
let precioMinimo = Number(prompt("Ingrese el precio Mínimo"));
let precioMaximo = Number(prompt("Ingrese el precio Máximo"))



// MUESTREO

function mostrarAutos(automoviles){

    automoviles.forEach(auto => {
        console.log(auto.marca + " - " + auto.modelo + " - " + auto.year + " - " + auto.puertas + " Puertas - $" + auto.precio)
    });
}

// FILTRO

function filtrarAutos(){

    const resultado = autos.filter((auto) => auto.marca == marca).filter((auto) => auto.year == year).filter((auto) => auto.precio >= precioMinimo).filter((auto) => auto.precio <= precioMaximo);

    if(resultado.length>0){
        mostrarAutos(resultado) 
    }else
    { console.log("No hay resultados");}

}

filtrarAutos();