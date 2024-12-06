import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateNotice } from '../apis/sports';
import '../css/updateNotice.css'

function UpdateNotice({ visibleModal, setVisibleModal, dataNotice, notices,setnotices }) {
    const [isLoading, setIsLoading] = useState(false);
    const { 
        register, 
        handleSubmit, 
        reset, 
        setValue 
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            linkImage: '',
            linkNotice: '',
        },
    });

    // Set form values when modal opens
    useEffect(() => {
        if (visibleModal && dataNotice) {
            setValue('title', dataNotice.title || '');
            setValue('description', dataNotice.description || '');
            setValue('linkImage', dataNotice.linkImage || '');
            setValue('linkNotice', dataNotice.linkNotice || '');
        }
    }, [visibleModal, dataNotice, setValue]);

    const onSubmit = async (formData) => {
        try {
            setIsLoading(true);
            const response = await updateNotice(dataNotice._id, {
                title: formData.title,
                description: formData.description,
                linkImage: formData.linkImage,
                linkNotice: formData.linkNotice
            });
    
            if (response && response._id) {
                // Actualizar la lista de noticias
                const updatedNotices = notices.map(notice => 
                    notice._id === dataNotice._id 
                        ? { ...notice, ...formData } 
                        : notice
                );
    
                setnotices(updatedNotices);
                
                reset();
                setVisibleModal(false);
            }
        } catch (err) {
            console.error('Error al actualizar:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Don't render if modal is not visible or no notice data
    if (!visibleModal || !dataNotice) return null;

    return (
        <div className="update-notice-modal">
            <div className="update-notice-modal-content">
                <div className="update-notice-formulary">
                    <h1 className="update-notice-title">Actualizar noticia</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="update-notice-input-container">
                            <input
                                type="text"
                                {...register("title", { required: true })}
                                className="update-notice-input"
                                placeholder="Título"
                                maxLength={60}
                            />
                        </div>
                        <div className="update-notice-input-container">
                            <textarea
                                {...register("description", { required: true })}
                                className="update-notice-input update-notice-textarea"
                                placeholder="Descripción"
                                maxLength={200}
                            ></textarea>
                        </div>
                        <div className="update-notice-input-container">
                            <input
                                type="url"
                                {...register("linkImage", { required: true })}
                                className="update-notice-input"
                                placeholder="Enlace de la imagen"
                            />
                        </div>
                        <div className="update-notice-input-container">
                            <input
                                type="url"
                                {...register("linkNotice", { required: true })}
                                className="update-notice-input"
                                placeholder="Enlace de la noticia"
                            />
                        </div>
                        <div className="update-notice-button-container">
                            <button
                                type="submit"
                                className="update-notice-button green"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Cargando...' : 'Actualizar'}
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

export default UpdateNotice;