import {
    actualizarAunUsuarioEnLaBaseDeDatos,
    crearUnNuevoClienteEnLaBaseDeDatos,
    eliminarUnClienteEnLaBaseDeDatos,
    traerAtodosLosClientes,
    traerAunClienteEnParticular
} from "../services/clientesService"

let formulario = document.getElementById("cliente-form")
let espacioDondeSeMuestraLosClientes = document.querySelector(".tbody-clientes")
let cajaTemporal = null

document.addEventListener("DOMContentLoaded", async function () {
    pintarLosClientesEnElHTML()
})


formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault()


    let clienteNuevo =
    {
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        correo: formulario.email.value,
        ciudad: formulario.ciudad.value,
        pais: formulario.pais.value,
        edad: parseFloat(formulario.edad.value)
    }

    if (cajaTemporal === null) {
        let resultado = await crearUnNuevoClienteEnLaBaseDeDatos(clienteNuevo)

        if (resultado === true) {
            console.log("el cliente se agrego");
            pintarLosClientesEnElHTML()
            formulario.reset()
        } else {
            alert("error; por favor reintente mas tarde")
        }
    } else {
        let resultado = await actualizarAunUsuarioEnLaBaseDeDatos(cajaTemporal, clienteNuevo)
        if (resultado === true) {
            console.log("el cliente se actualizo");
            formulario.btnsave.style.backgroundColor = "blue";
            formulario.btnsave.textContent = "Agregar cliente";
            cajaTemporal=null
            pintarLosClientesEnElHTML()
            formulario.reset()
        } else {
            alert("error; por favor reintente mas tarde")
        }
    }
















})


espacioDondeSeMuestraLosClientes.addEventListener("click", async function (evento) {

    if (evento.target.classList.contains("edit")) {
        let id = evento.target.getAttribute("data-id")

        let cliente = await traerAunClienteEnParticular(id)

        formulario.nombre.value = cliente.nombre
        formulario.apellido.value = cliente.apellido
        formulario.email.value = cliente.correo
        formulario.ciudad.value = cliente.ciudad
        formulario.pais.value = cliente.pais
        formulario.edad.value = cliente.edad


        formulario.btnsave.style.backgroundColor = "green";
        formulario.btnsave.textContent = "Actualizar usuario";

        cajaTemporal = cliente.id
    }

    if (evento.target.classList.contains("delete")) {

        let id = evento.target.getAttribute("data-id")

        let confirmacion = confirm("estas seguro que quiere eliminar a ese cliente")

        if (confirmacion === true) {
            await eliminarUnClienteEnLaBaseDeDatos(id)
        }
        pintarLosClientesEnElHTML()
    }
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
            <button class="edit" data-id=${cliente.id} >Editar</button>
            <button class="delete"  data-id=${cliente.id}  >Eliminar</button>
          </td>
        </tr>
        `
    }
}