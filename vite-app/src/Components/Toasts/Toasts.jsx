


  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { customError, customInfo, customSuccess, customWarn } from './Toasts-helper';


  
  function Toasts(){
    const notify = () => {customSuccess()};
    const error=()=>{customError()};
    const warn=()=>{customWarn()}
    const info=()=>{customInfo()}
    

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <button onClick={error}>Error!</button>
        <button onClick={warn}>warn!</button>
        <button onClick={info}>Info!</button>
        <ToastContainer />
      </div>
    );
  }
  export default Toasts