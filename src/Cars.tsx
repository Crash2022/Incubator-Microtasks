import React from 'react';

type CarsPropsType = {
    carslist: Array<TopCars>
}

type TopCars = {
    manufacturer: string,
    model: string
}

export const Cars = (props: CarsPropsType) => {
    return (
        <table style={{border: "2px solid black"}}>
            <tr style={{border: "1px solid black"}}>
                <td>№</td>
                <td>manufacturer</td>
                <td>model</td>
            </tr>

            {props.carslist.map((elem, index) => {
                return (
                    <tbody>
                    <tr style={{border: "1px solid black"}}>
                        <td>{index + 1}</td>
                        <td>{elem.manufacturer}</td>
                        <td>{elem.model}</td>
                    </tr>
                    </tbody>
                );
            })}
        </table>
    );
}