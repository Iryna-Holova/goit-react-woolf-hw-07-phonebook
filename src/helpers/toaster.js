import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showError = message => {
  toast.error(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Slide,
  });
};
