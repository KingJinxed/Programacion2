function secuenciaCompleta()
{
    let inicio = 2;
    let suma = 4;
    let contador = 1;
    let resultado = "";

    while (contador <= 10)
    {
        resultado += inicio  + (contador < 10 ? ", " : "");
        inicio += suma;
        suma += 2;
        contador++;
        alert("La secuencia es: " + resultado);
    }
}
//2 6 12 20