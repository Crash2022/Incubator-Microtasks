import React from 'react';
/* import {useState} from 'react'; */
import './App.css';
import {Cars} from './components/Cars/Cars';
import {Counter} from './components/Counter/Counter';
import {Bank} from './components/Bank/Bank';
import {Button} from './components/Button/Button';

function App() {

    const topCars = [
        {id: 10, manufacturer: 'BMW', model: 'm5cs'},
        {id: 20, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 30, manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
            <div style={{fontWeight: "bold", margin: "30px"}}>Hello, samurai!</div>
            {/* <Cars carslist={topCars}/> */}
            <Counter />
            <Bank />
        </div>
    );
}

export default App;
