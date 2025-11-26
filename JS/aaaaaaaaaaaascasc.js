    //cuando el usuario presiona una tecla se registra inmediatamente y obtiene el codigo y nombre de la tecla hacer una lista de las "teclas presionadas" 
    // y manetenerla actualizada en pantalla con cada teclada presionada
   
    let teclasPresionasdas = [];  
    function inciar()
    {
        document.addEventListener("keydown", presionarTecla);
        alert("Presiona cualquier tecla.");
    }
    
    function presionarTecla(event)
    {
        let codigoTecla = event.keyCode;
        let nombreTecla = event.key;
        let nuevoElemento = document.createElement("li");

        nuevoElemento.textContent = "Tecla: " + nombreTecla + "  Código: " + codigoTecla;
        alert("Tecla presionada: " + nombreTecla + "Código de la tecla: " + codigoTecla);
        teclasPresionasdas.push({ nombre: nombreTecla, codigo: codigoTecla });

        let listaTeclas = document.getElementById("listaDatos");
        listaTeclas.appendChild(nuevoElemento);
    }