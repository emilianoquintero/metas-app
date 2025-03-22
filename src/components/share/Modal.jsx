import { useParams } from 'react-router';
import Detalles from '../nueva/Detalles'

function Modal({ children}) {
    const {id} = useParams();
    return (
        <div className="flex items-center fixed inset-0 bg-gray-500/75">
            <div className="mx-auto">
                {children}
            </div>
        </div>
    );
  }
  
  export default Modal
  