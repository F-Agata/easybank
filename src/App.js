import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import './scss/_App.scss'
import theme from './basicStyle/theme'

import Header from './mainComponents/Header'
import LatestArticle from './mainComponents/LatestArticles'
import NavigationMain from './mainComponents/NavigationMain'
import WhyChoose from './mainComponents/WhyChoose'
import Footer from './mainComponents/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavigationMain />
        <Header />
        <WhyChoose />
        <LatestArticle />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
