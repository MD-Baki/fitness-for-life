import { faAnglesRight, faBlog, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2><FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> Blog</h2>
            <div className="q-and-a">
                <h4><FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon> What Is React And How Does It Actually Work?</h4>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                    <span>It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</span></p>
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
                <p>This is another useful hook for when we want to trigger an action when the component state changes, and not when the component mounts. You can consider it the ComponentWIllUpdate alternative for functional React. This one - calls the callback each time the state changes, triggering an action</p>
            </div>
        </div>
    );
};

export default Blog;