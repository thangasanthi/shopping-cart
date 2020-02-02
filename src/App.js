import React, { Component, lazy, Suspense } from 'react';
import "./App.css";
import { HashRouter, Route, Switch } from 'react-router-dom';

const ShoppingList = lazy(() => import('./components/ShoppingList/index.js'));
const CartList = lazy(() => import('./components/Cart/index.js'));
class App extends Component {
  render() {
    return (
      <Suspense fallback={'Loading...'}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={ShoppingList} />
            <Route exact path="/cart" component={CartList} />
          </Switch>
        </HashRouter>
      </Suspense >
    );
  }




}

export default App;