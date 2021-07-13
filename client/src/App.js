import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      
        <Router>
        <Route exact path='/' component={signup} />
        <Route exact path='/login' component={Login} />
          
        </Router>
      
      
    </div>
  );
}

export default App;
