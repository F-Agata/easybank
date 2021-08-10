import React from 'react'

import './scss/_App.scss';
import NavigationMain from "./mainComponents/NavigationMain";
import Header from "./mainComponents/Header"
import WhyChoose from "./mainComponents/WhyChoose";

function App() {
  return (
    <div className="App">
      <NavigationMain/>
      <Header/>
      <WhyChoose/>

    </div>
  );
}

export default App;
