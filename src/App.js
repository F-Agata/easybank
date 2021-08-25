import React from 'react'

import './scss/_App.scss';

import Header from "./mainComponents/Header"
import LatestArticle from "./mainComponents/LatestArticles"
import NavigationMain from "./mainComponents/NavigationMain";
import WhyChoose from "./mainComponents/WhyChoose";
import Footer from "./mainComponents/Footer";

function App() {
  return (
    <div className="App">
      <NavigationMain/>
      <Header/>
      <WhyChoose/>
      <LatestArticle/>
      <Footer/>
    </div>
  );
}

export default App;
