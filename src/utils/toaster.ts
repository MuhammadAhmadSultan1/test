import { Bounce, toast } from "react-toastify";

export const toaster = (message: string, type: "success" | "error") => {
  toast(message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    type: type,
  });
};
