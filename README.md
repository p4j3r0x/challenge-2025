RESUMEN DEL PROYECTO
    Esta aplicación web permite ingresar nombres de amigos en un campo de texto, almacenarlos en un arreglo, mostrarlos en una lista ordenada y finalmente sortear uno aleatoriamente como "amigo secreto".

ESTRUCTURAS Y ELEMENTOS USADOS EN JS
-Variables que referencian elementos HTML:
    --amigoJS: referencia al input donde se ingresa el nombre del amigo (id="amigo").
    --ArrAmigosJS: arreglo vacio donde se almacenan los nombres agregados.
    --listaAmigosJS: referencia al contenedor de la lista ordenada (<ol>) que muestra los amigos (id="listaAmigos").
    --mostrarResultado: referencia al contedor donde se muestra el resultado del sorteo (id="resultado").

FUNCIONES UTILIZADAS
-agregarAmigo(): 
    Valida que el campo no este vacio. Si es valido agrega el nombre al arreglo arrAmigoJS con .push(). Limpia el campo de entrada (amigoJS.value=""). Llama a mostrarLista() para actualizar la visualizacion de la lista.
-mostrarLista(): 
    Limpia el contenido HTML de la lista con innerHTML="" para evitar duplicados al actualizar. Recorre el arreglo arrAmigoJS con un ciclo for y crea un elemento <li> para cada amigo, agregandolos dinamicamente a la lista ordenada.
-sortearAmigo(): 
    Valida que el arreglo no este vacio y si lo esta entonces muestra una alerta. Si hay amigos entonces genera un indice aleatorio (que luego utilizamos para acceder al arreglo y mostrar en pantalla el amigo secreto) con la variable reservada let n, aqui se utiliza marth.random() que genera un decimal del 0 al 1, pero este a su vez se multiplica por la longitud del arreglo para quede en un numero valido, y finalmente se utiliza math.floor para que se obtenga un indice valido. Finalmente se actualiza el contenido del elemento con id resultado para mostrar el nombre sorteado dentro de una etiqueta <li>.

CAMBIO ÚNICO EN EL REPOSITORIO OTORGADO
    Se reemplazo la etiqueta <ul id="listaAmigos"> por una etiqueta <ol>, esto para que se enumeren los amigos cargados a la lista.


Gracias por tomarse el tiempo en leer :)