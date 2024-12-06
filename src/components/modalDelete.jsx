import '../css/modalLogin.css'

const ModalDelete = ({ showModal, setShowModal, message, handleDelete }) => {
    return (
        <>
            {showModal && (
                <div className="modal-login">
                    <div className="modal-content-login">
                        <div className='cont-title-modal-login'>
                            <p className='title-modal-login'>Mensaje</p>
                            <span className="close-login" onClick={() => setShowModal(false)}>&times;</span>
                        </div>
                        <p className='message-modal-login'>{message}.</p>
                        <div className='btns-Modal'>
                            <button className='btnsModal  btnModalDelete' onClick={handleDelete}>Eliminar</button>
                            <button className='btnsModal  btnModalExit' onClick={() => setShowModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalDelete;

