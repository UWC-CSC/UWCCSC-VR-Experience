import * as React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './Spacing.css';
import './Typography.css';

import ContinueButton from './ContinueButton';
import HomeBackground from "./HomeBackground.jpg";
import UWCLogo from "./UWCLogo";

class HomePage extends React.Component {
  public render() {
    return (
      <div className="HomePage" style={{backgroundImage: `url(${HomeBackground})`}}>
        <div className="v-center flex-v">
          <UWCLogo />
          <h5 className="padded-text m-top-m">
            The UWC Changshu China VR Experience offers you the possibility to explore our beautiful campus, meet 
            amazing people and take part in the events that take place.
          </h5>
          <ContinueButton />
        </div>

        <footer className="m-bot-xs">
          <Link to="/about/"><h6>About</h6></Link>
        </footer>
      </div>
    );
  }
}

export default HomePage;