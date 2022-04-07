import React, { FunctionComponent } from 'react';
import ButtonCustom from '../components/ButtonCustom';

export interface IHomePage {};

const HomePage: FunctionComponent<IHomePage> = () => {
    return (
        <div>
            Es la home
            <ButtonCustom/>
        </div>
    )
}

export default HomePage;