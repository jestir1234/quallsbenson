import React, { Component } from 'react';
import '../FeedModal.css';
import {Icon} from 'react-fa'

class FeedModal extends Component {
  constructor(props){
    super(props)
    this.renderInstagram = this.renderInstagram.bind(this);
    this.renderGeneral = this.renderGeneral.bind(this);
  }

  renderInstagram(content){
    return (
      <div
        className="instagram-container">
        <div className="icon-container">
          <Icon name="instagram"/>
          <h3>JournalSquared</h3>
        </div>
        <div
          className="image-container"
          style={{backgroundImage: 'url(' + content + ')'}}>
        </div>
        <div
          className="caption-container">
          <p>Lorem ipsum dolor sit amet, lacus nulla felis etiam, non tristique est ante, sed cursus, ac lacus amet. Id lacus per feugiat congue adipiscing laoreet, ac ipsum a ullamcorper porttitor, a integer parturient,</p>
        </div>
      </div>
    )
  }

  renderGeneral(content){
    return (
      <div className="digest-container">
        <div className="digest-title">
          <h3>{content.type}:</h3>
          <h3>Journal Squared</h3>
        </div>
        <p>{content.content}</p>

        <p>Maecenas vel magna ac velit sollicitudin pretium. Mauris viverra aliquam ligula, nec fermentum risus vehicula condimentum. Nullam gravida eu odio ut vestibulum. Pellentesque porttitor nunc nec tincidunt mattis. Morbi vitae metus porta, volutpat ipsum convallis, efficitur lacus. Cras ac libero mollis, commodo metus a, placerat tellus. Suspendisse potenti. Pellentesque dignissim dui id justo porta, at ultricies nisl sodales. Aliquam rutrum ante sem, ut ultricies mauris feugiat id. Sed velit tortor, ultrices sed enim eu, aliquet commodo magna. Cras convallis, felis non ullamcorper dapibus, ante velit cursus turpis, et aliquam dui sem et nisl. Integer tincidunt ipsum in feugiat commodo. Mauris ut molestie elit. Duis ac ullamcorper mauris, ut bibendum enim. Proin rhoncus mauris ac dui posuere, ut mollis lacus dictum. Phasellus hendre- rit lacinia libero quis tincidunt.</p>
      </div>
    )
  }

  render(){

    let display;
    if (this.props.feedModalContent.type === "Instagram"){
      display = this.renderInstagram(this.props.feedModalContent.content);
    } else if (this.props.feedModalContent.type === "Architectural Digest"){
      display = this.renderGeneral(this.props.feedModalContent);
    }
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
            {display}
          </div>
        </div>
      </div>
    )
  }
}

export default FeedModal;
