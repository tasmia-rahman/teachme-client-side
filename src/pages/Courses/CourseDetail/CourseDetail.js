import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDetail.css';
import { Container } from 'react-bootstrap';
import { FaCloudDownloadAlt } from "react-icons/fa";

const CourseDetail = () => {
    const course = useLoaderData();

    return (
        <Container className='mb-5'>
            <Card className="text-center">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <h3 className='course-name'>{course.name}</h3>
                    <FaCloudDownloadAlt className='download-icon'></FaCloudDownloadAlt>
                </Card.Header>
                <Card.Img variant="top" src={course.img} className='course-img' />
                <Card.Body>
                    <Card.Text className='course-description'>
                        {course.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Get premium access</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default CourseDetail;