import React, {useEffect,useState} from 'react'
import axios from 'axios'
function Appiqair() {
    const [data,setData] = useState ({})
    const [aqis,setAqis] = useState ({})
    const [des,setDes] = useState ({})
    const url = 'http://api.airvisual.com/v2/nearest_city?lat=13.736717&lon=100.523186&key=33a28c8e-a4d5-4a18-b961-6c681a5d0c94'
    

    useEffect(() => {
            axios.get(url).then((response) =>{
            setData(response.data)
            
            if (response.data.data.current.pollution.aqius < 51) {
                setAqis({aqis:'p1'})
                setDes({des:'Good'})
            }
            else if(response.data.data.current.pollution.aqius < 101){
                setAqis({aqis:'p2'})
                setDes({des:'Moderate'})
            }
            else if(response.data.data.current.pollution.aqius < 151){
                setAqis({aqis:'p3'})
                setDes({des:'Unhealthy for Sensitive Groups'})
            }
            else if(response.data.data.current.pollution.aqius < 201){
                setAqis({aqis:'p4'})
                setDes({des:'Unhealyht'})
            }
            else if(response.data.data.current.pollution.aqius < 251){
                setAqis({aqis:'p5'})
                setDes({des:'Very Unhealthy'})
            }
            else {
                setAqis({aqis:'p6'})
                setDes({des:'Hazardous'})
            }
            console.log(response.data)
            });
    },[]);
    
    return (
        <div style={{width: "190px"}}>
                    <h1 style={{textAlign:'center',fontSize: 30, marginBottom: 1}}> IQair </h1>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {data.data ? <img style={{marginBottom: 20,marginTop: 20}} src = {'/images'+'/'+(aqis.aqis)+'.png'}/> : null}

                        </div>
                    {des.des ? <h2>{des.des}</h2>: null}
                    {data.data ? <h2>{data.data.current.pollution.aqius} AQI </h2> : null }
                    
                

            </div>

    )
}

export default Appiqair;

