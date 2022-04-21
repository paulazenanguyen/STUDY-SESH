import React, { Component } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Favorites from './components/Favorites'

class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Recipes />
        <Profile />
        <Favorites />
        <Footer />
      </>
    )
  }
}

export default App
