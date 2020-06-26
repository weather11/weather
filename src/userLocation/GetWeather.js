import React from 'react';
import Visual  from "./Visual";

class GetWeather extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
          weatherData: [],
          latitude:null,
          longitude:null,
          woeid:0,
          woeidWeather:{},
          temp:"",
          weather_state:"",
          wind_speed:"",
          air_pressure:""
        };
       
    }
    
    
    
    componentDidUpdate=(prevProps)=>{
            
      const URL="https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong="+this.props.latitude+","+this.props.longitude;
      
      
      if(this.props.latitude!==prevProps.latitude||this.props.longitude!==prevProps.longitude){
        fetch(URL).then(res => {return res.json();}).then(json => {
          this.setState({ weatherData: json });
          this.setState({ latitude: this.props.latitude });
        });
      }

      if(JSON.parse(JSON.stringify(this.state.weatherData))[0]!==undefined&&this.state.woeid===0){
               
        this.setState({woeid:JSON.parse(JSON.stringify(this.state.weatherData))[0].woeid})
                
      }
        
      if(this.state.woeid!==0){
        var URLsity="https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"+this.state.woeid+"/";
      }
       
      if(this.state.latitude!==prevProps.latitude&&this.state.woeid!==0){
        

        fetch(URLsity).then(res =>{
          if(res.status===200){
          return res.json();}else{
            alert("У metaweather.com опять что-то пошло не так, попробуйте обновить страницу")
            return res.json();}
        }).then(json => {
          this.setState({ woeidWeather: json });
          
        });

        

        
      }
      const woeidWeather=this.state.woeidWeather;
      if(Object.keys(woeidWeather).length>0){
        console.log(woeidWeather.consolidated_weather[0]);
        
        if(this.state.temp!==woeidWeather.consolidated_weather[0].the_temp){
        this.setState({temp:woeidWeather.consolidated_weather[0].the_temp})
        this.setState({weather_state:woeidWeather.consolidated_weather[0].weather_state_abbr})
        this.setState({wind_speed:woeidWeather.consolidated_weather[0].wind_speed})
        this.setState({air_pressure:woeidWeather.consolidated_weather[0].air_pressure})
        }
      } 
    }
    
   


    render() {
        
        const weatherData = JSON.stringify(this.state.weatherData);
        
        if (!weatherData) return <div>Loading</div>;

    return (<div>
              
              <Visual temp={this.state.temp} weather_state={this.state.weather_state} wind_speed={this.state.wind_speed} air_pressure={this.state.air_pressure}/>
            </div>
      
      )
    
    }
} 

export default GetWeather