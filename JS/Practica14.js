function gruposRevueltos()
{
    let calificaciones = [];

    for(let i = 0; i <= 20; i++)
    {
        let cal = parseInt(prompt("Ingresa la calificacion: " + 1))

        while(isNaN(cal) || cal < 0 || cal > 10)
        {
            cal = parseInt(prompt("Ingresa una calificacion valida: " + 1 ))
        }
        calificaciones.push(cal);
    }

    let suma1 = 0;
    for (let i = 0; i < 10; i++)
    {
        suma1 += calificaciones[i];
    }
    let promedio1 = suma1 / 10;


    let suma2 = 0;
    for (let i = 10; i < 20; i++) 
    {
        suma2 += calificaciones[i];
    }
    let promedio2 = suma2 / 10;

    alert
    (
        "Promedio del semestre 1: " + promedio1 +
        "Promedio del semestre 2: " + promedio2
    );
}
