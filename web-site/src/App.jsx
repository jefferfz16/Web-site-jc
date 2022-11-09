import './style.css';
import React from "react";
import ScrollProgress from './Components/bar-progress';
import Header from './Components/header';
import Intro from './Components/intro';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollProgress />
      <Intro />
    </div>
  );
}

export default App;
