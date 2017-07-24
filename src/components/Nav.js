import React, { Component } from 'react';
import '../Nav.css';

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {selected: 'journal'}
  }

  render(){
    return(
      <div className="nav">
        <h2>JOURNAL SQUARED</h2>
        <div
          className="tab-container"
          onClick={() => this.props.handleNavSelect('journal')}>
          <div className="tab-icon"></div>
          <h4>JOURNAL</h4>
        </div>

        <div className="tab-container">
          <div className="tab-icon"></div>
          <h4>NEIGHBORHOOD</h4>
        </div>

        <div className="tab-container">
          <div className="tab-icon"></div>
          <h4>AMENITIES</h4>
        </div>

        <div className="tab-container">
          <div className="tab-icon"></div>
          <h4>RESIDENCES</h4>
        </div>

        <div className="tab-container">
          <div className="tab-icon"></div>
          <h4>AVAILABILITIES</h4>
        </div>

        <div className="tab-container">
          <div className="tab-icon"></div>
          <h4>TEAM</h4>
        </div>

        <div className="tab-container">
          <div className="tab-icon"></div>
          <h4>CONTACT</h4>
        </div>

      </div>
    )
  }
}

export default Nav;
