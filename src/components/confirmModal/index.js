
import Modal from 'react-modal';
import { useContext,useDispatch} from "react";
import { modalContext } from "../../context/modalContext";

const ConfirmModal = (props) => {

    const {state}=useContext(modalContext)
    
    return (
        <Modal
            isOpen={state.CONFIRM_MODAL}
            className="Modal"
            overlayClassName="Overlay"
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={500}
        >
            <div className={'content md:w-8/12 lg:w-6/12 xl:w-5/12 w-11/12'}>

            modal
            </div>
        </Modal>
    );
};

export default ConfirmModal;