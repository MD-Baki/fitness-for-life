import { faAnglesRight, faBlog, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2><FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> Blog</h2>
            <div className="q-and-a">
                <h4><FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon> How Does React Actually Work?</h4>
                <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>
            </div>
            <div className="q-and-a">
                <h4><FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon> Differences between props and state ?</h4>
                <p>
                    <span>Props are used to pass data from one component to another.</span>
                    <span>The state is a local data storage that is local to the component only and cannot be passed to other components.</span>
                    <span>The this.setState property is used to update the state values in the component.</span>
                </p>
            </div>
            <div className="q-and-a">
                <h4><FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon> For what purpose do we use useEffect except api.</h4>
                <p>This is another useful hook for when we want to trigger an action when the component state changes, and not when the component mounts. You can consider it the ComponentWIllUpdate alternative for functional React. This one - calls the callback each time the state changes, triggering an action.</p>
            </div>
        </div>
    );
};

export default Blog;