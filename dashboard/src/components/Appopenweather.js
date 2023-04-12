import React, {useEffect,useState} from 'react'
import axios from 'axios'
function Appopenweather() {
    const [data,setData] = useState ({})
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.736717&lon=100.523186&appid=6f7502c2cb522cb95a13064c4443de73'
    

    useEffect(() => {
            axios.get(url).then((response) =>{
            setData(response.data)
            console.log(response.data)
            });
    },[]);

    
    return (
        <div>
              
                    <h1 style={{textAlign:'center',fontSize: 30, marginBottom: 1}}> Openweather </h1>

                    <div style={{ marginBottom: 10 ,width: "150px", height: "100px", overflow: "hidden"}}>
                        {data.weather ? (<img  src={"https://openweathermap.org/img/wn/"+(data.weather[0].icon)+"@4x.png"} 
                                            style={{
                                                maxWidth: "none",
                                                maxHeight: "none",
                                                position: "relative",
                                                left: "50%",
                                                top: "50%",
                                                transform: "translate(-50%, -50%)",
                                                display: "block",
                                                margin: "auto"}}/> ) : null}
                    </div>
                    {data.main ? <h2 style={{marginBottom: 1}}>{Math.ceil(data.main.temp - 272.15) } °C</h2> : null }
                    {data.weather ? <h2 style={{marginBottom: 1}} >{data.name}</h2> : null }
                    {data.main ? <p style={{marginBottom: 1}}> Humidity {data.main.humidity}</p> : null }
                    {data.weather ? <p style={{marginBottom: 1}}> Pressure {data.main.pressure}</p> : null }
                

            </div>

    )
}

export default Appopenweather;


    

    

