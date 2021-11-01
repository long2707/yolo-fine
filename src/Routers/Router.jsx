import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../page/Home';
import Product from '../page/Product';
import Cart from '../page/Cart';
import Catalog from '../page/Catalog';
const Routers = () => {
    return (
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/catalog/:slug' component ={Product}/>
          <Route path='/catalog' component ={Catalog} />
          <Route path ='/cart' component={Cart} />
        </Switch>
    )
}

export default Routers
