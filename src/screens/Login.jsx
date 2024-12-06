import image from '../assets/imgSports.webp'
import { useState } from 'react';
import ModalLogin from '../components/ModalLogin';
import FormLogin from '../components/formLogin';
import '../css/Login.css'
import FormRegister from '../components/formRegister';

function Login() {
    const [showModal, setShowModal] = useState(false);
    const [selectLogin,setselectLogin] = useState(true);
    const [message, setMessage] = useState('');
    

    const onSubmit = async (data) => {

    };

    return (
        <>
            <div className='ContRegister'>
                <div className='contentr'>
                    <div className='options'>
                        <p className={selectLogin ? 'select':''} onClick={()=> setselectLogin(true)}>Iniciar sesión</p>
                        <p className={!selectLogin ? 'select':''} onClick={()=> setselectLogin(false)}>Registrarse</p>
                    </div>
                    {
                        selectLogin ? 
                        <FormLogin/>
                        :
                        <FormRegister/>
                    }
                </div>
                <div className='image'>
                    <img className='imgregister' src={image} alt="" />
                </div>
            </div>
            <ModalLogin showModal={showModal} setShowModal={setShowModal} message={message} />
        </>
    );
}
export default Login;