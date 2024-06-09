import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");


async function crearProducto(evento){

    evento.preventDefault();

    const id= document.querySelector("[data-id]").value;
    const image= document.querySelector("[data-image]").value;
    const nom= document.querySelector("[data-nom]").value;
    const precio= document.querySelector("[data-precio]").value;

    await conexionAPI.enviarProducto(id,image,nom,precio);

    window.location.href="../pag3.html"
}

formulario.addEventListener("submit",evento => crearProducto(evento));