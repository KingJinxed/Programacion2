function validarEdad()
{
    let nacimiento = parseInt(prompt("Dame tu año de nacimiento"))
    let actualYear = parseInt(prompt("En que año vives?"))

    let edad = actualYear - nacimiento;

while(edad < 21)
{
    let faltan = 21 - edad;
    alert("Te faltan " + faltan + " años para entrar");

    actualYear = parseInt(prompt("En que año vives?"));
    edad = actualYear - nacimiento;
}
    alert("Bienvenido al sitio");
}