import React,{Component} from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
// import {PostData} from "./service/PostData";
import {Redirect} from 'react-router-dom';

class Welcome extends Component{

    constructor(props){
        super(props);
        this.state={
            redirectToReferrer:false
        };
        this.signup = this.signup.bind(this);
    }

    signup(res, type){

        let postData;
        if(type === 'facebook' && res.email){
            postData = {name:res.name, provider: type, email: res.email, provider_id: res.id, token: res.accessToken, provider_pic: res.provider_pic}
            alert(postData.name);
        }


        // PostData('login', postData).then((result) => {
        //     let responseJson = result;
        //     if(responseJson.userData){
        //         sessionStorage.setItem('userData', JSON.stringify(responseJson));
        //         this.setState({redirectToReferrer: true});
        //     }
        // })
    }


    render(){

        if(this.state.redirectToReferrer){
            // return(<Redirect to={}/>)
            console.log("Welcome");
        }

        const responseFacebook = (response) => {
            // console.log(response,'facebook');
            this.signup(response,'facebook')
        }


        return(
            <div className="row" id="Body">
                <div className="medium-12 column">
                    <h2 id="welcomeText">Make example heading</h2>

                    {/*<GoogleLogin*/}
                    {/*clientId="117754730578-5dhbb4qgc3vd8k91vggjtsisvji0gist.apps.googleusercontent.com"*/}
                    {/*buttonText="Login"*/}
                    {/*onSuccess={responseGoogle}*/}
                    {/*onFailure={responseGoogle}*/}
                    {/*/>*/}


                    <FacebookLogin
                    appId="1949613908702671"
                    autoLoad={true}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook}
                    />
                </div>
            </div>
        );
    }
}

export default Welcome;