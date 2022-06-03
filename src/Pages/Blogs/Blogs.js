import React from 'react';

const Blogs = () => {
  return (
    <section className='px-12'>
     <div className="card   bg-base-100 mb-7 shadow-xl">
            <div className="card-body">
              <h1 className='text-center text-orange-500 font-bold text-3xl'>How will you improve the performance of a React Application?</h1>
                <p className='text-center text-primary font-bold'>
                Before optimizing the React application, we need to understand how React updates its ui and how to measure the functionality of the application. To increase the performance of React, we need to update the state properly. Code needs to be optimized etc.
                The code needs to be dynamic, since there are several pictures on a page, all the pictures that are updated at the time of page loading can be rendered at once.
                </p>
            </div>
          </div>
     <div className="card mb-7  bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className='text-center text-orange-500 font-bold text-3xl'> What are the different ways to manage a state in a React application?</h1>
                <p className='text-center text-primary font-bold'>
                A React app has information users to use my session state to manage the state in different ways such as use official ID, permission, patched etc. And to use local states, to temporarily store user data and to track user values, and so on.
                </p>
            </div>
          </div>
     <div className="card mb-7  bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className='text-center text-orange-500 font-bold text-3xl'>How will you improve the performance of a React Application?</h1>
                <p className='text-center text-primary font-bold'>
                Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                </p>
            </div>
          </div>
     <div className="card  mb-7 bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className='text-center text-orange-500 font-bold text-3xl'>How does prototypical inheritance work?</h1>
                <p className='text-center text-primary font-bold'>
                First I will use useState to store the data from the array, then I will fetch it with useEffect, then I will store the data that I get in the state, then I will map the data, then if I want I can show the data through the card.
                </p>
            </div>
          </div>
     <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className='text-center text-orange-500 font-bold text-3xl'>What is a unit test? Why should write unit tests?</h1>
                <p className='text-center text-primary font-bold'>
                Unit Tests typically test functions, methods, and classes. It is short, cheap and fast to write and maintain. It is focused on one function. It is not dependent on any external systems. When a Unit Test fails, it is easy to identify the problem.
                Positive Testing - testing the code by giving valid data.
                Negative Testing - testing the code by giving the Invalid data.
                </p>
            </div>
          </div>
    </section>
  );
};

export default Blogs;


// 