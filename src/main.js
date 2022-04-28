const api = {
    key: "7a865e9b8fc284ba4b7865ac8fd94bef",
    url: "https://api.openweathermap.org/data/2.5/",
}

const DataWeather = position =>{
    const{ latitude, longitude } = position.coords;
    fetch(`${api.url}weather?units=metric&lang=es&lat=${latitude}&lon=${longitude}&appid=${api.key}`)
    .then(response => response.json())
    .then(data => setWeather(data))
}
const onLoad = () =>{
    navigator.geolocation.getCurrentPosition(DataWeather);
}

const setWeather = data =>{
    let ciudad = document.querySelector('.localidad .ciudad')
    ciudad.innerText = `${data.name}, ${data.sys.country}`

    let fecha = document.querySelector('.localidad .fecha')
    fecha.innerText = `${getFecha(data.dt)}`

    let temperatura = document.querySelector('.datos .temperatura')
    temperatura.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`

    let icono = document.querySelector('.datos .icono')
    icono.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]
    .icon}.png" />`

    let clima = document.querySelector('.datos .clima')
    clima.innerText = `${data.weather[0].main}`

    let descripcion = document.querySelector('.datos .descripcion')
    descripcion.innerText = `${data.weather[0].description}`

    let maxmin = document.querySelector('.datos .max-min')
    maxmin.innerText = `Max: ${Math.round(data.main.temp_max)}°c / Min: ${Math.round(data.main.temp_min)}°c`

}
const consulta = evt => {
    if (evt.keyCode === 13) {
        getResultados(buscar.value)
    }
}

const buscar = document.querySelector('.busqueda')
buscar.addEventListener('keypress', consulta)

const getResultados = query => {
    fetch(`${api.url}weather?q=${query}&units=metric&lang=es&APPID=${api.key}`).then
    (data => {
        return data.json()
    }).then(mostrarResultados)
}

const getFecha = (unixTimeStamp) => {
    const milliSeconds = unixTimeStamp * 1000
    const dateObject = new Date(milliSeconds)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    return dateObject.toLocaleDateString("es-ES", options)
}

const mostrarResultados = data => {
    let ciudad = document.querySelector('.localidad .ciudad')
    ciudad.innerText = `${data.name}, ${data.sys.country}`

    let fecha = document.querySelector('.localidad .fecha')
    fecha.innerText = `${getFecha(data.dt)}`

    let temperatura = document.querySelector('.datos .temperatura')
    temperatura.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`

    let icono = document.querySelector('.datos .icono')
    icono.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]
    .icon}.png" />`

    let clima = document.querySelector('.datos .clima')
    clima.innerText = `${data.weather[0].main}`

    let descripcion = document.querySelector('.datos .descripcion')
    descripcion.innerText = `${data.weather[0].description}`

    let maxmin = document.querySelector('.datos .max-min')
    maxmin.innerText = `Max: ${Math.round(data.main.temp_max)}°c / Min: ${Math.round(data.main.temp_min)}°c`
}
