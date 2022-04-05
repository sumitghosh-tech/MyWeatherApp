let weather={
    apikey:'7e3473fbce8e0bdd5dd663bde6a73167',
    fetchWeather:function(cityName){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+this.apikey+"&units=metric"
        ).then(response=>response.json())
        .then(data=>this.displayWeather(data))
    },
    displayWeather:function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        //console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".initial").style.visibility="hidden";
        document.querySelector(".weather").style.visibility="visible";
        document.querySelector(".city").innerHTML="Weather in "+name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".temp").innerHTML=temp+"°C";
        document.querySelector(".humidity").innerHTML="Humidity : "+humidity;
        document.querySelector(".wind").innerHTML="Wind speed: "+speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')"

    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search-btn").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});
