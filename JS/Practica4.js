function validarEdad()
{
    nacimiento = parseInt(prompt("Dame tu año de nacimiento"))
    fecha = parseInt(prompt("En que año vives?"))
    ope = nacimiento - fecha 
}



while(nacimiento > 21)
{
    alert("Bienvenido al sitio");
    if(nacimiento < 21)
    {
        alert("Podras entrar al sitio en " + ope + " años ");
    }
}