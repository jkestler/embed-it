import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import firebase from 'firebase';
import Highlight from 'react-highlight';

class EmbedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  render() {
    
    return (
      <Modal isOpen={true}>
        <ModalHeader className='m-auto' >
          Copy and paste this iFrame code in your website to display your form. 
        </ModalHeader>

<Highlight language='html'>
{`
  <iframe 
    id="smsembed"
    title="Download our app or whatever"
    width="300"
    height="200"
    src="http://cleversmsembeds.com/embed/fghjuytr4567tyuid"> 
  </iframe>
`}
</Highlight>
          
      <button className='btn btn-sm btn-danger my-2' onClick={this.props.toggleEmbed}>Close </button> 
      </Modal> 
    )

  }
}

export default EmbedForm;

{/*  */}

