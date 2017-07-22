import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-row1">
          <div className="main-row1-box1">
            <h1 className="main-box-header">The Journal</h1>
            <p>Journal Squared invites a new generation to up and coming Jersey City Lorem ipsum dolor sit amet, auctor ut. Id est, bibendum conubia nunc non nibh, dui natoque mattis a, quam accumsan suspendisse tellus. Lectus amet nibh, a facilisis bibendum integer, est dapibus vitae adipiscing</p>
          </div>
          <div className="main-row1-box2">
            <div className="row1-box2-box1"></div>
            <div className="row1-box2-box2">
              <h4>Twitter:</h4>
              <p>Journal Squared invites a new generation to up and coming Jersey City</p>
            </div>
          </div>
        </div>

        <div className="main-row2">
          <div className="main-row2-transparent"></div>
          <div className="main-row2-box-container">
            <div className="row2-row1">
              <div className="row2-row1-box1"></div>
              <div className="row2-row1-box2"></div>
            </div>

            <div className="row2-row2">
              <div className="row2-row2-box1">
                <h4>Architectural Digest:</h4>
                <p>Journal Squared invites a new generation to up and coming Jersey City
Aenean sagittis auctor velit eget rutrum. Curabitur vel ipsum sed eros interdum porta nec et dui. Curabitur ante felis, pharetra non fringilla quis, scelerisque ac orci. Nullam quis enim non leo mattis euismod ac id ipsum. Phasellus urna eros, auctor eget urna in, lacinia gravida justo. Nunc et enim sed odio placerat pharetra. Curabi- tur at nunc eu mi condimentum lobortis. Donec fringilla cursus rutrum. Mauris cursus molestie lorem, gravida tortor. Sed velit est, porta at rhoncus vitae, posu- ere. more...</p>
              </div>
              <div className="row2-row2-box2"></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Main;
