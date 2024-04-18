// Requerimiento 3: Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales. (1 Punto)
async function manejoDeErrores() {
    try {
        const response = await fetch('url_de_tu_api_aqui');
        const data = await response.json();
        // Aquí procesar los datos recibidos y realizar las asignaciones necesarias para obtener las imágenes de los animales
        return data;
    } catch (error) {
        console.error('Error al obtener las imágenes de los animales:', error);
        throw error; // Lanza el error nuevamente para que pueda ser capturado por un bloque catch externo si es necesario
    } finally {
        console.log('Se ejecuta después de que el bloque try/catch haya terminado, independientemente de si ha ocurrido un error o no.');
    }
}
