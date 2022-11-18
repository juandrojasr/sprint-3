const URL_API = "http://localhost:3000/inmuebles";

export const getProperties = async () => {
    try {
        const peticion = await fetch(URL_API);
        const mostrar = await peticion.json();
        return mostrar;
    } catch (error) {
        console.error(error);
    }
};

export const getPropertiesById = async (id) => {
    try {
        const peticion = await fetch(URL_API + "/" + id);
        const mostrar = await peticion.json();
        return mostrar;
    } catch (error) {
        console.log(error);
    }
};

export const getPropietiesFilter = async (search) => {
    try {
        let response = await fetch(URL_API + search);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};