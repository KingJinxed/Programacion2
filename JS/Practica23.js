let paises = ["Mexico", "Colombia", "Brasil", "Argentina", "Guatemala", "Chile"];

function mostrarPaises()
{
    let lista = document.createElement("ol");

    for (let i = 0; i < paises.length; i++) 
    {

        let item = document.createElement("li");
        item.textContent = paises[i];

        if (paises[i].length > 7) 
        {
            item.style.color = "red";
        }

        lista.appendChild(item);
    }
    document.body.appendChild(lista);
}