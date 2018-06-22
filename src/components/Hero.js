import React, { Component } from 'react';
import HeroFloat from '../components/HeroFloat';
import HeroVideo from '../components/HeroVideo';
import { Experiment, Variant, emitter } from '@marvelapp/react-ab-test';

class HeroAB extends Component {

  render() {
    const onButtonClick = (e) => {
      this.refs.experiment.win();
    }

    emitter.addPlayListener(function (experimentName, variantName) {
      console.log(`Displaying experiment ${experimentName} variant ${variantName}`);
    });

    // Called when a 'win' is emitted, in this case by this.refs.experiment.win()
    emitter.addWinListener(function (experimentName, variantName) {
      console.log(`Variant ${variantName} of experiment ${experimentName} was clicked`);
    });
    return (
      <React.Fragment>
        <Experiment ref="experiment" name="My Example">
          <Variant name="A">
            <HeroFloat onClick={onButtonClick} />
          </Variant>
          <Variant name="B">
            <HeroVideo onClick={onButtonClick} />
          </Variant>
        </Experiment>
      </React.Fragment>
    );
  }
}

export default HeroAB