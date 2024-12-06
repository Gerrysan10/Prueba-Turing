const API_URL = "http://localhost:4000"; 

// Función para registrar un usuario
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error en el registro");
        }

        return await response.json();
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        throw error;
    }
};

// Función para iniciar sesión
export const loginUser = async (loginData) => {
    try {
        const response = await fetch(`${API_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error en el inicio de sesión");
        }

        return await response.json();
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
};