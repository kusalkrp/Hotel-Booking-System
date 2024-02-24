import React from 'react'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import Routers from '../../router/Routers'
import BotpressWebchat from '../chatbot/BotpressWebchat';





const Layout = () => {
  return (
    <>
      
      <BotpressWebchat />
    
  
      <Header />
      <Routers/>
      <Footer/>
      
    
    </>
  )
}

export default Layout