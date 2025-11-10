function arregloPar()
{
    let arregloNum = [10,7,9,14,34,52,104,101,99,2];
    let arregloPar = [];


    for(let i = 0; i <= arregloNum.length; i++)
    {
        if(arregloNum [i] % 2 == 0)
        {
            arregloPar.push(arregloNum[i])
        }
    }
    alert("Arreglo inicial: " + arregloNum);
    alert("Arreglo nuevo: " + arregloPar);
}