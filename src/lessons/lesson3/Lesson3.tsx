import React, { useState } from 'react';
import {API} from './API';
import './lesson_3';

export const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState('');

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(data => {
                setSearchResult(data.Title);
                if (!data.Title) {
                    setSearchResult('Ничего не найдено!')
                }
            })
            .catch(error => {
                console.log(error);
            })
        setSearchName('');
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(response => {
                setSearchResultByType(response.data.Title);
                if (!response.data.Title) {
                    setSearchResultByType('Ничего не найдено!')
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    Результат поиска: {searchResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div style={{marginBottom: '50px'}}>
                    Результат поиска: {searchResultByType}
                </div>
            </div>
        </div>
    );
}