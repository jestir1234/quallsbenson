import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {modalOn: false, feedModalOn: false, feedModalContent: null}
    this.handleModalOn = this.handleModalOn.bind(this);
    this.handleModalOff = this.handleModalOff.bind(this);
    this.handleFeedModalOn = this.handleFeedModalOn.bind(this);
    this.handleFeedModalOff = this.handleFeedModalOff.bind(this);

  }

  handleFeedModalOn(type, content){
    this.setState({feedModalOn: true, modalOn: false, feedModalContent: {type, content}})
  }

  handleFeedModalOff(){
    this.setState({feedModalOn: false})
  }

  handleModalOn(){
    this.setState({modalOn: true, feedModalOn: false})
  }

  handleModalOff(){
    this.setState({modalOn: false})
  }

  render() {
    return (
      <div className="App">
        <Nav handleModalOn={this.handleModalOn}/>
        <Main
          modalOn={this.state.modalOn}
          feedModalOn={this.state.feedModalOn}
          handleModalOn={this.handleModalOn}
          handleModalOff={this.handleModalOff}
          handleFeedModalOff={this.handleFeedModalOff}
          handleFeedModalOn={this.handleFeedModalOn}
          feedModalContent={this.state.feedModalContent}/>
      </div>
    );
  }
}

export default App;
