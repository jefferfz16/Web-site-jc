import './style.css';
import React from "react";
import ScrollProgress from './Components/bar-progress';
import Header from './Components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollProgress />
    </div>
  );
}

export default App;
