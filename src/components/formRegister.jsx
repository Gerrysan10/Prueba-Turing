import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import gmail from '../assets/email.png';
import password from '../assets/password.png';
import phone from '../assets/tel.png'
import user from '../assets/user.png'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormRegister() {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

    };
    return (
        <div className='formulary'>
            <img src={logo} alt="" className='logor' />
            <h1 className='titleformulary'>Hola, <br />Registrarte ahora</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
                <div className="input-container">
                    <img src={user} alt="" className='logos' />
                    <input type="text" {...register("name", { required: true })} className="input" placeholder="Nombre" />
                </div>
                <div className="input-container">
                    <img src={phone} alt="" className='logos' />
                    <input type="tel" {...register("phone", { required: true })} className="input" placeholder="Télefono" />
                </div>
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
                        {isLoading ? 'Cargando...' : <p className='textbutton'>Registrarme</p>}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default FormRegister;