class Celular {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color
        this.peso = peso
        this.resolucionDePantalla = rdp
        this.resolucionDeCamara = rdc
        this.ram = ram
        this.encendido = false;
    }
    precionarBotonEncendido() {
        if (this.encendido == false) {
            alert("El celular esta prendiendo...");
            this.encendido = true;
        } else {
            alert("El celular esta apagado")
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("El celular esta reiniciandose ...");
        } else {
            alert('Celular apagado')
        }
    }
    tomarFotos() {
        alert(`Foto tomada en la resolución de ${this.resolucionDeCamara}`)
    }
    grabarVideo() {
        alert(`Grabando video en la resolución de ${this.resolucionDeCamara}`)
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b><br><br>
        Peso: <b>${this.peso}</b><br><br>
        Tamaño de pantalla: <b>${this.resolucionDePantalla}</b><br><br>
        Resolucion de camara: <b>${this.resolucionDeCamara}</b><br><br>
        Memoria ram: <b>${this.ram}</b><br><br>
        `
    }
}

class celularAltaGama extends Celular {
    constructor(color, peso, rdp, rdc, ram, rdce) {
        super(color, peso, rdp, rdc, ram)
        this.resolucionDeCamaraExtra = rdce
    }

    grabarVideoLento() {
        alert('Estas grabando en camara super lenta')
    }

    reconocimientoFacial(){
        alert('Iniciado el reconocimiento facial')
    }
    infoAltaGama() {
        return this.mobileInfo() + `Resolucion de camara extra: <b>${this.resolucionDeCamaraExtra}</b><br><br><br><br>`
    }
}

const celular1 = new celularAltaGama ('Cafe', '200g', '6.7p', '10px', '8gb', 'full hdsisima')
const celular2 = new celularAltaGama ('Cafesito', '200g', '4.7', '17px', '14gb', 'pelle')

document.write(celular1.infoAltaGama())
document.write(celular2.infoAltaGama())

