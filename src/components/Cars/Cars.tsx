import React from 'react';

type CarsPropsType = {
    carslist: Array<TopCars>
}

type TopCars = {
    id: number,
    manufacturer: string,
    model: string
}

export const Cars = (props: CarsPropsType) => {

    return (
        <div className="cars">
            <table style={{border: "2px solid black", marginBottom: "50px"}}>
                <tr style={{border: "1px solid black"}}>
                    <td>№</td>
                    <td>manufacturer</td>
                    <td>model</td>
                </tr>

                {props.carslist.map((elem, index) => {
                    return (
                        <tbody key={index}>
                        <tr style={{border: "1px solid black"}}>
                            <td>{index + 1}</td>
                            <td>{elem.manufacturer}</td>
                            <td>{elem.model}</td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}