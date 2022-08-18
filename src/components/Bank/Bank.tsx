import React from 'react';
import {useState} from 'react';

type MoneyPropsType = {
    moneyprops: Array<MoneyArrayType>,
    clicker: any
}

type MoneyArrayType = {
    banknots: string,
    value: number,
    number: string
}

export const Bank = (props: MoneyPropsType) => {

    return (
        <>
        <button onClick={()=>{props.clicker('all')}}>all</button>
        <button onClick={()=>{props.clicker('ruble')}}>rubles</button>
        <button onClick={()=>{props.clicker('dollar')}}>dollars</button>

        <div className="bank">
            <ul>
                {props.moneyprops.map((elem, index)=>{
                    return (
                        <li key={index}>
                            <span style={{paddingRight:"20px"}}>{elem.banknots}</span><span>{elem.value}</span><span style={{paddingLeft:"20px"}}>{elem.number}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    );
}