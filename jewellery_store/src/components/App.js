import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from '../components/pages/Cart';
import { CartProvider } from 'react-use-cart';
import BlogDetail from './pages/BlogDetail';
import Sec13 from './Sec13';
import Sec14 from './Sec14';
import ErrorPage from './pages/ErrorPage';


const App = () => {
    return (
        <Router>
            <CartProvider>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/product/:id">
                        <ProductDetail />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/blogDetail">
                        <BlogDetail />
                    </Route>
                    <Route
                     path="*">
                         <ErrorPage />
                     </Route>
                </Switch>
            </CartProvider>
        </Router>
    );
}

export default App
