import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/Fire';
import firebase from 'firebase';
// import FacebookLogin from 'react-facebook-login';
import { FacebookLogin } from 'react-facebook-login-component';

const provider = new firebase.auth.FacebookAuthProvider();
const database = firebase.database();
class Login extends Component {
    constructor(props){
        super(props);

    // this.login = this.login.bind(this);
    // this.signup = this.signup.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.signupfb = this.signupfb.bind(this);
    this.responseFacebookBtn = this.responseFacebookBtn.bind(this);
    }

    responseFacebookBtn () {
        // console.log(response);
        // let postData;
        //     postData = {
        //         name: response.name,
        //         provider: response.type,
        //         email: response.email,
        //         provider_id: response.id,
        //         token: response.accessToken,
        //         provider_pic: response.provider_pic
        //     };
        //     alert(postData.name);

            // this.writeUserData(postData.provider_id,postData.email);



        firebase.auth().signInWithRedirect(provider);
        // firebase.auth().signInWithRedirect(provider);
        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
                // alert("in if");
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // var token = result.credential.accessToken;
                // alert(postData.provider_id);
            }


            var user = result.user;
            alert(user.uid);
            alert(user.email);
            // alert("hello wait")
            database.ref('users/'+user.uid).set({
                email: user.email,
                id:user.provider_id
            });

            // The signed-in user info.
            // var user = result.user;
        }).catch(function(error) {
            // Handle Errors here.
            // console.log(error);
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });
            //
            //


            // The signed-in user info.
            // var user = result.user;
        }
    // writeUserData(userId,email) {
    //     alert(userId);
    //
    // }

    // signupfb(res, type) {
    //
    //     console.log(res.email);

        // var database = fire.database();
        // let postData;
        // if (type === 'facebook' && res.email) {
        //     postData = {
        //         name: res.name,
        //         provider: type,
        //         email: res.email,
        //         provider_id: res.id,
        //         token: res.accessToken,
        //         provider_pic: res.provider_pic
        //     };
        //     alert(postData.name);
        // }
        // else {
        //     console.log("else");
        // }
        // console.log("in func");
        // var provider = new firebase.auth.FacebookAuthProvider();
        // firebase.auth().signInWithRedirect(provider);
        // firebase.auth().getRedirectResult().then(function(result) {
        //     if (result.credential) {
        //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //         var token = result.credential.accessToken;
        //
        //     }
        //     alert(postData.id,"hello");
        //     this.writeUserData(postData.provider_id,postData.email);
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
    //
    // }



    // login(e){
    //     e.preventDefault();
    //     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .catch((error) =>{
    //         console.log(error);
    //     });
    // }

    // signup(e){
    //     e.preventDefault();
    //     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     .catch((error) =>{
    //         console.log(error);
    //     });
    // }

    // handleChange(e){
    //     this.setState({ [e.target.name]: e.target.value});
    // }
    render(){

        // if(this.state.redirectToReferrer){
            // return(<Redirect to={}/>)
            // console.log("Welcome");
        // }

        // const responseFacebook = (response) => {
        //     // console.log(response,'facebook');
        //     this.signupfb(response,'facebook')
        // }

        return(
            <div className="col-md-6">
                {/*<FacebookLogin socialId="1949613908702671"*/}
                               {/*language="en_US"*/}
                               {/*scope="public_profile,email"*/}
                               {/*responseHandler={this.responseFacebook}*/}
                               {/*xfbml={true}*/}
                               {/*fields="id,email,name"*/}
                               {/*version="v2.5"*/}
                               {/*className="facebook-login"*/}
                               {/*buttonText="Login With Facebook"/>*/}

                               <button onClick={this.responseFacebookBtn}>hello facebook</button>
                {/*<FacebookLogin*/}
                    {/*appId="1949613908702671"*/}
                    {/*autoLoad={true}*/}
                    {/*fields="name,email,picture"*/}
                    {/*// onClick={responseFacebook}*/}
                    {/*callback={(response)=>this.signupfb(response,'facebook')}*/}
                {/*/>*/}
                {/*<form>*/}
                    {/*<div class="form-group">*/}
                     {/*<label for="exampleInputEmail">Email Address </label>*/}
                     {/*<input value={this.state.email} onChange={this.handleChange} type="email" name="email"*/}
                     {/*className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"*/}
                     {/*placeholder="Enter email"/>*/}
                     {/*<small id ="emailHelp" className="form-text text-muted">We'll never share email</small>*/}
                     {/*</div>*/}
                     {/*<div className="form-group">*/}
                     {/*<label for="exampleInputPassowrd">Password </label>*/}
                     {/*<input value={this.state.password} onChange={this.handleChange} type="password" name="password"*/}
                     {/*className="form-control" id="exampleInputPassword1"*/}
                     {/*placeholder="Enter password"/>*/}
                    {/*</div>*/}
                     {/*<button type="submit" onClick={this.login} className="btn btn-primary">Login </button>*/}
                     {/*<button type="submit" onClick={this.signup} className="btn btn-success">Signup </button>*/}
                    {/*</form>*/}
                </div>
        );
    }
}

export default Login;