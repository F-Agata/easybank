import React from 'react'

import './scss/_App.scss';

import Header from "./mainComponents/Header"
import LatestArticle from "./mainComponents/LatestArticles"
import NavigationMain from "./mainComponents/NavigationMain";
import WhyChoose from "./mainComponents/WhyChoose";

function App() {
  return (
    <div className="App">
      <NavigationMain/>
      <Header/>
      <WhyChoose/>
      <LatestArticle/>

    </div>
  );
}

export default App;
