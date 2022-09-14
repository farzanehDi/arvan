import Modal from 'react-modal';
import { useContext } from "react";
import { articleContext } from "../../context/articleContext";
import axios from "axios";
import { Routers } from "../../utils/configUrls";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

Modal.setAppElement('#root');

const ConfirmModal = (props) => {

    const { state, dispatch, listOfArticle } = useContext(articleContext)
    const params = useParams();

    const toggleModal = () => {
        dispatch({
            type: "CONFIRM_MODAL",
            payload: !state.CONFIRM_MODAL
        })
    }

    const deleteArticle = async () => {
        dispatch({ type: "LOADING", payload: true })
        try {
            await axios(`${Routers.ARTICLES}/${props.slug}`, { method: 'DELETE' });
            dispatch({ type: "LOADING", payload: false })
            toast.success('Well done! Article deleted successfuly');
            listOfArticle(params.id || 1);
            toggleModal();
        } catch (error) {
            toast.error('Error', { className: 'bg-red-light text-red' });
            dispatch({ type: "LOADING", payload: false })
        }
    };

    return (
        <Modal
            isOpen={state.CONFIRM_MODAL}
            className="Modal"
            overlayClassName="Overlay"
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={500}
        >
            <div className={'content md:w-8/12 lg:w-6/12 xl:w-5/12 w-11/12'}>
                <p className={'border-b border-gray-light text-xl font-bold pb-5 px-4'}>Delete Article</p>
                <p className={'p-5'}>Are you sure to delete Article?</p>
                <div className={'border-t border-gray-light flex pt-5 justify-end px-4 space-x-3'}>
                    <button className={'border rounded border-gray-light h-10 w-20'} onClick={toggleModal}>No</button>
                    <button className={'bg-red text-white rounded h-10 w-20'} onClick={deleteArticle}>Yes</button>

                </div>
            </div>
        </Modal>
    );
};

export default ConfirmModal;