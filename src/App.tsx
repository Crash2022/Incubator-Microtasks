import React from 'react';
import './App.css';
import {Cars} from './Cars';

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
            <div style={{fontWeight: "bold", margin: "30px"}}>Hello, samurai!</div>
            <Cars carslist={topCars}/>
        </div>
    );
}

export default App;
