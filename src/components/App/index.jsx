import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Register from 'pages/Register';
import MyProfil from 'pages/MyProfil';
import User from 'pages/Home/Users/User';
import Login from 'pages/Login';
import { store } from 'reduxx/Store';
import 'style.css'



const App = () => {

  return (
    <Provider store={store}>
      <div className="app">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/users/me">
              <MyProfil />
            </Route>
            <Route path="/users/:userSlug">
              <User />
            </Route>
          </Switch>
        </main> 
      </Router>
      </div>
    </Provider>
  );
};

export default App