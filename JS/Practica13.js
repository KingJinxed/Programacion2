function usuarioAtendido()
{
        let listaDeEspera = ["Alfonso","Wildesito" ,"Leonardo" ,"Tamayo" ,"Erik" ,"Luis" ,"Obed" ,"victoria" ,"Fernando" ,"Lili" ,"Mich" ,"Oscar" ,"Liam" ,"Hugo" ,"Marco"];
        let listaUsuariosAtendidos= [];

        alert("Lista de espera: " + listaDeEspera);



    for(let i = 0; i < listaDeEspera.length; i++)
    {
        let moverNombreUsuario = listaDeEspera[i];
        listaUsuariosAtendidos.push(moverNombreUsuario); 
    }

        alert("Usuarios atendidos: " + listaUsuariosAtendidos);
        let ultimosAtendidos = listaUsuariosAtendidos.slice(-5);
        alert("Los últimos 5 usuarios atendidos fueron: " + ultimosAtendidos);
}