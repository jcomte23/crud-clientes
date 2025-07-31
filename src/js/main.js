import { createElement } from "react"
import { traerAtodosLosClientes } from "../services/clientesService"

let formulario = document.getElementById("cliente-form")
let espacioDondeSeMuestraLosClientes = document.querySelector(".tbody-clientes")

document.addEventListener("DOMContentLoaded", async function () {
    pintarLosClientesEnElHTML()
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