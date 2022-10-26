import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div>
            <h3>Course Enrollment Successful for {course.name}</h3>
        </div>
    );
};

export default Checkout;