//ids: {amigo} {listaAmigos} {resultado} 
var amigoJS = document.getElementById('amigo');

var arrAmigosJS=[];

var listaAmigosJS=document.getElementById('listaAmigos');

var mostrarResultado=document.getElementById('resultado');


function sortearAmigo(){
    //primero evaluo si esta vacio el array
    if (arrAmigosJS.length===0){
        alert('lista vacia');
    } else
    {
        //como no esta vacio entonces genero numero aleatorio
        let n = Math.floor(Math.random() * arrAmigosJS.length);
        //muestro por consola a ver si funciona
        console.log(n); 

        mostrarResultado.innerHTML=`<li>EL AMIGO SECRETO ES: '${arrAmigosJS[n]}' </li>`;

    }
  
}

//funcion para actualizar la lista de amigos y mostrarlo

function mostrarLista(){
    listaAmigosJS.innerHTML=""; //limpio la lista para evitar duplicados, ya que al usar esta variable el ultimo amigo almacenado volvera a mostrarse.
    for(let i=0;i<arrAmigosJS.length;i++){
        listaAmigosJS.innerHTML+=`<li>${arrAmigosJS[i]}</li>`; //agrego cada amigo como un elemento <li>, ademas voy manejando por contador
    }
}

//funcion para agregar amigo
function agregarAmigo(){
    if (amigoJS.value===""){
        alert("Por favor, inserte un nombre.");

    } else {
        arrAmigosJS.push(amigoJS.value);
        console.log('amigo agregado');
        console.log(arrAmigosJS);
        amigoJS.value="";
        mostrarLista();

    }
}

