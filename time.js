let hours = document.getElementById('hora');
let minutes = document.getElementById('minutos');
let seconds = document.getElementById('segundos');

const clockTime = () => {
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes();
    let segundos = new Date().getSeconds();

    if(hora < 10)
        hora = '0' + hora;
    if(minuto < 10)
        minuto = '0' + minuto;
    if(segundos < 10)
        segundos = '0' + segundos;

    hours.innerHTML = `${hora}`;
    minutes.innerHTML = `${minuto}`;
    seconds.innerHTML = `${segundos}`;
}

setInterval(clockTime, 1000);