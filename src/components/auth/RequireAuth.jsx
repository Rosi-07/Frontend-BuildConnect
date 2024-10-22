import {useLocation, Navigate, Outlet} from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuthStore from '../../hooks/auth/useAuth';

const RequireAuth = ({allowedRoles}) => {
    const auth = useAuthStore((state) => state.auth);
    const location = useLocation();

    if(!auth?.user?.role && !auth?.company?.role) {
       return <Navigate to="/login" state={{from: location}} replace />; 
    } 

    return (
        allowedRoles.includes(auth?.user?.role || auth?.company?.role)
            ? <Outlet />
            : auth?.user 
                ? <Navigate to="/unauthorized" />
                : <Navigate to="/login" state={{from: location}} replace />
    )
};
RequireAuth.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RequireAuth;