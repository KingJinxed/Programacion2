function usuarioAtendido()
{
        let listaDeEspera = ["Alfonso","Wildesito" ,"Leonardo" ,"Tamayo" ,"Erik" ,"Luis" ,"Obed" ,"victoria" ,"Fernando" ,"Lili" ,"Mich" ,"Oscar" ,"Liam" ,"Hugo" ,"Marco"];
        let listaUsuariosAtendidos= [];

        let moverNombreUsuario = listaDeEspera.unshift(listaUsuariosAtendidos);


    for(let i = 0; i <= listaDeEspera.length; i++)
    {
        if(listaDeEspera)
        {
            listaUsuariosAtendidos.push(listaDeEspera[i])
            let ultimosAtendidos = listaUsuariosAtendidos.slice(10,14);
            alert("Los ultimos 5 usuarios atendidos fueron: " + ultimosAtendidos);
        }
    }
}