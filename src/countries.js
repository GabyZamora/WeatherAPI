const apis = ({
    url:'https://www.universal-tutorial.com/api/getaccesstoken',
    method: 'GET',
    apitoken: "i9X450E2VcztAgEomPeI2PaNqpFVjJ4TZsGcJtrxA0-pqxJuhFwySNDoqTkjRZq6b0M",
    accept: "application/json",
    email: "gabriela.zamora799@gmail.com",
    urlcountries: 'https://www.universal-tutorial.com/api/countries/',

    success: function(data) {
        if(data.auth_token){
            let auth_token = data.auth_token;
        }
    }
});

const getCountries = fetch(`${apis.urlcountries}`).then
    (data =>{
        return data.json()
    }).then(mostrarDatos)


const mostrarDatos = data =>{
    let pais = document.getElementById(pais)
    pais.innerText = `${data.country_name}`
}