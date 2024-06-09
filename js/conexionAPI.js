async function listaProductos(){
    const conexion = await fetch ("http://localhost:3001/productos");
    
    const conexionConvertida = conexion.json();

   // console.log(conexionConvertida);
    return conexionConvertida

}

async function enviarProducto(id,image,nom,precio,trash){
    const conexion = await fetch ("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            id:id,
            image:image,
            nom:nom,
            precio:precio,
            trash:trash
        })
    })
    const conexionConvertida= conexion.json();

    return conexionConvertida;
}

export const conexionAPI={
    listaProductos,enviarProducto
}
//listaProductos()