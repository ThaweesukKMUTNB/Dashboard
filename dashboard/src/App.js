import Appheader from './components/Appheader';
import Appchart from './components/Appchart';
import './App.css';
import Appopenweather from './components/Appopenweather'
import AppToday from './components/AppToday'
import React from 'react';
import Appiqair from './components/Appiqair'
import IntervalExample from './components/IntervalExample'

export default function App() {
  return (
    <div className = 'app'>
      
    <Appheader />
    <div className = 'App'>
    <h1 style= {{fontSize: 70}}> Weather Station </h1>
    </div>
      <div className ='app-grid'>
          <div className = 'chart-box'>
          <div className ='app-grid-chart-inbox' style = {{ width: '100px', height: '300px' }}>
            <Appchart /> 
            </div>
          <div className ='app-grid-chart-inbox' style = {{ width: '100px', height: '300px' }}>
            <Appchart/> 
          </div>
          <div className ='app-grid-chart-inbox' style = {{ width: '100px', height: '300px' }}>
            <Appchart/> 
            </div>
          <div className ='app-grid-chart-inbox' style = {{ width: '100px', height: '300px' }}>
            <Appchart/> 
            </div>
          <div className ='app-grid-chart-inbox' style = {{ width: '100px', height: '300px' }}>
            <Appchart/> 
            </div>
            
        
          </div>
          <div className ='app-grid-inbox'>
            <div className = 'Weatherbox'>
            {/*<Appopenweather/>*/}
  
            </div>
            <div className = 'Weatherbox'>
              {/*<Appiqair/>*/}
              </div>
          </div>
      </div>
      <div className ='app-grid-2'>
        <div className = 'box'>
            <IntervalExample/>
          </div>
      </div>
    
    </div>
  );
}

