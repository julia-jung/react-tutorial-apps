import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { showModal, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
