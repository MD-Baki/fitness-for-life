import React from 'react';
import './ExerciseInfo.css'

const ExerciseInfo = (props) => {

    const { name, age, details, duration, img } = props.info

    return (
        <div className='exercise-info'>
            <img src={img} alt="" />
        </div>
    );
};

export default ExerciseInfo;