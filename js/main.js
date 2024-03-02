
let puntajeJugador = 0;

let puntajeMaquina= 0;

let eleccion;

let eleccionValida;

let finDelJuego;


console.log(".........................................................") 
console.log(".........................................................") 
console.log(".........................................................") 
console.log(".........................................................") 
console.log(".........................................................") 


do {

    /* .................Eleccion Valida?................... */

    do{
        eleccion = prompt("Elija piedra, papel o tijera")

        if (eleccion == "piedra" || eleccion == "papel" || eleccion == "tijera") 
        {
            eleccionValida =1;
        }
        else{
            eleccionValida =0;
            console.log("Palabra invalida, elija: piedra, papel o tijera") 
        }

    }while(eleccionValida == 0 ); 




    /* .................Eleccion Maquina................... */

    let eleccionMaquina = parseInt(Math.random()*30);

    if(eleccionMaquina <=10 ){
        eleccionMaquina="piedra";
    }

    if(eleccionMaquina  > 10 && eleccionMaquina <= 20){
        eleccionMaquina="papel";
    }

    if(eleccionMaquina  > 20 && eleccionMaquina <= 30){
        eleccionMaquina="tijera";
    }


    /* .................Muestreo................... */

    console.log("usted a elijio ---------> " + eleccion);

    console.log(" vs " );

    console.log("la maquina elijio ------> " + eleccionMaquina);






    /* .................Decision Ganador................... */



    if (eleccion == "piedra") {

        if (eleccionMaquina=="piedra") {
            empate()
        }

        if (eleccionMaquina=="papel") {
            perdiste()
        }

        if (eleccionMaquina=="tijera") {
            ganaste()
        }
    } 

    if (eleccion == "papel") {

        if (eleccionMaquina=="piedra") {
            ganaste()
        }

        if (eleccionMaquina=="papel") {
            empate()
        }

        if (eleccionMaquina=="tijera") {
            perdiste()
        }
    }

    if (eleccion == "tijera") {

        if (eleccionMaquina=="piedra") {
            perdiste()
        }

        if (eleccionMaquina=="papel") {
            ganaste()
        }

        if (eleccionMaquina=="tijera") {
            empate()
        }
    }

    /* ................. Resultado................... */

    function empate(){
        console.log("---EMPATARON!!!---")
    }

    function perdiste(){

        console.log("---PERDISTE!!!---")
        puntajeMaquina++;
    }

    function ganaste(){
        console.log("---GANASTE!!!---")
        puntajeJugador++;
    }

    console.log("Tu puntaje  es -------------------->" + puntajeJugador)
    console.log("El puntaje de la maquina es ------->" + puntajeMaquina)

    if (puntajeJugador == 3) {
        console.log(".........................................................")
        console.log("GANASTE EL JUEGO") 
        console.log(".........................................................")  
        finDelJuego = 1;
        
    }else if (puntajeMaquina == 3) {

        console.log(".........................................................")
        console.log("PERDISTE EL JUEGO") 
        console.log(".........................................................") 
        finDelJuego = 1;

    }else{
        console.log(".........................................................")
        console.log("NUEVA RONDA") 
        console.log(".........................................................")
        finDelJuego = 0;
    }

}while( finDelJuego == 0 );

