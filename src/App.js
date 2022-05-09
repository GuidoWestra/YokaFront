import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Navigation/Footer";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Profile from "./pages/ProfilePage";
import Search from "./pages/SearchPage";
import Shop from "./pages/ShopPage";
import Cart from "./pages/CartPage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";



function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
