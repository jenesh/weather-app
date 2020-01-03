import React, {useState} from 'react';
import './App.css';
import Card from './Card'
import data from './mockData'

const container = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center'
}

function App() {
  const [geoLocation, setgeoLocation] = useState('');
  const { forecast } = data;

  if (geoLocation === '') {
    navigator.geolocation.getCurrentPosition((pos) => setgeoLocation(pos))
  }

  console.log(geoLocation.coords)

  return (
    <div className="App" style={{}}>
      <h1>I am a weather app</h1>
      <h3>{geoLocation ? `${geoLocation.coords.latitude} ${geoLocation.coords.longitude}` : ''}</h3>
      <div style={container}>
      {forecast.map(ele => (
        <Card
          day={ele.day}
          high={ele.high}
          low={ele.low}
          imgName={ele.imgName}
          percipitation={ele.percipitation}
          key={ele.day}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
