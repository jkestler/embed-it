import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import firebase from 'firebase';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      smsContent: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, smsContent } = this.state;
    const db = firebase.firestore();
    const userId = firebase.auth().currentUser.uid;

    db.collection('forms').add({
      owner: userId,
      title: title,
      smsContent: smsContent
    })
    .then((docRef) => {
      this.props.toggleAddForm();
      // etc....
    })
  }

  render() {

    return (
      <div> 
        <Modal isOpen={true}>
          <ModalHeader className='m-auto'> Add Form </ModalHeader>
          <ModalBody>
            <form className='form-inline list-group my-lg-0' id='search-input' onSubmit={this.handleSubmit}>
              <input className='form-control m-1' type='text' placeholder='Form Title' name='title' onChange={this.handleChange} value={this.state.title}/>
              <textarea rows='4' className='form-control m-1' type='text' placeholder='SMS Content' name='smsContent' onChange={this.handleChange} value={this.state.smsContent} />
              <button type='submit' className='btn btn-block btn-primary my-2' onClick={this.addForm}> Save </button>
              <button className='btn btn-block btn-danger my-2' onClick={this.props.toggleAddForm}> Cancel </button>
            </form>
          </ModalBody>
        </Modal>  
      </div>
    )

  }
}

export default AddForm; 