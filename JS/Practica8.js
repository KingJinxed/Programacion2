function validarCamposNulos()
{
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    
    if (nombre === "" || apellidos === "" || correo === "" || telefono === "") 
        {
            alert("Por favor llene todos los campos.");
        } 
        else 
            {
                alert("Formulario enviado correctamente");
            }
}