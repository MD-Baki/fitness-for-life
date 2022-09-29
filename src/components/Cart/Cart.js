import { faLocation, faLocationDot, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

const Cart = ({ cart }) => {

    const [breakTime, setBreakTime] = useState(0)

    let totalDuration = 0;
    for (const exercise of cart) {
        totalDuration = totalDuration + exercise.duration;
    }

    const showTost = () => {
        toast("Congratulation You Have Completed Your Task!", {
            position: "top-center",
        });
    }

    return (
        <div className='cart-container'>
            <div className="user">
                <FontAwesomeIcon className='user-img' icon={faUserSecret}></FontAwesomeIcon>
                <div className="user-info">
                    <h2>MD. Abdulla</h2>
                    <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Agrabad, Chittagong</p>
                </div>
            </div>
            <div className="user-details">
                <div className="height">
                    <span>5.5fit</span>
                    <p>Height</p>
                </div>
                <div className="height">
                    <span>65kg</span>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <span>23yrs</span>
                    <p>Age</p>
                </div>
            </div>
            <div className="activetis">
                <h4>Add A Break</h4>
                <div className="break-time">
                    <p onClick={() => setBreakTime(20)}>20s</p>
                    <p onClick={() => setBreakTime(40)}>40s</p>
                    <p onClick={() => setBreakTime(60)}>60s</p>
                    <p onClick={() => setBreakTime(80)}>80s</p>
                    <p onClick={() => setBreakTime(90)}>90s</p>
                </div>
                <h4>Exercise Details</h4>
                <div className="exercise-entry">
                    <p>Exercise time: {totalDuration} sec</p>
                    <p>Break time: {breakTime} sec</p>
                </div>
            </div>
            <button onClick={showTost}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Cart;