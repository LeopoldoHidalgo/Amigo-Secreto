// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const imputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){

    if (!imputAmigo.value){
        alert("Debes ingresar un Nombre")
    }
    listaAmigos.push(imputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${imputAmigo.value}</li>`;

    amigo.value = ""
}

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigosecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigosecreto}</li>`;
}

    