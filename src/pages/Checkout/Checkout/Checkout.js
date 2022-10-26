import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div className='text-center'>
            <h3>Course Enrollment Successful for {course.name}</h3>
        </div>
    );
};

export default Checkout;