let hoursText = document.getElementById('hora');
let minutesText = document.getElementById('minutos');
let secondsText = document.getElementById('segundos');

const clockTime = () => {
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes();
    let segundos = new Date().getSeconds();

    hoursText.innerHTML = `${hora}`;
    minutesText.innerHTML = `${minuto}`;
    secondsText.innerHTML = `${segundos}`;
}

setInterval(clockTime, 1000);
//A função setInterval(), serve para executar uma função repetidamente a cada intervalo de tempo específico.