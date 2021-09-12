import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'
// import Login from './components/Login'
// import Signup from './components/Signup'

// <Route path='/login' component={Login} />
                     
// <Route path='/signup' component={Signup} />

const App = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/product/:productId'>
                        <ProductDetail />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route>
                        404 Page Not Found
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App 