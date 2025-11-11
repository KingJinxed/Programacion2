function usuarioAtendido()
{
        let listaDeEspera = ["Alfonso","Wildesito" ,"Leonardo" ,"Tamayo" ,"Erik" ,"Luis" ,"Obed" ,"victoria" ,"Fernando" ,"Lili" ,"Mich" ,"Oscar" ,"Liam" ,"Hugo" ,"Marco"];
        let listaUsuariosAtendidos= [];

        let moverNombreUsuario = listaDeEspera.unshift(listaUsuariosAtendidos);


    for(let i = 1; i <= listaDeEspera.length; i++)
    {
       if(listaDeEspera)
       {
            alert("Lista de atendidos: " + moverNombreUsuario)
            listaUsuariosAtendidos.unshift(listaDeEspera[i])
            let ultimosAtendidos = listaUsuariosAtendidos.slice(10,15)
            alert("Los ultimos 5 usuarios atendidos fueron: " + ultimosAtendidos);
       }
    }
}