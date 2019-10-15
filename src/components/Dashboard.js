import React, { Component } from 'react';
import AddForm from './AddForm.js';

class Dashboard extends Component {
  constructor(props) {
  super(props);
    this.state = {
      showAddForm: false
    }
  }

  toggleAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
    console.log(this.state.showAddForm);
  }


  render() {

    return (
      <div>
        <button id='add-form-button' className='btn btn-primary' onClick={this.toggleAddForm}> Add New Form </button>
        {this.state.showAddForm ? <AddForm toggleAddForm={this.toggleAddForm} /> : ''}
      </div>
      
    )

  }

}


export default Dashboard;