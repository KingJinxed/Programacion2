function formNuevoRegistro() {

    let registroUsuarios = []; 
    let correosGerencial = [];
    let correosPersonal = [];
    let correosAdmin = [];

    while (true) {

        let nombre = document.getElementById("nombre").value;
        let usuario = document.getElementById("usuario").value;
        let correo = document.getElementById("correo").value;
        let contra = document.getElementById("contra").value;
        let tipo = document.getElementById("tipoCuenta").value;

        // VALIDACIONES
        if (nombre.length === 0 || usuario.length === 0 || correo.length === 0 || contra.length === 0 || tipo.length === 0) {
            alert("Ningún campo puede estar vacío");
            return;
        }

        if (contra.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }

        // Tipos válidos separados con split
        let tiposValidos = "Gerencial,Personal,Administrador".split(",");
        if (!tiposValidos.includes(tipo)) {
            alert("Tipo de cuenta inválido");
            return;
        }

        // VALIDAR correo único por tipo
        if (tipo === "Gerencial") {
            if (correosGerencial.includes(correo)) {
                alert("Ese correo YA existe en cuentas Gerenciales");
                return;
            }
            correosGerencial.push(correo);

            // Regla especial: Gerencial también es Administrador
            if (!correosAdmin.includes(correo)) {
                correosAdmin.push(correo);
            }

        } else if (tipo === "Personal") {
            if (correosPersonal.includes(correo)) {
                alert("Ese correo YA existe en cuentas Personales");
                return;
            }
            correosPersonal.push(correo);

        } else if (tipo === "Administrador") {
            if (correosAdmin.includes(correo)) {
                alert("Ese correo YA existe en cuentas Administrador");
                return;
            }
            correosAdmin.push(correo);
        }

        // Guardar el registro
        registroUsuarios.push({
            nombre: nombre,
            usuario: usuario,
            correo: correo,
            contra: contra,
            tipo: tipo
        });

        let continuar = prompt("Escribe 'Fin' para terminar, o cualquier cosa para registrar otro");
        if (continuar === "Fin") {
            break;
        }
    }


    // MOSTRAR TODOS LOS NOMBRES REGISTRADOS
    let nombres = registroUsuarios.map(x => x.nombre).join(", ");
    alert("Registros completados:\n" + nombres);
}
