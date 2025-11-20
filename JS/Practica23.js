//["Mexico", "Colombia", "Brasil", "Argentina", "Guatemala" "Chile"]
let paises = ["Mexico", "Colombia", "Brasil", "Argentina", "Guatemala", "Chile"];
function mostrarPaises()
{
    let mensaje = "<ol>";
    for (let i = 0; i < paises.length; i++) 
    {
        if (paises[i].length > 7) 
        {
            mensaje += `<li style="color: red;">${paises[i]}</li>`;
        } 
        else 
        {
            mensaje += `<li>${paises[i]}</li>`;
        }
}
//Realizar una  funcion que muestre y cree una lista ordenada en html de los paises utilizando appendchild
    mensaje += "</ol>";
    document.createElement("div").innerHTML = mensaje;
    document.body.innerHTML += mensaje;
}