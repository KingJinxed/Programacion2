function mostrarDatos() {
    let mensaje = "";

    const nombre = document.getElementsByName("nombre")[0];
    const email = document.getElementsByName("email")[0];
    const ciudad = document.getElementsByName("ciudad")[0];

    mensaje += `El valor del input ${nombre.name} es ${nombre.value}\n`;
    mensaje += `El valor del input ${email.name} es ${email.value}\n`;
    mensaje += `El valor del select ${ciudad.name} es ${ciudad.value}\n`;

    const hobbies = document.getElementsByName("hobbies");
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            mensaje += `El valor del checkbox ${hobbies[i].name} es ${hobbies[i].value}\n`;
        }
    }

    alert(mensaje);
}
