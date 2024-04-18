// Módulo para manejar los videos
let moduloVideo = (function() {
    function mostrarVideo(url, id) {
        let iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    return {
        insertarVideo: function(url, id) {
            mostrarVideo(url, id);
        },
        adelantarVideo: function(id) {
            let iframe = document.getElementById(id);
            let player = iframe.contentWindow;
            player.postMessage('{"event":"command","func":"seekTo","args":[player.getCurrentTime() + 10,true]}', '*');
        },
        retrocederVideo: function(id) {
            let iframe = document.getElementById(id);
            let player = iframe.contentWindow;
            player.postMessage('{"event":"command","func":"seekTo","args":[player.getCurrentTime() - 10,true]}', '*');
        }
    };
})();

// Clase padre Multimedia
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        moduloVideo.insertarVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo = 0) {
        let urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        moduloVideo.insertarVideo(urlConTiempo, this.id);
    }

    adelantar() {
        moduloVideo.adelantarVideo(this.id);
    }

    retroceder() {
        moduloVideo.retrocederVideo(this.id);
    }
}

// Instancias de la clase Reproductor para cada video
let lobo = new Reproductor('https://www.youtube.com/embed/humdZKv-P-0', 'lobo');
let leon = new Reproductor('https://www.youtube.com/embed/6Oobso9uExA', 'leon');
let serpiente = new Reproductor('https://www.youtube.com/embed/c8IQz9ymvlM', 'serpiente');
let oso = new Reproductor('https://www.youtube.com/embed/kTClrH3c7Wc', 'oso');
let aguila = new Reproductor('https://www.youtube.com/embed/q0htH8drH8c', 'aguila');

// Reproducir cada video
lobo.playMultimedia();
leon.playMultimedia();
serpiente.playMultimedia();
oso.playMultimedia();
aguila.playMultimedia();
