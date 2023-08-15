import React from 'react';
import Header from './components/Header';
import Scarecrow from './components/Scarecrow';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <header>
      <Header/>
      </header>
      <main>
      <Scarecrow/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
