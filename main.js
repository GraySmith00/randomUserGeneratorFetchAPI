const url = 'https://randomuser.me/api/';
const fullNameDisp = document.querySelector("#fullname");
const avatar = document.querySelector("#avatar");
const username = document.querySelector("#username");
const city = document.querySelector("#city");
const email = document.querySelector("#email");
const btn = document.querySelector("#btn");

btn.addEventListener('click', function() {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(displayErrors);
})

function handleErrors (res) {
    if (!res.ok) {
        throw Error (res.status);
    }
    return res;
}

function parseJSON (res) {
    return res.json().then(function(parsedData) {
        return parsedData.results[0];
    });
}

function updateProfile (data){
    console.log(data);

    fullNameDisp.innerText = `${data.name.first} ${data.name.last}`;
    username.innerText = data.login.username;
    avatar.src = data.picture.medium;
    city.innerText = data.location.city;
    email.innerText = data.email;
}

function displayErrors (err) {
    console.log('DISPLAY ERRORS....');
    console.log(err);
}