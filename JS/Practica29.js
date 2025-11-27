let teclasPresionadas = [];

function iniciar() 
{
    document.addEventListener("keydown", presionarTecla);
    document.addEventListener("keyup", soltarTecla);
}

function presionarTecla(event)
{
    let codigoTecla = event.keyCode;
    let nombreTecla = event.key;

    let existe = false;
    for (let i = 0; i < teclasPresionadas.length; i++) 
    {
        if (teclasPresionadas[i].codigo === codigoTecla) 
        {
            existe = true;
            break;
        }
    }

    if (!existe) 
    {
        teclasPresionadas.push({ nombre: nombreTecla, codigo: codigoTecla });
    }

    actualizarLista();
}

function soltarTecla(event)
{
    let codigoTecla = event.keyCode;

    for (let i = 0; i < teclasPresionadas.length; i++) 
    {
        if (teclasPresionadas[i].codigo === codigoTecla) 
        {
            teclasPresionadas.splice(i, 5);
            break;
        }
    }

    actualizarLista();
}

function actualizarLista()
{
    let lista = document.getElementById("listaTeclas");
    lista.innerHTML = "";

    for (let i = 0; i < teclasPresionadas.length; i++)
    {
        let li = document.createElement("li");
        let texto = document.createTextNode( "Tecla: " + teclasPresionadas[i].nombre + " | Código: " + teclasPresionadas[i].codigo
        );

        li.appendChild(texto);
        lista.appendChild(li);
    }
}