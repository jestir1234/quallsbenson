import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {selected: 'journal', modalOn: false, feedModalOn: false, feedModalContent: null, modalContent: null}
    this.handleModalOn = this.handleModalOn.bind(this);
    this.handleModalOff = this.handleModalOff.bind(this);
    this.handleFeedModalOn = this.handleFeedModalOn.bind(this);
    this.handleFeedModalOff = this.handleFeedModalOff.bind(this);
    this.handleNavSelect = this.handleNavSelect.bind(this);
    this.renderMain = this.renderMain.bind(this);

  }

  handleNavSelect(nav){
    this.setState({selected: nav})
  }

  handleFeedModalOn(type, content){
    this.setState({feedModalOn: true, modalOn: false, feedModalContent: {type, content}})
  }

  handleFeedModalOff(){
    this.setState({feedModalOn: false})
  }

  handleModalOn(title, content){
    this.setState({modalOn: true, feedModalOn: false, modalContent: {title, content}})
  }

  handleModalOff(){
    this.setState({modalOn: false})
  }

  renderMain(){
    return (
      <Main
        modalOn={this.state.modalOn}
        feedModalOn={this.state.feedModalOn}
        handleModalOn={this.handleModalOn}
        handleModalOff={this.handleModalOff}
        handleFeedModalOff={this.handleFeedModalOff}
        handleFeedModalOn={this.handleFeedModalOn}
        feedModalContent={this.state.feedModalContent}
        modalContent={this.state.modalContent}/>
    )
  }

  render() {

    let nav = this.state.selected;
    let display;
    if (nav === 'journal'){
      display = this.renderMain();
    }
    return (
      <div className="App">
        <Nav
          handleNavSelect={this.handleNavSelect}/>
        {display}
      </div>
    );
  }
}

export default App;
