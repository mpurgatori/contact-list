import React from 'react';
import './App.css';
import List from './components/List'

function App() {

  const listNum = ['One', 'Two']

  return (
    <div className="App">
      <header className="App-header">
        {
          listNum.map(num => {

             return <List listNumber={num} />

          })
        }
      </header>
    </div>
  );
}

export default App;
