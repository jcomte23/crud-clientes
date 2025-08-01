import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});


export function alertaExitosa(mensaje) {
    Toast.fire({
        icon: "success",
        title: mensaje
    });
}

export function alertErronea(mensaje) {
    Toast.fire({
        icon: "error",
        title: mensaje
    });
}


