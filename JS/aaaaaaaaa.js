function divDinamicos()
{
    //hijos sera de color rojo y sera especificado por el usuario
    let divHijo = document.createElement("div");
    divHijo.style.border = "2px solid red";
    divHijo.style.padding = "8px";
    divHijo.style.margin = "8px";
    let promtReshi = prompt("Cuantos hijos quieres dibujar?");
    let numHijos = parseInt(promtReshi);


    
    //El padre sera solo un DIV de  
    const divPadre = document.createElement("div");
    divPadre.style.border = "2px solid black";
    divPadre.style.padding = "8px";
    divPadre.style.margin = "8px"; 
    document.body.appendChild(divPadre);
    for(let i = 0; i < numHijos; i++)
    {
        let nuevoDivHijo = divHijo.cloneNode(true);
        divPadre.appendChild(nuevoDivHijo);
    }


    //nieto sera de color azul y sera especificado por el usuario
    let divNieto = document.createElement("div");
    divNieto.style.border = "2px solid blue";
    divNieto.style.padding = "8px";
    divNieto.style.margin = "8px";
    let promtResnie = prompt("Cuantos nietos quieres dibujar?");
    let numNietos = parseInt(promtResnie);
    let hijos = divPadre.children;

    for (let i = 0; i < hijos.length; i++) 
    {
        for (let j = 0; j < numNietos; j++) 
        {
            let nuevoDivNieto = divNieto.cloneNode(true);
            hijos[i].appendChild(nuevoDivNieto);
        }
    }
    //El texto tambien puede ser solicitado por el usuario o puede ser nulo y por default
    let textoHijos = prompt("Que texto quieres en los hijos?");
    for (let i = 0; i < hijos.length; i++)
    {
        hijos[i].innerText = textoHijos;
    }
    let textoNietos = prompt("Que texto quieres en los nietos?");
    for (let i = 0; i < hijos.length; i++)
    {
        let nietos = hijos[i].children;
        for (let j = 0; j < nietos.length; j++)
        {
            nietos[j].innerText = textoNietos;
        }
    }
}