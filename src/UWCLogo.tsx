import * as React from 'react';
import Responsive from 'react-responsive';

import './UWCLogo.css';

const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={992} />;

class UWCLogo extends React.Component {
  public render() {
    return(
      <div>
        <Mobile>
          <svg xmlns="http://www.w3.org/2000/svg"
              width="30vw"
              viewBox="0 0 384 236">
            <style>{`.cls-1{fill:#E0FFFE;}`}</style>
            <title>UWC Logo</title>
              <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <path className="cls-1" d="M180,18.28A131,131,0,0,0,158.74,42a86.39,86.39,0,1,0,39.79,45.57A73.88,73.88,0,0,1,220,60a117.8,117.8,0,0,1,.3,115.58,115.62,115.62,0,0,1-6.87,10.82A117.62,117.62,0,1,1,180,18.28Z"/>
                    <path className="cls-1" d="M184.74,87.57a86.79,86.79,0,0,0,.16,60.54,73.78,73.78,0,0,1-21.43,27.58,117.8,117.8,0,0,1-.3-115.58A118.35,118.35,0,0,1,203.31,18a117.63,117.63,0,1,1,.55,199.7A132.7,132.7,0,0,0,225.31,194a86.43,86.43,0,1,0-.41-152.54A84.08,84.08,0,0,0,213,49.18a86.65,86.65,0,0,0-28.29,38.39Z"/>
                  </g>
                </g>
          </svg>
        </Mobile>
        <Tablet>
          <svg xmlns="http://www.w3.org/2000/svg"
              width="20vw"
              viewBox="0 0 384 236">
            <style>{`.cls-1{fill:#E0FFFE;}`}</style>
            <title>UWC Logo</title>
              <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <path className="cls-1" d="M180,18.28A131,131,0,0,0,158.74,42a86.39,86.39,0,1,0,39.79,45.57A73.88,73.88,0,0,1,220,60a117.8,117.8,0,0,1,.3,115.58,115.62,115.62,0,0,1-6.87,10.82A117.62,117.62,0,1,1,180,18.28Z"/>
                    <path className="cls-1" d="M184.74,87.57a86.79,86.79,0,0,0,.16,60.54,73.78,73.78,0,0,1-21.43,27.58,117.8,117.8,0,0,1-.3-115.58A118.35,118.35,0,0,1,203.31,18a117.63,117.63,0,1,1,.55,199.7A132.7,132.7,0,0,0,225.31,194a86.43,86.43,0,1,0-.41-152.54A84.08,84.08,0,0,0,213,49.18a86.65,86.65,0,0,0-28.29,38.39Z"/>
                  </g>
                </g>
          </svg>
        </Tablet>
        <Default>
          <svg xmlns="http://www.w3.org/2000/svg"
              width="20vw"
              viewBox="0 0 384 236">
            <style>{`.cls-1{fill:#E0FFFE;}`}</style>
            <title>UWC Logo</title>
              <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <path className="cls-1" d="M180,18.28A131,131,0,0,0,158.74,42a86.39,86.39,0,1,0,39.79,45.57A73.88,73.88,0,0,1,220,60a117.8,117.8,0,0,1,.3,115.58,115.62,115.62,0,0,1-6.87,10.82A117.62,117.62,0,1,1,180,18.28Z"/>
                    <path className="cls-1" d="M184.74,87.57a86.79,86.79,0,0,0,.16,60.54,73.78,73.78,0,0,1-21.43,27.58,117.8,117.8,0,0,1-.3-115.58A118.35,118.35,0,0,1,203.31,18a117.63,117.63,0,1,1,.55,199.7A132.7,132.7,0,0,0,225.31,194a86.43,86.43,0,1,0-.41-152.54A84.08,84.08,0,0,0,213,49.18a86.65,86.65,0,0,0-28.29,38.39Z"/>
                  </g>
                </g>
          </svg>
        </Default>
      </div>
    );
  }
}

export default UWCLogo
