const API_URL = "http://localhost:4000"; 



// Función para obtener todos los deportes
export const getSports = async () => {
    const response = await fetch(`${API_URL}/api/sports`, {
        method: "GET",
    });
    return response.json();
};


// Función para obtener todos los rankings
export const getRankings = async () => {
    const response = await fetch(`${API_URL}/api/rankings`, {
        method: "GET",
    });
    return response.json();
};


// Función para obtener todas las noticias
export const getNotices = async () => {
    const response = await fetch(`${API_URL}/api/notices`, {
        method: "GET",
    });
    return response.json();
};

// Función para actualizar una noticia
export const updateNotice = async (id, noticeData) => {
    const response = await fetch(`${API_URL}/api/notices/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(noticeData),
    });
    return response.json();
};

// Función para eliminar una noticia
export const deleteNotice = async (id) => {
    const response = await fetch(`${API_URL}/api/notices/${id}`, {
        method: "DELETE",
    });
    return response.json();
};
