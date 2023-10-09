import React from 'react';
import { Hello } from './components/Hello';
import { Welcome } from './components/Welcome';
import { Footer } from './components/Footer';

function App() {
  const broj = 1;
  let fraza = 'string vrednost';
  var karakter = 'c';
  return (
    <div id='app'>
      <Hello/>
      <h2>hello from my first React App again</h2>
      <Welcome /> {/* Use the "Welcome" component */}
      <hr/>
      <p>{5+3}</p>
      <h2>Fraza: {broj}</h2>
      <h4>Broj{fraza}</h4>
      <h6>Karakter na denot: {karakter}</h6>
      <Footer /> {/* Use the "Footer" component */}
      {/* <Goobye/> */}
    </div>
  );
};

export default App;