import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './Courses.css';
import Course from '../Course/Course';
import Container from 'react-bootstrap/Container';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <Container className='courses text-center'>
            <ListGroup>
                {
                    courses.map(course => <ListGroup.Item><Link to={`/courses/${course.id}`}>{course.name}</Link></ListGroup.Item>)
                }
            </ListGroup>
            <Container className='courses-container mb-5'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </Container>
        </Container>
    );
};

export default Courses;