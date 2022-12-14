import React from 'react'
import './lesson_4';

export const Lesson4 = () => {

    const handlePromise: any = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: function (paramName: string) {
            console.log(`Promise is resolved with data: ${paramName}`);
        },
        onError: function (paramName: string) {
            console.log(`Promise is rejected with error: ${paramName}`);
        }
    }

    // можно сделать тоже самое через асинхронную функцию (вернёт промис)
    // const onSuccess = async (paramName: string) => {
    //     console.log(`Promise is resolved with data: ${paramName}`);
    // }

    const createPromise = () => {
        handlePromise.promise = new Promise((resolve, reject) => {
            handlePromise.resolve = resolve;
            handlePromise.reject = reject;
        });
        //handlePromise.promise = promise;
        console.log('Promise created');
    }
    const resolvePromise = () => {
        handlePromise.resolve('RESOLVED');
        handlePromise.promise.then((data: any) => handlePromise.onSuccess(data));
    }
    const rejectPromise = () => {
        handlePromise.reject('REJECTED');
        handlePromise.promise.catch((data: any) => handlePromise.onError(data));
    }

    return (
        <div style={{
            marginBottom: '30px',
            border: '1px solid black',
            padding: '10px', marginTop: '10px'
        }}>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromise}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromise}>Reject Promise</button>
        </div>
    );
}