import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ExerciseInfo from '../ExerciseInfo/ExerciseInfo';
import './Exercise.css'

const Exercise = () => {
    const [exerciseInfo, setexerciseInfo] = useState([])

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setexerciseInfo(data))
    }, [])

    return (
        <div className='exercise-container'>
            <div className='left-sec'>
                <div className="header">
                    <h1> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness For Life</h1>
                    <p>Select today’s exercise</p>
                </div>
                <div className="info-container">
                    {
                        exerciseInfo.map(info => <ExerciseInfo
                            key={info.id}
                            info={info}
                        ></ExerciseInfo>)
                    }
                </div>
            </div>
            <div className="fitness-cart">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Exercise;