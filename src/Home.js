import React, { Component } from "react";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Images from './Images';
import Parking from './Parking';
import Commencement from './Commencement';

const home = () => (
    <div>
        <h1 align="middle"> May 18th is the day!! </h1>
        <h2 align="middle"><b>Hey everyone, May 18th is the big day and I'm sure you're wondering how to get to campus, where to go, and what to do. 
            The links above are everything you need to know for May 18th including dinner plans!</b></h2>
            <h2 align="middle">Below is my "poster" of being one of the faces of Sonoma State University.
                I was chosen as one of the faces of Sonoma State University because I was active in the University
                and I helped do many things for the University.</h2>
            <h2 align="middle">The day of the graduation, there will be an update to this website where you are able to see pictures of me from
             birth until graduation. These are more for memories than anything else. Make sure to revisit this site the day of.
             If the site goes down, meaning you are unable to access the site, let me know. The schools server auto logs me out after a
              cetain amount of time. That basically means, the website is not available to the web. Also, click the image if you want to download it to zoom in.
               Otherwise, just pinch to zoom on your phone.</h2>
        
        <img className="center" src={require("./Pictures/poster.png")}
            alt="Movie Theater" width="90%" height="90%"></img>

    </div>
);




class Home extends Component {
    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pictures">Pictures</Link></li>
                    <li><Link to="/parking">Parking</Link></li>
                    <li><a href="https://goo.gl/maps/3UUFErqbrXHZG2LJ6">Directions To School</a></li>
                    <li><a href="https://maps.app.goo.gl/MPepuRbbMhAteUEH9">Directions To Dinner</a></li>
                    <li><Link to="/commencement">Commencement & Info</Link></li>
                    <li><Link to="/projects">Projects</Link></li>

                </ul>
                <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/pictures" render={(props) => <Images />} />
                <Route exact path="/parking" render={(props) => <Parking />} />
                <Route exact path="/commencement" render={(props) => <Commencement />} />
                </Switch>
                {/* <Route exact path="/projects" render={(props) => <Commencement />} /> */}
            </div>
        );
    }
}
export default Home;