import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div className='text-center my-5'>
            <h3>Course Enrollment Successful for <span className='blue-color'>{course.name}</span></h3>
        </div>
    );
};

export default Checkout;