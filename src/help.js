{
	users: {
  	12341241234uid: {
    	name: 'Zach',
      email: 'zachzimbler@gmail.com'
    }
  },
  forms: {
  	fghjuytr4567tyuid: {
    	owner: '12341241234uid',
      title: 'Download our app or whatever',
      smsContent: 'blah blah blah http://downloadmyapp.com/asdfasdf',
    }
  }
}

/**** when we create a form we create forms document with a unqiue id and properties of:

{
  + owner: users uid
    ---- to get currentUsers UID - let auth = firebase.auth().currentUser;
  + title: created by user
  + smsContent: 'download this link http://www.downloadmyapp.com'
}

+ To create form document - we need an auto-generated UID for the document: 
    db.collection('forms').add({
      owner: auth,
      title: this.state.title
      smsContent: this.state.smsContent
    })
    .then((docRef) => {
      etc....
    })

*****/




// What the embed code probably needs to look like
<iframe id="smsembed"
    title="Download our app or whatever"
    width="300"
    height="200"
    src="http://cleversmsembeds.com/embed/fghjuytr4567tyuid"> /* this will display this link which is the embeddable form */
</iframe> 

// https://codeshare.io/5eeQpK

// http://cleversmsembeds.com/embed/fghjuytr4567tyuid
// that's a page that grabs the UID there and then loads the content from Firebase and displays the form input

// Then you need a form in the embed page that "POSTs" to like http://cleversmsembeds.com/smssignup or something which triggers a google function to process the thing to Text the person
// The emebed is a form with one input: cellphone number and then it displays the title which tells you to enter your phone number for a link.


// ---------------- //

/* // TODO: 
   
   1. Create User - COMPLETE 

   2. Create Form - NEXT - add button to dashboard with modal popup - COMPLETE
   
   3. Map through form  
  
   3. Create url route that when hit grabs the forms UID and then loads its smsContent from Firebase and displays the form input. This will be used as the src attribute
     and will be what is embedded on the user's screen. 

  4. 


*/


/*
1. I create a user, or login
 
2. I click create new form (edited) 

3. it gives me a stupid simple fucking form to embed
  and then you can edit the text that is in the SMS
  the form is always the same
  but the SMS text is different

4. I give instructions on how to embed the form (meaning you have to build an embedable thing)
  building those embeds isn’t actually to terribly difficult

5. when someone comes in and types their phone number in
  on the website it’ll text them the text that is preset in the dashboard
  ideally used for like download links for a mobile app
  ever seen that before on sites?
  pop in your number and we’ll send you a download to the app type deal?
  I like this one a good bit
  you can use firebase functions for the backend
  and deploy on firebase hosting or something

*/


//Form is the same every single time 
// SMS content & title is the only thing that changes