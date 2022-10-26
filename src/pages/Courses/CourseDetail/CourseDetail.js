import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDetail.css';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetail = () => {
    const course = useLoaderData();

    return (
        <div className='course-detail-container mb-5'>
            <Card className="text-center">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <h3 className='course-name'>{course.name}</h3>
                    <Pdf targetRef={ref} filename="course-detail.pdf">
                        {({ toPdf }) => <button onClick={toPdf}><FaCloudDownloadAlt className='download-icon'></FaCloudDownloadAlt></button>}
                    </Pdf>
                </Card.Header>
                <Card.Img src={course.img} className='course-img' />
                <Card.Body ref={ref}>
                    <Card.Text className='course-description'>
                        {course.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">
                        <Link to={`/checkout/${course.id}`} className='checkout-link'>Get premium access</Link>
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetail;