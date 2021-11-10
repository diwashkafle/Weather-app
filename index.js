let city = document.getElementById("input");
let searchBtn= document.getElementById("button");

let weather ={
    "apikey":"90885630958866e96ec55ab633e76ae9",
    fetchWeather: function(){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city.value + 
            "&units=metric&appid=" 
            + this.apikey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        console.log(data)
        // const {name} = data;
        const {icon, description} =data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.getElementById("weather-text").innerHTML=" Weather in "+city.value;
        document.getElementById("temp-text").innerHTML=temp+"°C";
        document.getElementById("sky-text").innerHTML=description;
        document.getElementById("humidity-text").innerHTML="Humidity: "+humidity+"%";
        document.getElementById("wind-speed-text").innerHTML="Wind Speed: "+speed +"km/hr";
        city.value=""
    }
}

    searchBtn.addEventListener("click",function(){
        
        if(city.value.length===0){
            document.getElementById("warning").style.visibility="visible"
        }else{
            weather.fetchWeather()
        }
        
    })
    city.addEventListener("keypress",function(e){
        if(e.key==="Enter"){
            if(city.value.length===0){
                document.getElementById("warning").style.visibility="visible"
            }else{
                weather.fetchWeather()
            }
        }else{
            return null
        }
        
        
    })


