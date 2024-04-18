function obtenerImagenesDeAnimales() {
    return new Promise((resolve, reject) => {
        // Simulación de una llamada a una API
        setTimeout(() => {
            const data = [
                { name: 'Leon', img: 'leon.jpg' },
                { name: 'Lobo', img: 'lobo.jpg' },
                { name: 'Oso', img: 'oso.jpg' },
                { name: 'Serpiente', img: 'serpiente.jpg' },
                { name: 'Aguila', img: 'aguila.jpg' }
            ];
            // Resuelve la promesa con los datos obtenidos después de 1 segundo
            resolve(data);
        }, 1000); // Simula un retraso de 1 segundo

        // La promesa está en estado "pending" hasta que se resuelva o se rechace
        // En este momento, aún no se sabe si la promesa se resolverá o se rechazará
        // No hay necesidad de agregar un método "then" aquí porque no se puede prever el resultado
    });
}

// Uso del método "then" para manejar el resultado exitoso de la promesa
obtenerImagenesDeAnimales().then(function(data) {
    // Función que se ejecuta cuando la promesa se resuelve satisfactoriamente
    console.log('Datos de imágenes de animales:', data);
}).catch(function(error) {
    // Función que se ejecuta si la promesa es rechazada
    console.error('Error al obtener las imágenes de los animales:', error);
});

// En este punto, la promesa está en estado "pending" y se está esperando su resolución o rechazo
// Dependiendo de cómo se resuelva o rechace la promesa, se ejecutará la función pasada a "then" o "catch"
