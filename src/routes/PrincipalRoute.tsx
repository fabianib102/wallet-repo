
import React, { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from "../components/PrivateRoute";
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

const PrincipalRoute: FC = () => {

    const [isAuth, setIsAuth] = useState(true)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute
                        isAuthenticated={isAuth}
                        authenticationPath={'/login'}
                        outlet={<HomePage />}
                    />}
                />

                <Route path='login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrincipalRoute;