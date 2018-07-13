import React, { Component } from 'react';
import './App.css'
import fire from './config/Fire';
import Login from './components/login/Login';
import Home from './components/home/Home';
// import Routes from './Routes';
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Video from './components/video/Video'
import VideoForm from './components/videoForm/VideoForm'
import Welcome from "./Welcome";
// import { DB_CONFIG } from './config/config';
// import firebase from 'firebase/app';
// import 'firebase/database'
import FacebookAuth from './FacebookAuth';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    user:{},
    videos:[],
          // {id: 1, videoContent: "Video 1 here!"},
          // {id: 2, videoContent: "Video 2 here!"},
  }
  // this.db = this.app.database().ref().child('videos');
  // this.addVideoUrl = this.addVideoUrl.bind(this);
  //   if (!firebase.apps.length) {
  // this.app = firebase.initializeApp({DB_CONFIG});
  // this.database = this.app.database().ref().child('videos');
  //   }
  //   else{
  //       console.log("not here");
  //   }

  // = firebase.initializeApp(DB_CONFIG);
}



addVideoUrl(video){

    this.database.push().set({videoContent:video});
    // const previousVideos = this.state.videos;
    // previousVideos.push({id: previousVideos.length+1, videoContent:video});
    // this.setState({
    //     notes: previousVideos
}
// this.state.videos = previousVideos;

componentWillMount(){
    // const previousVideos = this.state.videos;
    // this.database.on('videos' , snap => {
    //     previousVideos.push({
    //         id: snap.key,
    //         videoContent: snap.val().videoContent,
    //
    //     })
    //     this.setState({
    //         videos: previousVideos
    //     })
    // })
  // this.authListener();
}

authListener (){
  fire.auth().onAuthStateChanged((user) =>  {

    console.log("Check Auth");
    if(user){
      this.setState({user});
      console.log("If");
    }
    else{
      console.log("Else");
      this.setState({user:null});
    }
  });
}


  render() {
    return (
      <div className="App">
        {/*<Welcome/>*/}
        {/*<Header/>*/}
            {/*<div className="videosHeader">*/}
                {/*<div className="heading">SaveTube App </div>*/}
            {/*</div>*/}

          {/*<div className="videosBody">*/}
              {/*{*/}
                  {/*this.state.videos.map((video) => {*/}
                  {/*return(*/}
                    {/*<Video videoContent={video.videoContent} videoId={video.id}*/}
                           {/*key={video.id} />*/}
                  {/*)*/}
                  {/*})*/}
              {/*}*/}
          {/*</div>*/}


              {/*<VideoForm  />*/}


<Login/>
        {/*{this.state.user ? (<Home/>) : (<Login /> )}*/}

        {/*<Footer/>*/}
        </div>
    );
  }
}

export default App;
