import React from 'react';
import rain from "../img/rain.gif";
import snow from "../img/snow.gif";
import sun from "../img/sun.gif";
import thunder from "../img/thunder.gif";
import clouds from "../img/clouds.gif"
    //Тут просто функциональный компонент верстки. Весь css в App.css. Верстка резиновая на гридах. Никаких "красивостей" не делал (кроме гифки, зависящей от статуса погоды), но если надо - не проблема.
function Visual(props){
    let weather_img;
    
    if(props.weather_state==="c"||props.weather_state==="lc"){
        weather_img=sun;
    }else if(props.weather_state==="hc"){
        weather_img=clouds;
    }else if(props.weather_state==="s"||props.weather_state==="lr"||props.weather_state==="hs"||props.weather_state==="h"){
        weather_img=rain;
    }else if(props.weather_state==="t"){
        weather_img=thunder;
    }else if(props.weather_state==="sn"){
        weather_img=snow;
    }
    let backimg={backgroundImage:`url(${weather_img})`}
    return(
    <div className="container">
        <div className="caption" style={backimg}></div>
        <div className="temp">Температура воздуха: {(+props.temp).toFixed(1)} &deg;C</div>
        <div className="weather_state">Облачность: <img src={"https://www.metaweather.com/static/img/weather/"+props.weather_state+".svg"} alt={"облачность "+props.weather_state}/></div>
        <div className="wind_speed">Скорость ветра: {(+props.wind_speed).toFixed(1)} м/с</div>
        <div className="pressure">Атмосферное давление: {(props.air_pressure* 0.750064).toFixed(0)} мм.рт.ст</div>
        <div className="nearest_station">Ближайшая поддерживаемая метеостанция: {props.title} ({(props.distance/1000).toFixed(1)} км от вас)</div>
    </div>
   
    )
}

export default  Visual