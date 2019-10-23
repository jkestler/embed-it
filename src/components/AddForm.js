import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import firebase from 'firebase/app';

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
<<<<<<< HEAD
      console.log(docRef.id);
=======
>>>>>>> parent of 5553b5e... formId added to iframe element src
      // etc....
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {

    return (
      <div> 
        <Modal isOpen={true}>
          <ModalHeader className='m-auto' id='preview-form'> 
            <form className='form-inline' >
              <div className='form-group mx-sm-3 mb-2'>
                <p className='mb-1 mr-3'>Preview </p>
                <input type='tel' className='form-control' name='formExample' placeholder='(239) 555-9802'/>
              </div>
              <button type='submit' className='btn btn-info mb-2'> Text Me! </button>
            </form>  
          </ModalHeader>
          <ModalBody>
            <form className='form-inline list-group my-lg-0' id='search-input' onSubmit={this.handleSubmit}>
              <input className='form-control m-1' type='text' placeholder='Form Title' name='title' onChange={this.handleChange} value={this.state.title}/>
              <textarea rows='4' className='form-control m-1' type='text' placeholder='SMS Content' name='smsContent' onChange={this.handleChange} value={this.state.smsContent} />
              <button type='submit' className='btn btn-block btn-primary ' onClick={this.addForm}> Save </button>
              <button className='btn btn-block btn-danger my-2' onClick={this.props.toggleAddForm}> Cancel </button>
            </form>
          </ModalBody>
        </Modal>  
      </div>
    )

  }
}

//  <div class="form-group mx-sm-3 mb-2">
//     <label for="inputPassword2" class="sr-only">Password</label>
//     <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
//   </div>
//   <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>

export default AddForm; 