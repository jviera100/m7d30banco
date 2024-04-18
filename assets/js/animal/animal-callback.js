// Definimos una función que simula obtener el sonido de un animal de una base de datos
const obtenerSonidoAnimal = (animal, callback) => {
    // Supongamos que aquí iría una consulta a una base de datos o alguna lógica para obtener el sonido del animal
    // En este ejemplo, simplemente usaremos un objeto con algunos sonidos predefinidos
    const sonidos = {
        "perro": "Guau guau",
        "gato": "Miau",
        "pájaro": "Pío pío"
    };

    // Simulamos un pequeño retardo de tiempo para simular una consulta a una base de datos
    setTimeout(() => {
        const sonido = sonidos[animal] || "No se encontró el sonido del animal";
        callback(sonido);
    }, 1000); // Retardo de 1 segundo
};

// El código sigue siendo igual, solo se eliminó la exportación de la función
