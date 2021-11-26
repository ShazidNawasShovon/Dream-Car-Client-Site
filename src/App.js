import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import AllVehicles from "./Pages/AllVehicles/AllVehicles";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login/Login";

import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Login/Purchase/Purchase";
import ResetPassword from "./Pages/Login/ResetPassword/ResetPassword";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allVehicles">
              <AllVehicles></AllVehicles>
            </Route>
            <PrivateRoute path="/purchase/:serviceId">
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute path="/contact">
              <ContactUS></ContactUS>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/resetPassword">
              <ResetPassword></ResetPassword>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
