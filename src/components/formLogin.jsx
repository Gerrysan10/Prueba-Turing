import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import gmail from '../assets/email.png';
import password from '../assets/password.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
function FormLogin() {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

    };
    return (
        <div className='formulary'>
            <img src={logo} alt="" className='logor' />
            <h1 className='titleformulary'>Hola, <br />Inicia sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
                <div className="input-container">
                    <img src={gmail} alt="" className='logos' />
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Correo" />
                </div>
                <div className="input-container">
                    <img src={password} alt="" className='logos' />
                    <input type="password" {...register("password", { required: true })} className="input" placeholder="Contraseña" />
                </div>
                <div className='contentbutton'>
                    <button type="submit" className='button textbutton'>
                        {isLoading ? 'Cargando...' : <p className='textbutton'>Iniciar sesión</p>}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default FormLogin;