import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import gmail from '../assets/email.png';
import password from '../assets/password.png';
import phone from '../assets/tel.png';
import user from '../assets/user.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../apis/auth';

function FormRegister({setMessage,visibleModal}) {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            //Llamada de la api de registro
            const response = await registerUser(data);
            
            if (response && response.id) {
                localStorage.setItem('userSession', JSON.stringify(response));
                navigate('/home');
            }
        } catch (err) {
            setMessage(err.message || 'Error al registrar el usuario');
            visibleModal(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="formulary">
            <img src={logo} alt="" className="logor" />
            <h1 className="titleformulary">Hola, <br />Registrarte ahora</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
                <div className="input-container">
                    <img src={user} alt="" className="logos" />
                    <input
                        type="text"
                        {...register("username", { required: true })}
                        className="input"
                        placeholder="Nombre"
                        required={true}
                    />
                </div>
                <div className="input-container">
                    <img src={phone} alt="" className="logos" />
                    <input
                        type="tel"
                        {...register("phone", { required: true })}
                        className="input"
                        placeholder="Teléfono"
                        required={true}
                    />
                </div>
                <div className="input-container">
                    <img src={gmail} alt="" className="logos" />
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="input"
                        placeholder="Correo"
                        required={true}
                    />
                </div>
                <div className="input-container">
                    <img src={password} alt="" className="logos" />
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="input"
                        placeholder="Contraseña"
                        minLength={6}
                        required={true}
                    />
                </div>
                <div className="contentbutton">
                    <button type="submit" className="button textbutton" disabled={isLoading}>
                        {isLoading ? 'Cargando...' : <p className="textbutton">Registrarme</p>}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormRegister;
