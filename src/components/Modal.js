import React, { Component } from 'react';
import '../Modal.css';
import {Icon} from 'react-fa'

class Modal extends Component {

  render(){
    let content = this.props.modalContent
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
          <h1>{content.title}</h1>
          <p>{content.content}</p>
        </div>
      </div>
    )
  }
}

export default Modal;
