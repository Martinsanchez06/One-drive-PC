class App{
    constructor(descargas,puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert('aplicacion instalada')
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert('app encedida')
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert('app cerrada')
        }
    } 
    desinstalada(){
        if(this.instalada == true){
            this.instalada = false;
            alert('aplicacion desinstalada')
        }
    }
    appInfo(){
        return `
        Esta app tiene ${this.descargas} descargas, una calificacion de: ${this.puntuacion}, y un peso de ${this.peso}
        `
    }
}

const app1 = new App('16.000 ', '5 estrellas', '150mb')

app1.instalar()
app1.abrir()
app1.cerrar()
app1.desinstalada()
document.write(app1.appInfo())