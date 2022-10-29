import React from 'react';
import './App.css';
import {Lesson1} from './lessons/lesson1/lesson1';
// import './lessons/lesson2/lesson2';
import {Lesson3} from './lessons/lesson3/Lesson3';
import {Lesson4} from './lessons/lesson4/Lesson4';
import {Lesson5} from "./lessons/lesson5/Lesson5";
// import './lessons/lesson5/lesson5_log';
// import './lessons/lesson6/lesson6';
// import './lessons/lesson7/lesson7';
// import './lessons/lesson8/lesson8';

export const App = () => {
    return (
        <div className="container">
            <Lesson1 />
            <Lesson3 />
            <Lesson4 />
            <Lesson5 />
        </div>
    );
}