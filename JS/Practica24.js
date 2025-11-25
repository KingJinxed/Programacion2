function cambiarimagen()
{
    let imagenes = ["..//IMG/MONKY1.jpg", "..//IMG/MONKY2.jpg", "..//IMG/MONKY3.jpg" ,"..//IMG/JINXYYYYY.jpg"];
    let contador = 0;

    let imgElement = document.getElementById("imagen");

    imgElement.src = imagenes[contador];
    contador++;

    if (contador >= imagenes.length) 
    {
        contador = 0;
    }

}