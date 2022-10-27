import React from 'react'
import './lesson_4';

export const Lesson4 = () => {

    const handlePromise = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: function(paramName: any) {
            console.log(`Promise is resolved with data: ${paramName}`);
        },
        onError: function(paramName: any) {
            console.log(`Promise is rejected with error: ${paramName}`);
        }
    }

    const createPromise = () => {
        return new Promise((res, rej) => {

        })
    }

    return (
        <div style={{marginBottom: '30px',
            border: '1px solid black',
            padding: '10px', marginTop: '10px'
        }}>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise'>Resolve Promise</button>
            <button id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}