import React from 'react';
//import Footer from "./components/Footer";
//import mainbg from './image/main-bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './components/App/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Signin setToken={setToken}/>
  }
  
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/">
            <Dashboard/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
