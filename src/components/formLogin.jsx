import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import gmail from '../assets/email.png';
import password from '../assets/password.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../apis/auth';

function FormLogin({setMessage,visibleModal}) {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const response = await loginUser(data);
            
            if (response && response.id) {
                localStorage.setItem('userSession', JSON.stringify(response));
                navigate('/home');
            }
        } catch (err) {
            setMessage(err.message || 'Error al iniciar sesión');
            visibleModal(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="formulary">
            <img src={logo} alt="" className="logor" />
            <h1 className="titleformulary">Hola, <br />Inicia sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
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
                        required={true}
                    />
                </div>
                <div className="contentbutton">
                    <button type="submit" className="button textbutton" disabled={isLoading}>
                        {isLoading ? 'Cargando...' : <p className="textbutton">Iniciar sesión</p>}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormLogin;
