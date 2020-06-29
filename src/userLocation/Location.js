import React from 'react';
import GetWeather from "./GetWeather"; 

//Получаем местоположение пользователя

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
    //Запрашиваем местоположение у браузера пользователя
        getStatus(){
            navigator.geolocation.getCurrentPosition(this.success, this.error);       
        }
     //Если запрос успешен, записываем координаты в состояние
        success(position) {
            this.setState({latitude:position.coords.latitude})  
            this.setState({longitude:position.coords.longitude})
        }
      //Если нет, просим пользователя ввести координаты вручную
        error() {
                alert('Невозможно определить ваше местоположение. Введите ваши координаты вручную.');
                let latitude=prompt("Введите вашу текущую широту");
                let longitude=prompt("Введите вашу текущую долготу");
                //проверяем корректность введенных данных, если данные некорректны, запрашиваем еще раз
                while(latitude>90||latitude<-90||!isFinite(latitude)){
                    latitude=(prompt("Широта в градусах должна быть числом от -90 до 90. Попробуйте еще раз:"));
                }
                this.setState({latitude:latitude});
                while(latitude>90||latitude<-90||!isFinite(longitude)){
                    longitude=(prompt("Долгота в градусах должна быть числом от -90 до 90. Попробуйте еще раз:"));
                }
                this.setState({longitude:longitude});
            }   

    
    
    componentDidMount(){
        this.getStatus();
    }


    render() {
        
    return (
        //отправляем полученные данные в следующий компонент
        <div>
            <GetWeather latitude={this.state.latitude} longitude={this.state.longitude}/>
        </div>
    )
    }
}
    



export default Location