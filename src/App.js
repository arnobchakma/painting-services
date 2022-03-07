import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import NavBar from './components/Shared/Navbar/Navbar';
import CommonBar from './components/Shared/CommonBar/CommonBar';
import AddService from './components/Dashboard/AddService/AddService';
import Services from './components/Home/Services/Services';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AllAdmins from './components/Dashboard/AllAdmins/AllAdmins';
import Orders from './components/Orders/Orders';
import AddReview from './components/Home/Testimonial/AddReview';
import Testimonial from './components/Home/Testimonial/Testimonial';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyOrder from './components/Orders/MyOrder';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ScrollToTop from './components/scroll/ScrollToTop';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="main-wrapper">
        <Router>
          <ScrollToTop />
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/common">
              <CommonBar></CommonBar>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/addAnAdmin">
              <AddAdmin></AddAdmin>
            </PrivateRoute>
            <PrivateRoute path="/adminPanel">
              <AllAdmins></AllAdmins>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Testimonial></Testimonial>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>

          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
