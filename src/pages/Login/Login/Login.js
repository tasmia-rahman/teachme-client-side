import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='form-div'>
            <h3 className='text-center mb-5'>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className='d-block mb-3'>
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;