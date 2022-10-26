import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [toggleTheme, setToggleTheme] = useState(false);

    const handleLogOut = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src='https://cdn.dribbble.com/users/60166/screenshots/13967952/media/9ea8447026fdcadf66196aa38fcc0207.jpg?compress=1&resize=400x300&vertical=top' alt="" />
                    TeachMe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/home' className='nav-link'>Home</Link>
                        <Link to='/courses' className='nav-link'>Courses</Link>
                        <Link to='/blog' className='nav-link'>Blog</Link>
                        <Link to='/faq' className='nav-link'>FAQ</Link>
                        <button className={`theme-btn ${toggleTheme ? 'light' : 'dark'}`} onClick={() => setToggleTheme(!toggleTheme)}>{toggleTheme ? 'Light' : 'Dark'}</button>
                    </Nav>
                    <Nav className="ms-auto">
                        {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Link className='nav-link' onClick={handleLogOut}>Log out</Link>
                                </>
                                :
                                <>
                                    <Link to='/register' className='nav-link'>Register</Link>
                                    <Link to='/login' className='nav-link'>Login</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;