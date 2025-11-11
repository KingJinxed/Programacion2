function listaDeEspera()
{
    let personasEspera = ["Alfonso","Wildesito" ,"Leonardo" ,"Tamayo" ,"Erik" ,"Luis" ,"Obed" ,"victoria" ,"Fernando" ,"Lili" ,"Mich" ,"Oscar" ,"Liam" ,"Hugo" ,"Marco"];
    let nombre = prompt("¿Cuál es tu nombre?");

    // Buscar posición con indexOf
    let posicion = personasEspera.indexOf(nombre);

    if (posicion !== -1) 
    {
        alert("Tu posición es: " + (posicion + 1));
    } 
    else 
    {
        alert("No estás en la lista.");
    }
}