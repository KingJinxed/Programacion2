function cambiarimagen()
{
    let imagenes = ["..//IMG/MONKY1.jpg", "..//IMG/MONKY2.jpg", "..//IMG/MONKY3.jpg" ,"..//IMG/JINXYYYYY.jpg"];
    let contador = 0;
    let i = 0;
        contador++;
        if (contador === 3)
        {
            contador = 0;
            imgElement.setAttribute("src", imagenes[contador]);
        }
        else
        {
            imgElement.setAttribute("src", imagenes[contador]);
        }
    let imgElement = document.getElementById("imagen");
    imgElement.src = imagenes[contador]; 
    }