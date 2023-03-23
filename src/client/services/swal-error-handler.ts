import Swal, { SweetAlertOptions } from "sweetalert2";

export function SwalError(error: any, args?: SweetAlertOptions) {
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
    ...args,
  });
}

export function SwalSuccess(str: string, title: string = "Success!", args?: SweetAlertOptions) {
  Swal.fire({
    title,
    icon: "success",
    text: str,
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
    ...args,
  });
}

export function SwalWarn(str: string, title: string = "OOPSY!", args?: SweetAlertOptions) {
  Swal.fire({
    title,
    icon: "error",
    text: str,
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
    ...args,
  });
}

export default {
  SwalError,
  SwalSuccess,
  SwalWarn,
};
