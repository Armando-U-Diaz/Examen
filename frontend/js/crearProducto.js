const formularioHTML = document.getElementById("formulario");
const inputNameHTML = document.getElementById("entrada-nombre");
const inputPrecioHTML = document.getElementById("entrada-precio");
var estadoFormulario = true;
var URL_ACTUALIZAR = URL_BACKEND;

async function manejarEntradasDeDatos(evt) {
    evt.preventDefault();
    const producto = inputNameHTML.value;
    const precios = inputPrecioHTML.value;

    if (estadoFormulario) {
        fetch(URL_BACKEND, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body:JSON.stringify({nombre:producto, precio:precios})
        }).then((datosJSON) => datosJSON.json())
        .then((respuesta) => {
            if (respuesta._id) obtenerProductos();
            else alert("No se puede hacer el registro");
        }).catch((err) => {
            console.error(error);
            alert("No se pudo realizar esta operacion, intente mas tarde");
        });
        inputNameHTML.value = "";
        inputPrecioHTML.value = "";
    }
}

formularioHTML.addEventListener("submit", manejarEntradasDeDatos);