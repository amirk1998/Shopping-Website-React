import { toast } from 'react-toastify';

const ToastifyComp = ({ text, type }) => {
  const options = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    toastId: 'custom-id-yes',
    theme: 'colored',
  };

  switch (type) {
    case 'success':
      return toast.success(`${text}`, options);
    case 'error':
      return toast.error(`${text}`, options);
    case 'warn':
      return toast.warn(`${text}`, options);
    case 'info':
      return toast.info(`${text}`, options);
    default:
      return toast(`${text}`, options);
  }
};

export default ToastifyComp;
