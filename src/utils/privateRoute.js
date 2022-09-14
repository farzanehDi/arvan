import { Navigate } from 'react-router-dom';

const PrivateRoute=( {children} )=> {

    const token=localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).token;

    // if (!token) {
    //
    //     return <Navigate to="/login" replace/>
    // }

    return children;
}

export default PrivateRoute;