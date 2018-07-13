import React,{Component} from 'react';

class FacebookComponent extends React{
    constructor(props){
        super(props);

        this.signupfb = this.signupfb.bind(this);
    }

    signupfb(res, type) {

        console.log(res.email);

        // var database = fire.database();
        let postData;
        if (type === 'facebook' && res.email) {
            postData = {
                name: res.name,
                provider: type,
                email: res.email,
                provider_id: res.id,
                token: res.accessToken,
                provider_pic: res.provider_pic
            };
            alert(postData.name);
        }
        // console.log("in func");
        // var provider = new firebase.auth.FacebookAuthProvider();
        // firebase.auth().signInWithRedirect(provider);
        //
        // firebase.auth().getRedirectResult().then(function(result) {
        //     if (result.credential) {
        //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //         var token = result.credential.accessToken;
        //
        //     }
        //     console.log(postData.id);
        //     // this.writeUserData(postData.id,postData.email);
        //
        //
        //     // The signed-in user info.
        //     // var user = result.user;
        // }).catch(function(error) {
        //     // Handle Errors here.
        //     console.log(error)
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     // ...
        // });

    }
    render(){
        return(
            <div></div>


        )
    }
};

export default FacebookComponent;

