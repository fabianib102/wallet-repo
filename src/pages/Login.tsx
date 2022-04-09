
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


type LoginPageProps = {
    isAuth: boolean
}

const LoginPage: FC<LoginPageProps> = ({ isAuth }) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            return navigate("/");
        }
    }, [])

    return (
        <div>
            Es el login
        </div>
    )
}

export default LoginPage;