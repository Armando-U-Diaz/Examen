const tablaHTML = document.getElementById("tabla");

tablaHTML.innerHTML = "";

const URL_BACKEND = "http://localhost:3000/task";

var listaProductos = [];

const obtenerProductos = () => {
    fetch(URL_BACKEND)
    .then(res=>res.json()).then((datos)=>{
        listaProductos = datos;

        if (!listaProductos || listaProductos.length === 0) {
            tablaHTML.innerHTML="<h1>Ingresa las tareas. Datos no se encontraron</h1>"
            return;
        }

        tablaHTML.innerHTML = "";
        listaProductos.forEach((examen) => {
            tablaHTML.innerHTML += `
                <tr>
                    <td>${examen.nombre}</td>
                    <td>${examen.precio}</td>
                    <td>
                        <div class="btn-delete">
                        <button class="eliminar" onclick="eliminar('${examen._id}')">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                        </div>
                    </td>
                </tr>
            `
            
        });
    });

};

obtenerProductos();