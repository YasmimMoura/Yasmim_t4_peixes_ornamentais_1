function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function calculate() {
    
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    const volume = (length * width * height) / 1000;
    const pumpPower = volume * 6;
    const heaterPower = volume;

    document.getElementById('volume').textContent = `Volume do aquário: ${volume.toFixed(2)} litros`;
    document.getElementById('pump').textContent = `Potência da bomba necessária: ${pumpPower.toFixed(2)} L/h`;
    document.getElementById('heater').textContent = `Potência do aquecedor necessária: ${heaterPower.toFixed(2)} W`;

    setCookie('volume', volume.toFixed(2), 7);
    setCookie('pumpPower', pumpPower.toFixed(2), 7);
    setCookie('heaterPower', heaterPower.toFixed(2), 7);
}
