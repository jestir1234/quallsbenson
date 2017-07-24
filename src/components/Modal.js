import React, { Component } from 'react';
import '../Modal.css';
import {Icon} from 'react-fa'

class Modal extends Component {

  render(){
    return (
      <div>
        <div
          className="close-container"
          onClick={() => this.props.handleModalOff()}>
          <Icon name="times-circle-o" className="close"/>
        </div>
        <div className="modal">
        </div>
        <div className="modal-content">
          <h1>The Journal</h1>
          <p>Journal Squared invites a new generation to up and coming Jersey City leo mattis euismod ac id ipsum. Phasellus urna eros, auctor eget urna in, lacinia gravida justo.</p>
        </div>
      </div>
    )
  }
}

export default Modal;
