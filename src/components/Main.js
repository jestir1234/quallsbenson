import React, { Component } from 'react';
import Modal from './Modal';
import FeedModal from './FeedModal';

class Main extends Component {
  constructor(props){
    super(props)

  }
  render() {

    let modal = this.props.modalOn ? <Modal handleModalOff={this.props.handleModalOff} modalContent={this.props.modalContent}/> : null;
    let feedModal = this.props.feedModalOn ?
    <FeedModal
      handleFeedModalOff={this.props.handleFeedModalOff}
      feedModalContent={this.props.feedModalContent}/> : null;
    return (
      <div className="main-container">
        {modal}
        {feedModal}
        <div className="main-row1">
          <div
            className="main-row1-box1"
            onClick={(e) => this.props.handleModalOn("The Journal", "Journal Squared invites a new generation to up and coming Jersey City Lorem ipsum dolor sit amet, auctor ut. Id est, bibendum conubia nunc non nibh, dui natoque mattis a, quam accumsan suspendisse tellus. Lectus amet nibh, a facilisis bibendum integer, est dapibus vitae adipiscing")}>
            <h1 className="main-box-header">The Journal</h1>
            <p>Journal Squared invites a new generation to up and coming Jersey City Lorem ipsum dolor sit amet, auctor ut. Id est, bibendum conubia nunc non nibh, dui natoque mattis a, quam accumsan suspendisse tellus. Lectus amet nibh, a facilisis bibendum integer, est dapibus vitae adipiscing</p>
          </div>
          <div className="main-row1-box2">
            <div
              className="row1-box2-box1"
              onClick={() => this.props.handleFeedModalOn("Instagram", "https://cdn.vox-cdn.com/uploads/chorus_asset/file/4433663/jersey_city.0.jpg")}></div>
            <div
              className="row1-box2-box2"
              onClick={() => this.props.handleModalOn("Twitter", "Journal Squared invites a new generation to up and coming Jersey City Lorem ipsum dolor sit amet, auctor ut. Id est, bibendum conubia nunc non nibh, dui natoque mattis a, quam accumsan suspendisse tellus. Lectus amet nibh, a facilisis bibendum integer, est dapibus vitae adipiscing")}>
              <h4>Twitter:</h4>
              <p>Journal Squared invites a new generation to up and coming Jersey City</p>
            </div>
          </div>
        </div>

        <div className="main-row2">
          <div
            className="main-row2-transparent"
            onClick={() => this.props.handleFeedModalOn("Instagram", "https://s-media-cache-ak0.pinimg.com/736x/a4/df/23/a4df23128c945a55ff4a65179d8322bb--indigo-walls-dark-blue-walls.jpg")}>

          </div>
          <div className="main-row2-box-container">
            <div className="row2-row1">
              <div
                className="row2-row1-box1"
                onClick={() => this.props.handleFeedModalOn("Instagram", "http://www.thefallssociety.com/wp-content/uploads/2016/03/phoi-canh-pp-2.jpg")}></div>
              <div
                className="row2-row1-box2"
                onClick={() => this.props.handleFeedModalOn("Instagram", "http://media.istockphoto.com/photos/sunset-over-jersey-city-nj-picture-id185057298?k=6&m=185057298&s=612x612&w=0&h=D_XGp8tmovVRXKZkY6LprTLbs9YhRucZ6JrRIWTluPs=")}></div>
            </div>

            <div className="row2-row2">
              <div
                className="row2-row2-box1"
                onClick={(e) => this.props.handleFeedModalOn("Architectural Digest", e.target.innerText)}>
                <h4>Architectural Digest:</h4>
                <p>Journal Squared invites a new generation to up and coming Jersey City
Aenean sagittis auctor velit eget rutrum. Curabitur vel ipsum sed eros interdum porta nec et dui. Curabitur ante felis, pharetra non fringilla quis, scelerisque ac orci. Nullam quis enim non leo mattis euismod ac id ipsum. Phasellus urna eros, auctor eget urna in, lacinia gravida justo. Nunc et enim sed odio placerat pharetra. Curabi- tur at nunc eu mi condimentum lobortis. Donec fringilla cursus rutrum. Mauris cursus molestie lorem, gravida tortor. Sed velit est, porta at rhoncus vitae, posu- ere. more...</p>
              </div>
              <div className="row2-row2-box2"
                onClick={() => this.props.handleFeedModalOn("Instagram", "https://28nwgk2wx3p52fe6o9419sg5-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/journal-squared-rendering-5.jpg")}></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Main;
