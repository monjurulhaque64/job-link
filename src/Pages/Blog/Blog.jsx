import React from 'react';
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto mt-10 mb-10'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        When should you use context API?
                    </div>
                    <div className="collapse-content">
                        <p>Sometimes, in our app, we encounter situations where we need to share information between different parts or components. However, passing this information through multiple layers of components can become confusing and lead to messy code. In such cases, React's Context comes to the rescue.
                            <br />

                            Context is like a special box or container that allows us to store and share data with many components without having to pass it down through each component individually. It provides a way to create global or shared state that can be accessed by any component within the application.</p>
                    </div>
                </div><div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>Sometimes, we find ourselves needing to perform similar tasks or operations in different parts of our application. For example, counting occurrences, making API requests, or accessing information from the user's device. However, repeating the same code across multiple components can lead to code duplication and maintenance issues.
                            <br />

                            That's where custom hooks come to the rescue! Custom hooks are like magic spells or reusable functions that encapsulate certain logic or behavior, allowing us to perform common tasks easily in various parts of our app without repetition.</p>
                    </div>
                </div><div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is useRef?
                    </div>
                    <div className="collapse-content">
                        <p>In our app, there are times when we need to remember certain values or information between different renders or function calls. For example, tracking the number of cookies we've eaten or storing a reference to a previous state before we got distracted.

                            In these situations, useRef comes to our rescue! useRef is like a special note or reference that allows us to persist values or references across renders without forgetting them.</p>
                    </div>
                </div><div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is useMemo?
                    </div>
                    <div className="collapse-content">
                        <p>Sometimes, certain tasks in web development can be time-consuming, just like cleaning up a really messy room or finding a specific toy in a large pile. In the world of web development, we have a special tool called useMemo that allows us to save time by remembering the result of a function from previous computations. This means that we don't have to perform the same computations repeatedly whenever they are needed.
                            <br />

                            In React, useMemo is a hook that allows us to memoize the result of a function so that it is only recomputed when its dependencies change. By providing an array of dependencies, we can tell React to recompute the memoized value only if any of those dependencies have changed. This can be especially useful when dealing with expensive calculations or complex data transformations.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;