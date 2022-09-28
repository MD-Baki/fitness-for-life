import React, { useEffect, useState } from 'react';
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
            <div className="info-container">
                {
                    exerciseInfo.map(info => <ExerciseInfo
                        key={info.id}
                        info={info}
                    ></ExerciseInfo>)
                }
            </div>
            <div className="fitness-container">
                right side
            </div>
        </div>
    );
};

export default Exercise;