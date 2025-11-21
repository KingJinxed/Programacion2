// ...existing code...
function divDinamicos()
{
    const divPadre = document.createElement("div");
    divPadre.style.border = "2px solid black";
    divPadre.style.padding = "8px";
    divPadre.style.margin = "8px";
    document.body.appendChild(divPadre);

    const promtReshi = parseInt(prompt("¿Cuántos hijos quieres dibujar?"), 10) || 0;
    const promtResnie = parseInt(prompt("¿Cuántos nietos quieres dibujar por hijo?"), 10) || 0;

    const textoHijos = prompt("¿Qué texto quieres en los hijos?") || "";
    const textoNietos = prompt("¿Qué texto quieres en los nietos?") || "";

    for (let i = 0; i < promtReshi; i++) 
    {
        const divHijo = document.createElement("div");
        divHijo.style.border = "1px solid red";
        divHijo.style.margin = "6px";
        divHijo.style.padding = "6px";
        divHijo.innerText = textoHijos;
        divPadre.appendChild(divHijo);

        for (let j = 0; j < promtResnie; j++) 
        {
            const divNieto = document.createElement("div");
            divNieto.style.border = "1px solid blue";
            divNieto.style.margin = "4px";
            divNieto.style.padding = "4px";
            divNieto.innerText = textoNietos;
            divHijo.appendChild(divNieto);
        }
    }
}
// ...existing code...