import * as React from 'react';

import './Spacing.css';
import './Typography.css';
import './VideoSelector.css';

import { API_BASE_URL } from './Config';

interface IState {
  staticLocation: string
}

class VideoSelector extends React.Component<{}, IState> {
  public readonly state: IState = {
    staticLocation: ""
  }

  public componentDidMount() {
    this.fetchInfo();
  }

  public render() {
    return (
      <div className="VideoSelector">
        {this.state.staticLocation}
      </div>
    );
  }

  private fetchInfo = () => {
    fetch('http://' + API_BASE_URL)
      .then( response => {
        return response.json();
      })
      .then( info => {
        this.setState({ staticLocation: info.static });
      })
      .catch( err => {
        // this.setState({ apiOnline: false });
      });
  }
}

export default VideoSelector;