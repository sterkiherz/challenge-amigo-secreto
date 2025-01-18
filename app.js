//Código de Amigo Secreto

//Empiezo declarando unas variables-------------
let amigos = []; //la variable que contiene la lista con los nombres
let resultadoSorteo = [];

function normalizarTexto(texto) {
    //trim para eliminar espacios al inicio y final
    //.normalize("NFD") para descomponer los caracteres acentuados a su forma basica (á-->a)
    //uso replace(...) para eliminar marcas generadas por la normalizacion
    //esto es xq si se escribe un nombre sin acento y luego el mismo con acento, los contaba como 2 nombres distintos.
    return texto.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    //Si el usuario escribe Sofía, sofia o SOFÍA, todos serán normalizados a SOFIA
}

//Defino una funcion para añadir amigos al clickear el botón-----------------
    /*Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    * Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    * Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    * Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    */ 
function agregarAmigo() {
    //obtengo el valor ingresado
    //let nombreAmigo = document.getElementById('amigo').value;
    let nombreAmigo = normalizarTexto(document.getElementById('amigo').value); 
    //esto lo hago porque de la otra forma, si el usuario ingresaba 'Daniela' y 'daniela', la funcion los consideraba 2 nombres distintos. 
    
    //verifico que el valor ingresado no sea nulo
    if (nombreAmigo == '') {
        //si el usuario no escribio nada...
        alert('Por favor, ingrese un nombre!'); //funciona!
    } else {
        //si el usuarion ingresó un nombre... debo verificar que no se repita
        if (amigos.includes(nombreAmigo)) {
            alert('Ese nombre ya está en la lista, por favor ingrese otro.');
            //limpio la caja de nombres
            document.getElementById('amigo').value = '';
        } else {
            //si no está en la lista, lo agrego
            amigos.push(nombreAmigo);
            console.log(nombreAmigo);
            console.log(amigos);//funciona!
            //limpio la caja de nombres
            document.getElementById('amigo').value = '';

            //llamo a la funcion actualizarLista
            actualizarLista();
        }
    }
}

//Función para actualizar la lista de amigos-------------
/* Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
 * Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
 * Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
 * Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/
function actualizarLista() {
    //limpio el elemento <ul> para evitar duplicados
    let ulElemento = document.getElementById('listaAmigos');
    ulElemento.innerHTML = '';
    //genero un loop para recorrer el array e ir generando elementos <li>
        /*- con let i=0 se da un valor inicial para el loop. 'i' es una variable que contará la posicion en el array.
        con i=0 estoy indicando que se inicia en el index primero del array [0].
        - con i < values.length --> values.length me da el numero total de elementos en el array.
        entonces el loop seguirá funcionando hasta que se llegue al ultimo elemento, por ej, si i=3 --> 3<3 es falso, entonces se detiene el loop.
        esto es para no acceder a un index que no existe, generando un error.
        - el ultimo parametro es i++, que simplemente indica que se le suma 1 al contador 'i', entonces me voy moviendo en el array.*/
    for (let i=0; i < amigos.length; i++) { //amigos es el array
        //creo el <li>
        const liElemento = document.createElement('li');
        liElemento.textContent = amigos[i];
        //agrego los elementos a <ul>
        ulElemento.appendChild(liElemento);
    }
}

//Función para sortear los amigos
/*Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
 * Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
 * Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
 * Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
 * Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
*/
function sortearAmigo(){
    //limpio el elemento <ul> para evitar duplicados
    let ulElemento = document.getElementById('resultado');
    ulElemento.innerHTML = '';
    
    //comprobar que el array no está vacío...
    if (amigos.length == 0) {
        alerta('La lista está vacía. Por favor, ingresa más nombres.');
    }else{
        //si no está vacio, sortear un nombre...
        // Genero índice aleatorio
        let numeroGenerado = Math.floor(Math.random() * amigos.length); // amigos.length ya se ajusta dinámicamente
        let amigoSorteado = amigos[numeroGenerado];

        //como el elemento es un <ul> tengo que generar elementos <li>
        resultadoSorteo.push(amigoSorteado);
        for (let i=0; i < resultadoSorteo.length; i++) { //resultadoSorteo es el array
            //creo el <li>
            const liElemento = document.createElement('li');
            liElemento.textContent = amigos[i];
            //agrego los elementos a <ul>
            ulElemento.appendChild(liElemento);
            } 

        }

}