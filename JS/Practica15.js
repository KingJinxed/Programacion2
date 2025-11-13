function registrarDonador()
{
    let nombreDon = [];
    let tipoDeSangre = ["O+", "O-", "A+", "B-","AB"];

    for(let i = 0; i < 12; i++)
    {
        let nombre =  prompt("Ingresa tu nombre")

        while(isNaN(nombreDon) || nombre < 6 || nombreDon > 15)
        {
            nombre = prompt("Ingresa un nombre valido: ")
        }
        nombreDon.push(nombre);
    }

    for(let j = 0; j < 12; j++)
    {
        let sangre = prompt("Ingresa tu tipo de sangre")
        while(isNaN(tipoDeSangre) || sangre.includes("O+", "O-", "A+", "B-","AB"));
    }
} 