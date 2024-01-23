import React from 'react';
import RandomQuote from './RandomQuote';
import quotes from './quotes';

function App() {
  return (
    <div className="App">
      <RandomQuote quotes={quotes} />
    </div>
  );
}

export default App;
