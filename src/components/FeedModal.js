import React, { Component } from 'react';
import '../FeedModal.css';
import {Icon} from 'react-fa'

class FeedModal extends Component {
  constructor(props){
    super(props)

  }


  render(){
    return (
      <div className="modal-container">
        <div className="left-container">
          <div
            className="close-feed-container"
            onClick={() => this.props.handleFeedModalOff()}>
            <Icon name="times-circle-o"/>
          </div>
        </div>

        <div className="feed-modal">
        </div>

        <div className="right-container">
          <div className="right-content">
            
          </div>
        </div>
      </div>
    )
  }
}

export default FeedModal;
