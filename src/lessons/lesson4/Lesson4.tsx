import React from 'react'
import './lesson_4';

export const Lesson4 = () => {
    return (
        <div style={{marginBottom: '30px',
            border: '1px solid black',
            padding: '10px', marginTop: '10px'
        }}>
            <button id='btn-create-promise'>Create Promise</button>
            <button id='btn-resolve-promise'>Resolve Promise</button>
            <button id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}