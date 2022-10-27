import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDetail.css';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Pdf from "react-to-pdf";
import { Container } from 'react-bootstrap';

const ref = React.createRef();

const CourseDetail = () => {
    const course = useLoaderData();

    return (
        <Container className='course-detail-container my-5'>
            <Card className="text-center">
                <Card.Header className='d-flex justify-content-end align-items-center'>
                    <Pdf targetRef={ref} filename="Course-detail.pdf">
                        {({ toPdf }) => <button onClick={toPdf}><FaCloudDownloadAlt className='download-icon'></FaCloudDownloadAlt></button>}
                    </Pdf>
                </Card.Header>
                <div ref={ref}>
                    <h3 className='text-center'>Course: <span className='blue-color'>{course.name}</span></h3>
                    <Card.Img src={course.img} className='course-img' />
                    <Card.Body>
                        <Card.Text className='course-description'>
                            {course.description}
                        </Card.Text>
                    </Card.Body>
                </div>
                <Card.Footer>
                    <Button variant="primary">
                        <Link to={`/checkout/${course.id}`} className='checkout-link'>Get premium access</Link>
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default CourseDetail;