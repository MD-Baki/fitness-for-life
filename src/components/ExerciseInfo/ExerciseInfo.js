import { faCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ExerciseInfo.css'

const ExerciseInfo = (props) => {

    const { handleAddToList, info } = props;
    const { name, age, details, duration, img } = info;

    return (
        <div className='exercise-info'>
            <img src={img} alt="" />
            <div className="exercise-details">
                <h4>{name}</h4>
                <p>{details}</p>
                <h6>For Age: {age}</h6>
                <h6>Time Required: {duration}s</h6>
            </div>
            <button onClick={() => handleAddToList(info)}>
                <p>Add To List</p>
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ExerciseInfo;