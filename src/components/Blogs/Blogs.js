import React from 'react';

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-16 gap-6 '>
            <div className='bg-green-100 rounded-lg'>
                <h3 className='mt-2 font-bold text-lg'>What is context API?</h3>
                <p className='text-left p-4'>
                    <span className='font-medium'>Answer: </span>The React Context API is all about enabling you to send data to multiple components outside of the standard unidirectional data flow.It is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className='bg-red-100 rounded-lg'>
                <h3 className='mt-2 font-bold text-lg'>What is semantic tag?</h3>
                <p className='text-left p-4'>
                    <span className='font-medium'>Answer: </span>Semantic HTML elements are those that clearly describe their meaning in a human and machine-readable way. Elements such as header atg, footer tag, and article tag are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
                </p>
            </div>
        </div>
    );
};

export default Blogs;