import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  WARNING = "warning",
}

const defaultOptions: ToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

export const showToast = (
  type: ToastType,
  message: string,
  options?: ToastOptions
) => {
  const mergedOptions = { ...defaultOptions, ...options };
  switch (type) {
    case ToastType.SUCCESS:
      toast.success(message, mergedOptions);
      break;
    case ToastType.ERROR:
      toast.error(message, mergedOptions);
      break;
    case ToastType.INFO:
      toast.info(message, mergedOptions);
      break;
    case ToastType.WARNING:
      toast.warning(message, mergedOptions);
      break;
    default:
      toast(message, mergedOptions);
  }
};
