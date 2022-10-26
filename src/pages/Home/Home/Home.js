import React from 'react';
import background from '../../../assets/images/background.jpg';
import Container from 'react-bootstrap/Container';
import './Home.css';

const Home = () => {
    return (
        <Container fluid>
            <div className='banner'>
                <img src={background} alt="" />
                <p>WELCOME TO THE TEACHME</p>
            </div>
        </Container>
    );
};

export default Home;