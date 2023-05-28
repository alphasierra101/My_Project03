let weather = {
    apikey:"77ec1268c2ef7874d60237bedd8b19c6",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&units=metric&appid="
        + this.apikey)
        .then((response) => response.json())
            .then((data) => this.displayWeather(data)); 
    },

    displayWeather: function (data) {
        const { name } = data; 
        const { icon, description } = data.weather [0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C" ;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%" ;
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";

        //removing the dummy text on loading page
        document.querySelector(".weather").classList.remove("loading");

        //loading photos from various cities
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "' )"
        

    },
    search: function (){
        this.fetchWeather(document.querySelector(".searchbox").value);
 }
 };

 document.querySelector(".search button").addEventListener("click", function (){
   weather.search();
 });
 
 //pressing enter key works here
 document.querySelector(".searchbox").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});


//on loading page it call weatherfetch
weather.fetchWeather("Dehradun");
