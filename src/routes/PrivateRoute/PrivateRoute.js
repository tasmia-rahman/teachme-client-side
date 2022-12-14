import React from 'react';
import { useContext } from 'react';
// import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './PrivateRoute.css';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(!user);
    const location = useLocation();

    if (loading) {
        return <div className='text-center mt-5'>

            {/* <Spinner animation="border" /> */}
            <FadeLoader className='spinner' color="#3ca1db" />
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;