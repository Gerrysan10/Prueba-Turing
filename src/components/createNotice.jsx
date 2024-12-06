import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addNotices } from '../apis/sports';
import '../css/updateNotice.css'

function CreateNotice({ visibleModal, setVisibleModal, notices, setnotices }) {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            linkImage: '',
            linkNotice: '',
        },
    });

    const onSubmit = async (formData) => {
        try {
            setIsLoading(true);
            const response = await addNotices({
                title: formData.title,
                description: formData.description,
                linkImage: formData.linkImage,
                linkNotice: formData.linkNotice
            });

            if (response && response._id) {
                setnotices([...notices, response]);

                reset();
                setVisibleModal(false);
            }
        } catch (err) {
            console.error('Error al crear la noticia:', err);
        } finally {
            setIsLoading(false);
        }
    };

    if (!visibleModal) return null;


    return (
        <div className="update-notice-modal">
            <div className="update-notice-modal-content">
                <div className="update-notice-formulary">
                    <h1 className="update-notice-title">Crear nueva noticia</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="update-notice-input-container">
                            <input
                                type="text"
                                {...register("title", { required: true })}
                                className="update-notice-input"
                                placeholder="Título"
                                maxLength={60}
                                required={true}
                            />
                           
                        </div>
                        <div className="update-notice-input-container">
                            <textarea
                                {...register("description", { required: true })}
                                className="update-notice-input update-notice-textarea"
                                placeholder="Descripción"
                                maxLength={200}
                                required={true}
                            ></textarea>
                        </div>
                        <div className="update-notice-input-container">
                            <input
                                type="url"
                                {...register("linkImage", { required: true })}
                                className="update-notice-input"
                                placeholder="Enlace de la imagen"
                                required={true}
                            />
                        </div>
                        <div className="update-notice-input-container">
                            <input
                                type="url"
                                {...register("linkNotice", { required: true })}
                                className="update-notice-input"
                                placeholder="Enlace de la noticia"
                                required={true}
                            />
                        </div>
                        <div className="update-notice-button-container">
                            <button
                                type="submit"
                                className="update-notice-button green"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Creando...' : 'Crear'}
                            </button>
                            <button
                                type="button"
                                className="update-notice-button red"
                                onClick={() => setVisibleModal(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );

}

export default CreateNotice;