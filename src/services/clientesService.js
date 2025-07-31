export async function traerAtodosLosClientes() {

    let promesa = await fetch("http://localhost:3000/clientes")
    let clientes = await promesa.json()

    return clientes
}