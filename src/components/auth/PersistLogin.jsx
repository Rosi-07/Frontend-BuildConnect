import {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";
import useAuthStore from "../../hooks/auth/useAuth";
import useRefreshToken from "../../hooks/auth/useRefreshToken";
import LoadingScreen from '../../pages/loading/Loading';

const PersistLogin = () => {
    const auth = useAuthStore((state) => state.auth);
    const persist = useAuthStore((state) => state.persist);
    const refreshToken = useRefreshToken();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refreshToken();
            } catch (error) {
                console.error(error);
            }
            finally{
                isMounted && setIsLoading(false);
            }
        };

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => {
            isMounted = false;
        };
      
    }, [])

    return (
        <>
           {
                !persist
                    ? <Outlet />
                    : isLoading
                        ? <LoadingScreen />
                        : <Outlet />
           }
        </>
    );
    

};

export default PersistLogin;