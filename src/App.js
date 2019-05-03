import './App.css';
import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Images from './Images';
import Home from './Home';
// import axios from './ConfigAxios';



class App extends Component {

  // componentDidMount () {
  //   console.log("Component did mount")
  //   //axios.post('advisee/post/');
  //   console.log(axios.post(`advisee/post/${987}/${"Jevan"}/${"Smith"}/${987}`));
  // }

  render() {

    return (
        <div className="App">
            <Home/>

          {/*<Route exact path="/Login" render={(props) => <Signin/>}/>*/}
          {/*<Route exact path="/" render={(props) => <Images/>}/>*/}
        </div>
    );
  }
}

export default App;
