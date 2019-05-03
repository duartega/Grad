import React, { Component } from "react";
import StackGrid, { transitions, easings } from "react-stack-grid";
import sizeMe from 'react-sizeme';
import LazyLoad from 'react-lazyload';

const transition = transitions.scaleUp;

function importAll(r) {
    let images = [];
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('./Pictures', false, /\.(jpe?g|JPE?G)$/));

class App extends Component {
    render() {
        const { width } = this.props;
        let names = []

        for (let elem in images) {
            names.push(elem)
            }

        return (
            <StackGrid
                monitorImagesLoaded={true}
                columnWidth={100}
                duration={600}

                easing={easings.cubicOut}
                appearDelay={60}
                appear={transition.appear}
                appeared={transition.appeared}
                enter={transition.enter}
                entered={transition.entered}
                leaved={transition.leaved}
                columnWidth={width <= 768 ? '100%' : '33.3%'}
            >

                {names.map(function(name, index){
                    return (
                        <div  className="grid-item">
                        <LazyLoad once>
                    <img src={images[`${name}`]} />
                    </LazyLoad>
                    </div>
                    )
                })}

            </StackGrid>
        );
    }
}
export default App;