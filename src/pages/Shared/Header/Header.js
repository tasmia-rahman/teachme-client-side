import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src='https://cdn.dribbble.com/users/60166/screenshots/13967952/media/9ea8447026fdcadf66196aa38fcc0207.jpg?compress=1&resize=400x300&vertical=top' alt="" />
                    TeachMe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/home'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/faq'>FAQ</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;