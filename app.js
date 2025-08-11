// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres=[];
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    let nombre=document.getElementById("amigo").value.trim();

    // 2. Validar la entrada
    if (nombre==="") {
        alert("Inserta un nombre por favor.");
        return;
    }

    //Verificar si el nombre ya existe
    let nombreRepetido=nombres.some(n=>n.toLowerCase()===nombre.toLowerCase());

    if (nombreRepetido) {
        alert("Ese nombre ya fue ingresado.");
        return;
    }

    // 3. Actualizar el array de amigos
    nombres.push(nombre);

    // 4. Limpiar el campo de entrada
    document.getElementById("amigo").value="";

    // Mostrar la lista actualizada
    mostrarLista();
}

function mostrarLista() {
    // 1. Obtener el elemento <ul> donde se mostrará la lista
    let lista=document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente para evitar duplicados
    lista.innerHTML="";

    // 3. Recorrer el arreglo de nombres
    for (let i=0 ; i<nombres.length; i++) {
        // 4. Crear un nuevo <li> para cada nombre
        let item=document.createElement("li");
        item.textContent=nombres[i];

        // Agregar el li a la lista
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos en el arreglo
    if (nombres.length===0) {
        alert("No hay nombres en la lista. Agrega al menos uno.");
        return;
    }

    // 2. Generar un índice aleatorio
    let indice=Math.floor(Math.random()*nombres.length);

    //3. Obtener el nombre sorteado
    let nombreSorteado=nombres[indice]

    //4. Mostrar el resultado
    document.getElementById("resultado").innerHTML=(`El amigo secreto sorteado es: ${nombreSorteado}`);
}