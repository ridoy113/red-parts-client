import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center p-10 pb-24'>
            <p className='text-3xl'>1.How will you improve the performance of a React Application?</p>
            <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. </p>
            <p className='text-3xl mt-4'>2. What are the different ways to manage a state in a React application?</p>
            <p>There are four main types of state you need to properly manage in your React apps:
                <li>Local state.</li>
                <li>Global state.</li>
                <li>Server state.</li>
                <li>URL state.</li>
            </p>
            <p className='text-3xl mt-4'>3. How does prototypical inheritance work?</p>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            <p className='text-3xl mt-4'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
            <p>get – a function without arguments, that works when a property is read, set – a function with one argument, that is called when the property is set, enumerable – same as for data properties, configurable – same as for data properties.</p>

            <p className='text-3xl mt-4'>5. What is a unit test? Why should write unit tests?</p>
            <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
        </div>
    );
};

export default Blogs;