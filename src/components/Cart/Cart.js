import { faLocation, faLocationDot, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
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
                    <p>weigth</p>
                </div>
                <div className="height">
                    <span>23yrs</span>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;