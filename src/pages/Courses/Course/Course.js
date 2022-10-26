import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
    const { id, name, img } = course;
    return (
        <Card>
            <Card.Img variant="top" src={img} className="courses-card-img" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary">
                    <Link className='see-more-link' to={`${id}`}>See more</Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Course;