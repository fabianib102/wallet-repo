import React, { FC } from 'react';
import PrincipalRoute from './routes/PrincipalRoute';
import './App.css';
import NavHeader from './components/NavHeader';
import { Container } from 'react-bootstrap'

type AppProps = {};

const App: FC<AppProps> = () => {
  return (
    <>
      <NavHeader />
      <Container fluid>
        <PrincipalRoute />
      </Container>
    </>
  );
}

export default App;
