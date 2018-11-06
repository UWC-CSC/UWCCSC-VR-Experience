import * as React from 'react';
import './App.css';
import './Spacing.css';
import './Typography.css';

import HomeBackground from "./HomeBackground.jpg";
import UWCLogo from "./UWCLogo";

class App extends React.Component {
  public render() {
    return (
      <div className="App" style={{backgroundImage: `url(${HomeBackground})`}}>
        <div className="v-center flex-v">
          <UWCLogo />
          <h5 className="padded-text m-top-m">
            The UWC Changshu China VR Experience offers you the possibility to explore our beautiful campus, meet 
            amazing people and take part in the events that take place.
          </h5>
          <button className="m-top-m"
              style={{backgroundColor: '#931621', border: 0, borderRadius: '3px', boxShadow: '0 0.2rem 0.2rem #000000',
              color: '#E0FFFE', fontFamily: 'Roboto', fontSize: '1.5rem',  paddingBottom: '0.2rem', paddingLeft:'1rem', 
              paddingRight:'1.1rem', paddingTop:'0.2rem', }}>
            Continue
            {/* TODO: Agree upon button design. Replace this with an <a> link */}
          </button>
        </div>

        <footer className="m-bot-xs">
          <a>
            <h6>About Us</h6>
            {/* TODO: Insert actual links with react-router */}
          </a>
        </footer>
      </div>
    );
  }
}

export default App;