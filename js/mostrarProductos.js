import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(id,image,nom,precio,trash){
    const producto = document.createElement("li");
    producto.className="product"
    producto.innerHTML=`<div class="product" data-name="${id}">
        <img  src="${image}" alt="">
        <h3>${nom}</h3>
        <div class="precio-trash">
        <p id="precio"> ${precio}</p>
        <img id="trash" src="${trash}" alt="">
        </div>
        </div>`;

        return producto;


}

async function listarProductos (){
    const listaAPI = await conexionAPI.listaProductos()

    listaAPI.forEach(producto =>lista.appendChild(crearCard(producto.id,producto.image,producto.nom,producto.precio,producto.trash)) 
        
    );
}
listarProductos()