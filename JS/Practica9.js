function validacionFormulario() 
{

            let errores = [];

            let nombre = document.getElementById("nombre").value.trim();
            let edad = document.getElementById("edad").value.trim();
            let telefono = document.getElementById("telefono").value.trim();
            let calle = document.getElementById("calle").value.trim();
            let numInterior = document.getElementById("numInterior").value.trim();
            let semestre = document.getElementById("semestre").value.trim();
            let materia = document.getElementById("materia").value.trim();


            if (nombre === "") errores.push("Nombre");

            if (edad === "" || isNaN(edad)) errores.push("Edad");

            if (telefono === "" || isNaN(telefono)) errores.push("Teléfono");

            if (calle === "") errores.push("Calle");

            if (numInterior === "" || isNaN(numInterior)) errores.push("Número Interior");

            if (semestre === "" || isNaN(semestre)) errores.push("Semestre");

            if (materia === "") errores.push("Materia");


            if (errores.length > 0) 
            {
                alert("Campos incorrectos: " + errores.join(", "));
            } 
            else 
            {
                alert("Formulario válido ");
            }
        }