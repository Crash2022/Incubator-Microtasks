import React from 'react';
import {useState} from 'react';

type MoneyType = {
    money: Array<MoneyArrayType>
}

type MoneyArrayType = {
    banknots: string,
    value: number,
    number: string
}

export const Bank = () => {
    
    const [money, setMoney] = useState([
        { banknots: 'Dollars ', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars ', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS ', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars ', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars ', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS ', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars ', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS ', value: 50, number: ' v1234567890' }
      ])
    
    
    const clickHandlerAll = () => {
        console.log(1);
        let filteredMoney = money.filter((filterMoney) => filterMoney.banknots === 'RUBLS ');
    }

    const clickHandlerRub = () => {
        console.log(2);
        let filteredMoney = money.filter((filterMoney) => filterMoney.banknots === 'RUBLS ');
        return filteredMoney;
    }

    const clickHandlerDol = () => {
        console.log(3);
        let filteredMoney = money.filter((filterMoney) => filterMoney.banknots === 'Dollars ');
        return filteredMoney;
    }
      
    return (
        <>
        <button onClick={clickHandlerAll}>All</button>
        <button onClick={clickHandlerRub}>Rubles</button>
        <button onClick={clickHandlerDol}>Dollar</button>

        <div className="bank">
            <ul>
                {money.map((elem, index)=>{
                    return (
                        <li key={index}>
                            <span>{elem.banknots}</span><span>{elem.value}</span><span>{elem.number}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    );
}