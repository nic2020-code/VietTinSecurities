import React, { Component } from 'react';
import Modal from './Modal';

class ShowButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="ShowButton">
        <button onClick={this.toggleModal}>
          Xem
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Nội dung bài viết
        </Modal>
      </div>
    );
  }
}

export default ShowButton;