import Swal from "sweetalert2";

export default function SwalError(error) {
  Swal.fire({
    title: "Error!",
    icon: "error",
    text: error.message,
    position: "top-right",
    toast: true,
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}
