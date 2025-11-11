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
}
