import React, { Component } from "react";
import StackGrid, { transitions, easings } from "react-stack-grid";

const transition = transitions.scaleDown;
const home = () => (
    <div>
        <h1 align="middle"> Today is the day!! </h1>
        <h2 align="middle"><b>Click on one of the drop downs above to navigate!</b></h2>
        <img className="center" src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/movietheater-screen-seats-700x396.jpg"
            alt="Movie Theater" width="90%" height="90%"></img>

    </div>
);
class App extends Component {
    render() {
        const { width } = this.props;

        return (

            <div >
                <h2 align="middle">There are multiple areas for parking.</h2>
                <h2 align="middle">Parking is free on commencement day. There is parking next to the Green Music Center.</h2>
                <h2 align="middle"> If you are unable to find parking, there is parking south of the GMC. </h2>
                <h2 align="middle"> Green Music Center (Lots L,M,N,O) provide the closest parking. There are shuttles roaming around in the parking lots in case you don't want to walk.</h2>
                
                <h2 align="middle">Click the image below to download.<br/><br/>MAKE SURE TO CLICK ALLOW IF THERE IS A POP UP, OTHERWISE YOU WILL NOT
                 BE ABLE TO DOWNLOAD AFTER THE FACT.</h2>
                <a href="https://commencement.sonoma.edu/sites/commencement/files/19-026_commencement_2019_map_v1.pdf">
                <img className="center" src={require("./Pictures/map.PNG")}
                 alt="Map" width="90%" height="90%"></img>
                 </a>

                <a href="http://web.sonoma.edu/visit/pdf/icon.pdf">
                <img className="center" src={require("./Pictures/campus.PNG")}
                alt="Map" width="90%" height="90%"></img>
                </a>
            </div>



        );
    }
}
export default App;