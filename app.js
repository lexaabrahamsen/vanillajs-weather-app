window.addEventListener('load', () => {
   let long;
   let lat;
   
   if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const proxy = 'http://cors-anywhere.herokuapp.com/';
           const api = `https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139`;

           fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                });
        });
   }
});