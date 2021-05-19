const tempLoad = () => {
    const thermometer = document.getElementById('temp');
    thermometer.innerHTML = "&#xf2cb";

    setTimeout(() =>{
        thermometer.innerHTML = "&#xf2ca";
        thermometer.style.color = "#f8b627";
    }, 1000 );
    setTimeout(() =>{
        thermometer.innerHTML = "&#xf2c9";
    }, 2000 );
    setTimeout(() =>{
        thermometer.innerHTML = "&#xf2c8";
    }, 3000 );
    setTimeout(() =>{
        thermometer.innerHTML = "&#xf2c7";
        thermometer.style.color = "#d63031";
    }, 4000 );
}

tempLoad();
setInterval(tempLoad, 5000);