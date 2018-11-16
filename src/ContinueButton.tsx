import * as React from 'react';
import { Link } from 'react-router-dom';

import { API_BASE_URL } from './Config';

import './HomePage.css';
import './Spacing.css';
import './Typography.css';

interface IState {
  apiOnline: boolean
}

class ContinueButton extends React.Component<{}, IState> {
  public readonly state: IState = {
    apiOnline: false
  }

  public componentDidMount() {
    this.checkConnectivity();
  }

  public render() {
    if (this.state.apiOnline) {
      return (
        <Link to="/videos/" className="m-top-m"
            style={{backgroundColor: '#931621', border: 0, borderRadius: '3px', boxShadow: '0 0.2rem 0.2rem #000000',
            color: '#E0FFFE', fontFamily: 'Roboto', fontSize: '1.5rem',  paddingBottom: '0.2rem', paddingLeft:'1rem',
            paddingRight:'1.1rem', paddingTop:'0.2rem', }}>
          Continue
        </Link>
      );
    } else {
      return (
        <h5 className="m-top-m">
          Our servers are offline.<br />
          <button onClick={this.checkConnectivityAndReupdate} style={{textDecoration: 'underline'}}>
            Try again?
          </button>
        </h5>
      );
    }
  }

  private checkConnectivity = () => {
    fetch('http://' + API_BASE_URL)
      .then( response => {
        if (response.status === 200) {
          this.setState({ apiOnline: true });
        }
      })
      .catch( err => {
        // this.setState({ apiOnline: false });
      });
  }

  private checkConnectivityAndReupdate = () => {
    this.checkConnectivity();
    this.forceUpdate()
  }
}

export default ContinueButton;