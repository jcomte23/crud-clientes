import { crearUnNuevoClienteEnLaBaseDeDatos, traerAtodosLosClientes } from "../services/clientesService"

let formulario = document.getElementById("cliente-form")
let espacioDondeSeMuestraLosClientes = document.querySelector(".tbody-clientes")

document.addEventListener("DOMContentLoaded", async function () {
    pintarLosClientesEnElHTML()
})


formulario.addEventListener("submit", async function (evento) {

    let clienteNuevo =
    {
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        correo: formulario.email.value,
        ciudad: formulario.ciudad.value,
        pais: formulario.pais.value,
        edad: parseFloat(formulario.edad.value)
    }

    let resultado = await crearUnNuevoClienteEnLaBaseDeDatos(clienteNuevo)

    if (resultado === true) {
        console.log("el cliente se agrego");
        pintarLosClientesEnElHTML()
    }else{
        alert("error; por favor reintente mas tarde")
    }
    evento.preventDefault()
})














async function pintarLosClientesEnElHTML() {
    let clientes = await traerAtodosLosClientes()
    espacioDondeSeMuestraLosClientes.innerHTML = ""

    for (const cliente of clientes) {
        espacioDondeSeMuestraLosClientes.innerHTML += `
        <tr>
          <td>${cliente.nombre} ${cliente.apellido}</td>
          <td>${cliente.correo}</td>
          <td>${cliente.ciudad}</td>
          <td>${cliente.edad}</td>
          <td class="actions">
            <button class="edit" >Editar</button>
            <button class="delete" >Eliminar</button>
          </td>
        </tr>
        `
    }
}