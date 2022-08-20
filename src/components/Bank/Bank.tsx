import React from 'react';
import {useState} from 'react';
import {FilterType} from './../../App'

type MoneyPropsType = {
    moneyprops: Array<MoneyArrayType>,
    clicker: (nameButton: FilterType) => void
}

type MoneyArrayType = {
    banknots: string,
    value: number,
    number: string
}

export const Bank = (props: MoneyPropsType) => {

    return (
        <>
            <div className="bank">
                <div className="bankbuttons">
                    <button onClick={() => {
                        props.clicker('all')
                    }}>all
                    </button>
                    <button onClick={() => {
                        props.clicker('ruble')
                    }}>rubles
                    </button>
                    <button onClick={() => {
                        props.clicker('dollar')
                    }}>dollars
                    </button>
                </div>

                <div className="banklist">
                    <ul>
                        {props.moneyprops.map((elem, index) => {
                            return (
                                <li key={index}>
                                    <span style={{paddingRight: "20px"}}>{elem.banknots}</span><span>{elem.value}</span><span
                                    style={{paddingLeft: "20px"}}>{elem.number}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}