//GET
export async function traerAtodosLosClientes() {

    let promesa = await fetch("http://localhost:3000/clientes")
    let clientes = await promesa.json()

    return clientes
}

//GET
export async function traerAunClienteEnParticular(id) {
    let promesa = await fetch(`http://localhost:3000/clientes/${id}`)
    let cliente = await promesa.json()

    return cliente
}

//POST
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

//PUT
export async function actualizarAunUsuarioEnLaBaseDeDatos(id, cliente) {
    let promesa = await fetch(`http://localhost:3000/clientes/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(cliente)
    })

    if (promesa.ok) {
        return true
    } else {
        return false
    }
}

//PATCH
export async function actualizarDatosPuntualesDeUnCliente(id, objetoConLosNecesario) {
    let promesa = await fetch(`http://localhost:3000/clientes/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(objetoConLosNecesario)
    })

    if (promesa.ok) {
        return true
    } else {
        return false
    }
}

//DELETE
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