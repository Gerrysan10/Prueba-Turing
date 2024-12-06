import '../css/modalLogin.css'

const ModalLogin= ({ showModal, setShowModal, message }) => {
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
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalLogin;
