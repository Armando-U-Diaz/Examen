const eliminar = async (id) => {
    const URL = `${URL_BACKEND}/${id}`;
    try {
        const datosJSON = await fetch(URL,{
            method:"DELETE",
            headers:{"Content-type": "application/json"}
        });
        const resultadoFinal = await datosJSON.json();
        
        if (datosJSON.status == 200) {
            obtenerProductos();
        }
    } catch (error) {
        console.error(error);
        alert("No se pudo eliminar la tarea, intente mas tarde");
    }
}