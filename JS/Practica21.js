function listaDinamicaColores()
{
    const colores = ["azul", "verde", "amarillo", "rosa", "cafe", "Dorado", "negro"];

    // Crear lista UL
    let lista = document.createElement("ul");

    // Recorrer colores
    for (let i = 0; i < colores.length; i++) 
    {
        // Crear ítem <li>
        let item = document.createElement("li");

        // Crear el nodo de texto
        let texto = document.createTextNode(colores[i]);

        // Meter el texto dentro del li
        item.appendChild(texto);

        // Agregar li a la lista
        lista.appendChild(item);
    }
    // Agregar la lista al body
    document.body.appendChild(lista);
}