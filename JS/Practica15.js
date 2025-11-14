function registrarDonador()
{
    let nombreDon = [];
    let tipoDeSangre = ["O+", "O-", "A+", "B-","AB"];


    let conteoTipos = 
    {             
        "O+": 0,
        "O-": 0,
        "A+": 0,
        "B-": 0,
        "AB": 0
    };

    for(let i = 0; i < 12; i++)
    {
        let nombre =  prompt("Ingresa tu nombre");

        while(nombre === "" || nombre.length < 6 || nombre.length > 15)
        {
            nombre = prompt("Nombre invalido, intenta otra vez")
        }

        let sangre = prompt("Ingresa tu tipo de sangre O+, O-, A+, B-,AB");

        while (!tipoDeSangre.includes(sangre) || conteoTipos[sangre] >= 5)
        {
        if (!tipoDeSangre.includes(sangre)) 
        {
        tipo = prompt("Tipo inválido. Ingresa un tipo válido (O+, O-, A+, B-, AB):");
        } 
        else 
        {
            tipo = prompt("Ese tipo ya alcanzó el límite de 5 registros.\nIngresa un tipo diferente:");
        }
        }

        conteoTipos[sangre]++;
        //nombreDon.push(`Nombre: ${nombre} - Tipo: ${tipo}`);
        nombreDon.push("Nombre: " + nombre, "Tipo: " + sangre);

        if (conteoTipos[sangre] === 5) 
        {
            alert(`El tipo de sangre ${sangre} ya alcanzó su límite de 5 donadores.`);
        }
     }
        let lista = "Donadores registrados:" + donadores.join("\n");
        alert(lista);
    }