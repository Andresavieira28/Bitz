function getCurrentDateTime() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const dateTimeString = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;

    return dateTimeString;
}

// Atualizar o elemento HTML com a data e hora atual
function updateDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    if (currentDateTimeElement) {
        currentDateTimeElement.textContent = getCurrentDateTime();
    }
}

// Atualizar a cada segundo
setInterval(updateDateTime, 1000);

// Chamada inicial para exibir a data e hora atual
updateDateTime();