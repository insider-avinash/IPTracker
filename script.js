const btn = document.getElementById('btn');
// const loader = document.querySelector('.loader');
btn.addEventListener('click', fetchData);
// const details = document.querySelector('.details');

const lookupBtn = document.querySelector('.lookup-btn');
const ipDisplay = document.querySelector('.ip-display');
const locationDisplay = document.querySelector('.location-display');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');
const  loader = document.querySelector('.loader-container');
const details = document.querySelector('.details');

function fetchData(){
    fetch(`https://ipapi.co/json/`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        ipDisplay.textContent = `IP: ${data.ip}`;
        locationDisplay.textContent = `Location : ${data.city}, ${data.region}, ${data.country_name}`
        latitude.textContent = `Latitude : ${data.latitude}`;
        longitude.textContent = `Longitude : ${data.longitude}`;
    })
}




 