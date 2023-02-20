//arreglo con las respuestas correctas
let correcta= 1;
let incorrecta=2;
//arreglo donde se guardan las respuestas del usuario
let opcion_elegida;
let label;
let opcion;
var i=0;

let cantidad_correctas=0;
let cantidad_incorrectas=0;

var total=0;
var valor=0;
var contador=0;
//funcion que toma el num de pregunta y el input elegido de esa pregunta

function pregunta2(){
    location.href="index.html";
}

function respuesta(seleccionada){
    //Guardo la respuesta elegida
    opcion_elegida= seleccionada.value;
    label= seleccionada;

    id="p" + 0;

    labels = document.getElementById(id).childNodes;
    labels[1].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
    document.getElementById("valores").innerHTML ="";
}


function evaluar(){
    if(i===1){
        pregunta2();
    } else {
        respuestas=label;
        if(correcta==opcion_elegida){
            cantidad_correctas++
            respuestas.parentNode.style.backgroundColor="rgb(0, 255, 149)";
            valores.style.color="rgb(0, 255, 149)"
            document.getElementById("pregunta1").innerHTML ="Siguiente";
            document.getElementById("valores").innerHTML ="Correcto";
            i++
        }

        if(incorrecta==opcion_elegida){
           respuestas.parentNode.style.backgroundColor="#ff0019";
           valores.style.color="#ff0019"
           document.getElementById("valores").innerHTML ="Incorrecto";
           
        } 
        }
    }
        


