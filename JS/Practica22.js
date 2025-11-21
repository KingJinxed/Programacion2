let contenedorLista = null;

function listaDinamica()
{
    if (!contenedorLista) 
    {
        contenedorLista = document.createElement("div");
        contenedorLista.id = "dynamicList";
        document.body.appendChild(contenedorLista);
    }
}

function agregarNuevoItemColor(color)
{
    listaDinamica();

    let nuevoItem = document.createElement("p");

    const campo = document.getElementsByName("nombre")[0];
    nuevoItem.textContent = campo.value;
    nuevoItem.style.color = color;

    contenedorLista.appendChild(nuevoItem);
}