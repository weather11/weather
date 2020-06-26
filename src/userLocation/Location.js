import React from 'react';
import GetWeather from "./GetWeather"; 


class Location extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            longitude:null,
            latitude:null,
            
        };
        this.getStatus = this.getStatus.bind(this)
        this.success = this.success.bind(this)
        this.error = this.error.bind(this)
        
    }
    
    

    success(position) {
        
        this.setState({latitude:position.coords.latitude})  
        this.setState({longitude:position.coords.longitude})
        
      }

    error() {
            alert('Невозможно определить ваше местоположение. Введите ваши координаты вручную.');
            let latitude=prompt("Введите вашу текущую широту");
            let longitude=prompt("Введите вашу текущую долготу");

            while(latitude>90||latitude<-90||!isFinite(latitude)){
                latitude=(prompt("Широта в градусах должна быть числом от -90 до 90. Попробуйте еще раз:"));
            }
             this.setState({latitude:latitude});
            while(latitude>90||latitude<-90||!isFinite(longitude)){
                longitude=(prompt("Долгота в градусах должна быть числом от -90 до 90. Попробуйте еще раз:"));
            }
             this.setState({longitude:longitude});
          }   

    getStatus(){
       navigator.geolocation.getCurrentPosition(this.success, this.error);       
    }
    
    componentDidMount(){
        this.getStatus();
    }


    render() {
        
    return (
        <div>
        
        <GetWeather latitude={this.state.latitude} longitude={this.state.longitude}/>
        </div>
    )
    }
}
    



export default Location