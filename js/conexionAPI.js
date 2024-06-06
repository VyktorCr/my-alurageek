async function listaProductos(){
    const conexion = await fetch ("http://localhost:3001/productos");
    
    const conexionConvertida = conexion.json();

   // console.log(conexionConvertida);
    return conexionConvertida

}

async function crearProducto(id,image,precio,trash){
    const conexion = await fetch ("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            id:id,
            image:image,
            precio:precio,
            trash:trash
        })
    })
    const conexionConvertida= conexion.json();

    return conexionConvertida;
}

export const conexionAPI={
    listaProductos,crearProducto
}
//listaProductos()