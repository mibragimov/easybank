import React from 'react';
import { Container } from 'reactstrap';
import { Landing } from './components/landing/Landing';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container fluid className="overflow-hidden px-0">
        <Landing />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export { App };
