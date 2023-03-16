import { toast } from 'react-toastify';

const ToastifyComp = ({ text, type, theme = 'light' }) => {
  return toast[`${type}`](`${text}`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    toastId: 'custom-id-yes',
    theme: `${theme}`,
  });
};

export default ToastifyComp;
