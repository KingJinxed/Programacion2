function btnUno()
{
    //10,40,30,80,50,120

    let numInicio = 10;
    let suma = 30;
    let resta = 10;
    let contador = 1;
    let resultado = "";

    let numIngresado = parseInt(prompt("Cuantas veces quieres iterar la secuencia? "))

    while (contador <= numIngresado)
    {
        resultado += numInicio  + (contador < numIngresado ? ", " : "");
        numInicio += suma;
        suma += 10;
        contador++;
        alert("La secuencia es: " + resultado);
    }
}

function btnDos()
{
    let palabra = prompt("Escribe una palabra")
    alert("Numero de caracteres" + palabra.length)
    while(palabra.length % 2 !== 0)
    {
        alert("El numero de caracteres de tu palabra es impar");
    }
    alert("El numero de caracteres de tu palabra es par")
}

function btnTres()
{
    //calcular los años actuales a la fecha de hoy pidiendo dia mes y año de nacimiento
    prompt("Ingresa tu día, mes y año de nacimiento: ")

}

function calcBecaForm()
{
    let condiciones = [];
    let semestre = document.getElementById("semestre").value.trim();
    let beca = document.getElementById("beca").value.trim();
    let calificacion = document.getElementById("calificacion").value.trim();


    if (semestre.length || 1 || 2 || 3 || 4 || isNaN(semestre))
    {
        condiciones.push("semestre");
        if(beca => 80)
        {
           calificacion > 85;
        }
    }
    else (semestre.length || 5 || 6 || 7 || 8 || isNaN(semestre)) 
    {

    }

    let porc = Number(porcentaje);
    let descuento = (porc / 10) * 700;
    alert("El descuento aplicado es: $" + descuento);
}