import './App.css';
import { Component } from 'react';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div className="wrapper">
            <Sidebar />
          
          <div className="content">
            <Home /> 
          </div>
        </div>
   
    )
  }
}


export default App;
