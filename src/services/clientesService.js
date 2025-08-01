export async function traerAtodosLosClientes() {

    let promesa = await fetch("http://localhost:3000/clientes")
    let clientes = await promesa.json()

    return clientes
}

export async function traerAunClienteEnParticular(id) {
    let promesa = await fetch(`http://localhost:3000/clientes/${id}`)
    let cliente = await promesa.json()

    return cliente
}



export async function crearUnNuevoClienteEnLaBaseDeDatos(clienteNuevo) {

    let promesa = await fetch("http://localhost:3000/clientes", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(clienteNuevo)
    })

    if (promesa.ok && promesa.status === 201) {
        return true
    } else {
        return false
    }
}



export async function eliminarUnClienteEnLaBaseDeDatos(id) {
    let promesa = await fetch(`http://localhost:3000/clientes/${id}`, {
        method: "DELETE"
    })

    if (promesa.ok) {
        return true
    } else {
        return false
    }
}