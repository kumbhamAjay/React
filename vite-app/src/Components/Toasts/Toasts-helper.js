import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



  
    export const customSuccess=()=>{
        toast.success("Success Notification !", {
            position: "top-center"
          });

    }
    export const customError=()=>{
        toast.error("Error Notification !", {
            position: "top-center"
          });

    }
    export const customWarn=()=>{
        toast.warn("Warning Notification !", {
            position: "top-center"
          });

    }
    export const customInfo=()=>{
        toast.info("Info Notification !", {
            position: "top-center"
          });

    }
    

    

   