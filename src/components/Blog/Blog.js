import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2><FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> Blog</h2>
            <div className="q-and-a">

            </div>
        </div>
    );
};

export default Blog;