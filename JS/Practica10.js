function validacionCamposFormulario()
{
            let errores = [];

            let nombre = document.getElementById("nombre").value.trim();
            let edad = document.getElementById("edad").value.trim();
            let telefono = document.getElementById("telefono").value.trim();
            let calle = document.getElementById("calle").value.trim();
            let numInterior = document.getElementById("numInterior").value.trim();
            let numExterior = document.getElementById("numExterior").value.trim();
            let semestre = document.getElementById("semestre").value.trim();
            let materia = document.getElementById("materia").value.trim();
            let porcentajeBeca = document.getElementById("porcentajeBeca").value.trim();



    if (nombre === "") errores.push("Nombre");

    if (telefono.length !== 10 || isNaN(telefono)) {
        errores.push("Teléfono");
    }

    if (edad === "" || isNaN(edad) || Number(edad) <= 18) {
        errores.push("Edad");
    }

    if (calle.length > 20 || calle === "") {
        errores.push("Calle");
    }

    if (numInterior === "" || isNaN(numInterior)) {
        errores.push("Número Interior");
    }

    if (numExterior !== "" && isNaN(numExterior)) {
        errores.push("Número Exterior");
    }

    if (semestre.length !== 1 || isNaN(semestre)) {
        errores.push("Semestre");
    }

    if (materia === "" || !isNaN(materia)) {
        errores.push("Materia");
    }


    if (porcentaje === "" || isNaN(porcentaje) || porcentaje <= 0 || porcentaje >= 100) {
        errores.push("Porcentaje de Beca");
    }

    if (errores.length > 0) {
        alert("Campos incorrectos: " + errores.join(", "));
        return; 
    }

    let porc = Number(porcentaje);


    let descuento = (porc / 10) * 700;

    alert("El descuento aplicado es: $" + descuento);
}