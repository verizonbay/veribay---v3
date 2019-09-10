import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from 'react-bootstrap'

const useModal = () => {
  
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;