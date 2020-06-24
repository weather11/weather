import React from 'react';

function Visual(props){
    return(
    <div>
        <h1>Температура воздуха: {(+props.temp).toFixed(1)} &deg;C</h1>
        <h1>Облачность: <img src={"https://www.metaweather.com/static/img/weather/"+props.weather_state+".svg"} width="35rem" alt={"облачность "+props.weather_state}/></h1>
        <h1>Скорость ветра: {(+props.wind_speed).toFixed(1)} м/с</h1>
        <h1>Давление воздуха: {(props.air_pressure* 0.750064).toFixed(0)} мм.рт.ст</h1>
    </div>
   
    )
}

export default Visual