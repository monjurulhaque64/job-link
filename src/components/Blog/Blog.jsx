import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="bg-secondary text-white p-4 rounded-5 shadow-lg mb-3 border border-5">
        <h4>When should you use context API?</h4>
        <p>
        Context provides a convenient way to share information across various parts of an app without the complexity of passing it through multiple components. It acts as a container, allowing us to store and share data seamlessly among different pieces, eliminating the need for meticulous one-by-one passing between components.
        </p>
      </div>
      <div className="bg-secondary text-white p-4 rounded-5 shadow-lg mb-3 border border-5">
        <h4>What is a custom hook?</h4>
        <p>
        A custom hook acts as a versatile solution when we encounter repetitive tasks, such as counting or fetching data, in different areas of our app. It functions like a magic spell, enabling us to perform those tasks effortlessly in various locations without the need for redundant code duplication. With custom hooks, we can streamline our development process and avoid unnecessary repetition.
        </p>
      </div>
      <div className="bg-secondary text-white p-4 rounded-5 shadow-lg mb-3 border border-5">
        <h4>What is useRef?</h4>
        <p>
        In our app, there are instances where we need to retain certain information, such as tracking the number of consumed cookies or recalling previous activities after interruptions. useRef acts as a special note that aids in remembering such details across different interactions, ensuring they are not forgotten. In React, useRef is a hook that provides a mutable ref object capable of persisting values between renders, offering a convenient solution for maintaining data continuity.
        </p>
      </div>
      <div className="bg-secondary text-white p-4 rounded-5 shadow-lg mb-3 border border-5">
        <h4>What is useMemo?</h4>
        <p>
        Sometimes, certain tasks in web development, such as tidying up a cluttered room or searching for an item in a large pile, can be time-consuming. In such cases, useMemo comes to the rescue by providing a clever way to save time. It allows us to remember the previous execution and avoid redoing it repeatedly. In React, useMemo is a hook that memoizes the result of a function, ensuring it is recalculated only when its dependencies change. This optimization helps optimize performance and avoid unnecessary computations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
