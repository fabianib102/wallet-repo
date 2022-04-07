import React, { FC } from 'react';
import PrincipalRoute from './routes/PrincipalRoute';
import './App.css';

export interface IApp { }

const App: FC<IApp> = () => {
  return (
    <PrincipalRoute />
  );
}

export default App;
