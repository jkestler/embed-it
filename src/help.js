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

/* when we create a form we create forms document with a unqiue id and properties of:

- owner: users uid
  ---- to get currentUsers UID - let auth = firebase.auth().currentUser;
- title: created by user
- smsContent: 'download this link http://www.downloadmyapp.com'

! To create form document - we need an auto-generated UID for the document: 
db.collection('forms').add({
  owner: auth,
  title: this.state.title (?)
  smsContent: this.state.smsContent (?)
})
.then((docRef) => {
  etc....
})

*/




// What the embed code probably needs to look like
<iframe id="smsembed"
    title="Download our app or whatever"
    width="300"
    height="200"
    src="http://cleversmsembeds.com/embed/fghjuytr4567tyuid">
</iframe>

// http://cleversmsembeds.com/embed/fghjuytr4567tyuid
// that's a page that grabs the UID there and then loads the content from Firebase and displays the form input

// Then you need a form in the embed page that "POSTs" to like http://cleversmsembeds.com/smssignup or something which triggers a google function to process the thing to Text the person
// The emebed is a form with one input: cellphone number and then it displays the title!


// ---------------- //

/* 
   
   1. Create User model (name, email, password)

   2. Create Form Model (owner belongsTo(user), title, smsContent )

   3. Create url route that when hit grabs the forms UID and then loads its smsContent from Firebase and displays the form input. This will be used as the src attribute
     and will be what is embedded on the user's screen. 

  4. 


*/