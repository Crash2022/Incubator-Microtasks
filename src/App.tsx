import React, {useState} from 'react';
/* import {useState} from 'react'; */
import './App.css';
import {Cars} from './components/Cars/Cars';
import {Counter} from './components/Counter/Counter';
import {Bank} from './components/Bank/Bank';
import {Button} from './components/Button/Button';

/* type MoneyArrayType = {
    banknots: string,
    value: number,
    number: string
} */

export type FilterType = 'all' | 'dollar' | 'ruble'

/* type CarsType = {
    id: number,
    manufacturer: string,
    model: string
} */

function App() {

    const topCars = [
        {id: 10, manufacturer: 'BMW', model: 'm5cs'},
        {id: 20, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 30, manufacturer: 'Audi', model: 'rs6'}
    ]


    const [money, setMoney] = useState/* <Array<MoneyArrayType>> */([
        { banknots: 'dollar', value: 100, number: 'a1234567890' },
        { banknots: 'dollar', value: 50, number: 'z1234567890' },
        { banknots: 'ruble', value: 100, number: 'w1234567890' },
        { banknots: 'dollar', value: 100, number: 'e1234567890' },
        { banknots: 'dollar', value: 50, number: 'c1234567890' },
        { banknots: 'ruble', value: 100, number: 'r1234567890' },
        { banknots: 'dollar', value: 50, number: 'x1234567890' },
        { banknots: 'ruble', value: 50, number: 'v1234567890' }
    ])

    const [filter, setFilter] = useState<FilterType>('all');
    let filteredMoney = money;

    if (filter === 'dollar') {
        filteredMoney = money.filter((element)=>element.banknots === 'dollar');
    }
    if (filter === 'ruble') {
        filteredMoney = money.filter((element)=>element.banknots === 'ruble');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    const title= 'Stupid Button';
    const handler = () => {
        console.log('I do nothing!');
    }

    return (
        <div className="App">
            <div style={{fontWeight: "bold", margin: "30px"}}>Hello, samurai!</div>
            <Cars carslist={topCars}/>
            <Button name={title} callBack={handler}/>
            <Counter />
            <Bank moneyprops={filteredMoney} clicker={onClickFilterHandler}/>
        </div>
    );
}

export default App;
