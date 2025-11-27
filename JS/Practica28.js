let teclasPresionadas = [];  

function iniciar()
{
    document.addEventListener("keydown", presionarTecla);
    alert("Presiona cualquier tecla.");
}

function presionarTecla(event)
{
    let codigoTecla = event.keyCode;
    let nombreTecla = event.key;

    // Registrar tecla en el arreglo
    teclasPresionadas.push({ nombre: nombreTecla, codigo: codigoTecla });

    // Actualizar la lista en pantalla
    actualizarLista();
}

function actualizarLista()
{
    let resultado = document.getElementById("listaTeclas");

    // Limpiar lista
    resultado.innerHTML = "";

    for (let i = 0; i < teclasPresionadas.length; i++)
    {
        let nuevoElemento = document.createElement("li");
        let texto = document.createTextNode("Tecla: " + teclasPresionadas[i].nombre + " | Código: " + teclasPresionadas[i].codigo
        );

        nuevoElemento.appendChild(texto);
        resultado.appendChild(nuevoElemento);
    }
}

let boton = document.getElementById("btnMostrar");
boton.addEventListener("click", iniciar, false);
