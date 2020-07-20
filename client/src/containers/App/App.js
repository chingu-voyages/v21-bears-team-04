import React from 'react';
import Nav from '../../components/Nav/Nav';
import { Footer } from '../../components';
import Homepage from '../../components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
