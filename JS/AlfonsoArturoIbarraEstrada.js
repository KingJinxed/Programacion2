function RestockInventario()
{
    let inventario = ["Limpiador", "Jabon liquido", "Escoba", "Trapeador", "Recogedor", "Bolsas", "Cepillo", "Jabon polvo"];

    for(let i= 0; i < productos; i++)
    {
        let producto = prompt("Ingrese el nombre del producto: ");
        while(!inventario.includes(producto))
        {
            producto = prompt("Producto no encontrado. Ingrese un nombre de producto valido: ");
        }
        
        let cantidad = parseInt(prompt("Ingrese la cantidad disponible del producto (0-100): "));
        while(cantidad < 0 || cantidad > 100 || isNaN(cantidad))
        {
            cantidad = parseInt(prompt("Cantidad invalida. Ingrese una cantidad entre 0 y 100: "));
        }

        if(cantidad === 0)
        {
            alert("El prodcuto esta agotado")
        }
        if(cantidad <= 20)
        {
            alert("El producto esta por agotarse")
        }
        if(cantidad === 100)
        {
            alert("El producto esta completamente surtido")
        }
        alert("El producto " + producto + " esta surtido.");
    }
}

function NuevaFuncion()
{
    //permitir al usuario agregar un nuevo producto al inventario 
    let inventario = ["Limpiador", "Jabon liquido", "Escoba", "Trapeador", "Recogedor", "Bolsas", "Cepillo", "Jabon polvo"];
    for(let i=0; i < masProductos; i++)
    {
        let nuevoProducto = prompt("Ingrese el nombre del nuevo producto a agregar al inventario: ");
        while(inventario.includes(nuevoProducto))
        {
            nuevoProducto = prompt("El producto ya existe en el inventario. Ingrese un nombre de producto diferente: ");
        }

        inventario.push(nuevoProducto);
        let finalizar = prompt("Escribe 'Fin' para terminar");
        if (finalizar === "Fin") 
        {
            break;
        }
        let productos = inventario.map(x => x.prod).join(", ");
        alert("Registros completados:\n" + productos.join("\n"));
    }
}

function OrdenarInventario()
{
    let inventario = ["Limpiador", "Jabon liquido", "Escoba", "Trapeador", "Recogedor", "Bolsas", "Cepillo", "Jabon polvo"];
    let casoOrdenamiento = prompt("Ingrese el caso de ordenamiento (reversa, mitad, intercalado, paralelo): ");

    switch(casoOrdenamiento)
    {
        case "reversa":
            inventario.reverse();
            alert("Inventario en orden reversa: " + inventario.join(", "));
            break;

        case "mitad":
            inventario.slice(0, inventario.length / 2);
            alert("Inventario en orden mitad: " + inventario.join(", "));
            break;

        case "intercalado":
            let intercalado = [];
            for (let i = 0; i < inventario.length / 2; i++) 
            {
                intercalado.push(inventario[i]);
                intercalado.push(inventario[i + inventario.length / 2]);
                alert("Inventario en orden intercalado: " + intercalado.join(", "));
            }
            break;

        case "paralelo":
            break;

        default:
            alert("Opción incorrecta, intenta otra vez, elige entre reversa, mitad, intercalado o paralelo.");
            break;
    }
}