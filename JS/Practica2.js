function mostrarNombreNVeces()
{
    let nom = prompt("¿Cual es tu nombre?")
    let numV = parseInt(prompt("¿Cuantas veces quieres que se repita?"))
    
    let resultado = "";
    for( let i=0; i<numV; i++)
    {
        resultado += nom + "\n"
    }
    alert(resultado)
}