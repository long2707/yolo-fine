import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routers from '../Routers/Router';
import { BrowserRouter, Route } from 'react-router-dom';
const Layout = () => {
    return (
      <BrowserRouter>
        <Route render= { props =>(
            <div>
                <Header {...props} />
               
                <div className="container">
                    <div className="main">
                        <Routers />
                    </div>
                </div>
                <Footer />
            </div>
        )} />
      </BrowserRouter>
    )
}

export default Layout