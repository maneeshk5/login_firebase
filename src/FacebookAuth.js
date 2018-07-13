import React,{Component} from 'react';
// import FacebookAuth from 'react-facebook-auth';
import { FacebookLogin } from 'react-facebook-login-component';

class FacebookAuth extends Component{

    constructor (props, context) {
        super(props, context);
    }

    responseFacebook (response) {
        console.log(response);
        //anything else you want to do(save to localStorage)...
    }

    render () {
        return (
            <div>
                <FacebookLogin socialId="1949613908702671"
                               language="en_US"
                               scope="public_profile,email"
                               responseHandler={this.responseFacebook}
                               xfbml={true}
                               fields="id,email,name"
                               version="v2.5"
                               className="facebook-login"
                               buttonText="Login With Facebook"/>
            </div>
        );
    }

}

export default FacebookAuth;