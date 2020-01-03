import React from 'react'

const forecastImg = {
    sunny: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
    cloudy: 'https://ssl.gstatic.com/onebox/weather/48/cloudy.png',
    rainy: 'https://ssl.gstatic.com/onebox/weather/64/rain.png',
    snowy: 'https://ssl.gstatic.com/onebox/weather/48/rain.png'
}

const card = {
    width: '100%',
    border: '1px solid black',
    marginBottom: 5,
    borderRadius: 10,
}

export default function Card(props) {
    return (
        <div style={card}>
            <h3>{props.day}</h3>
            <img src={forecastImg[props.imgName]} alt="Day Preview"/>
            <div>
                <span>High: {props.high}&deg;</span>
                <br/>
                <span>Low: {props.low}&deg;</span>
            </div>
            <p>Percipitation: {props.percipitation}%</p>
        </div>
    )
}
