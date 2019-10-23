import React, { Component } from 'react';
import AddForm from './AddForm.js';
import EmbedForm from './EmbedForm.js';
import firebase from 'firebase/app';
import { FaPlusCircle } from 'react-icons/fa';
// const db = firebase.firestore();

class Dashboard extends Component {
  constructor(props) {
  super(props);
    this.state = {
      showAddForm: false,
      showEmbed: false,
      userForms: null
    }
  }

  componentDidMount = () => {
    // Query formsRef and add queried data to state
    
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const formsRef = db.collection('forms');

    formsRef.where('owner', '==', userId)
      .onSnapshot( querySnapshot => {
<<<<<<< HEAD
        // map to get object properties
        const data = querySnapshot.docs.map(doc => doc.data() );
        // map to get document id
        const formId = querySnapshot.docs.map(doc => doc.id);
        // iterate through form data object and add a formId field to each item with a value of form doc's uid at matching index of data. 
        data.forEach((item, index) => {
          item['formId'] = formId[index];
        })
=======
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
>>>>>>> parent of 5553b5e... formId added to iframe element src
        this.setState({ userForms: data}) 
        console.log('User Forms', this.state.userForms);
      });

  }

  toggleEmbed = () => {
    this.setState({
      showEmbed: !this.state.showEmbed
    });
  };

  toggleAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
    console.log(this.state.showAddForm);
  }


  render() {

    return (
      <div className='dash-main'>
        {this.state.showAddForm ? <AddForm className='mt-4' toggleAddForm={this.toggleAddForm} /> : ''}
        {this.state.showEmbed ? <EmbedForm className='mt-4' toggleEmbed={this.toggleEmbed} /> : ''}

        <div className='add-form-container' onClick={this.toggleAddForm}>
          <FaPlusCircle id='add-icon' />
          <h5 id='add-form-title'> ADD NEW FORM </h5>
        </div>
        <div className='form-container'>
          { 
            this.state.userForms ? 
              this.state.userForms.map((form, index) => (
                <div key={index} className='form-item row'>
                  <div className='col-xs-12 col-md-3'>
                    <h4 id='form-header'>Form Title : </h4>
                    <p id='form-description'> {form.title} </p>
                  </div>
                  <div className='col-xs-12 col-md-7'>
                    <h4 id='form-header'> SMS Content : </h4>
                    <p id='form-description'> {form.smsContent}</p>
                  </div>
                  <div className='col-md-2'>
                    <button id='embed-button' onClick={this.toggleEmbed} className='btn btn-info btn-block' > Embed </button>
                  </div>  
                </div>
            )) : ''
          }
        </div>
          
          

        
      
      </div>
    ) 

  }

}


export default Dashboard;