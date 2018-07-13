import React, { Component } from 'react';
import './VideoForm.css';
import fire from '../../config/Fire';
import Youtube from "../../Youtube";


class VideoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newVideoContent: '',
            videoLink:'',
            data:[]
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeVideoUrl = this.writeVideoUrl.bind(this);
    }

    handleUserInput(e){
        this.setState({
            newVideoContent: e.target.value,
        })
    }
    writeVideoUrl(){
        const title = "demo"
        const { newVideoContent } = this.state;
        fire.database().ref('/videos')
            .push({title,newVideoContent})

        // this.props.addVideoUrl(this.state.newVideoContent);
        // this.setState({
        //     newVideoContent: '',
        // })
    }
    // export const
    async componentWillMount(){
        await this.fetchData()
    }

    fetchData(){
        fire.database().ref('/v  ideos')
            .on('value',snapshot => {
                this.setState({data: snapshot.val()});
            })
    }

    render(){
        // var res = Object.entries(this.state.data)
        // var info = res.map(function(profile) {
            // this.setState({
        // profile[1].newVideoContent
            //     videoLink:
            // });
        // })
        return(
            <div>
                {/*<Youtube videoLink={this.state.data}/>*/}
                <input className="videoInput" placeholder="Add a URL.."
                value={this.state.newVideoContent} onChange={this.handleUserInput}/>
                <button className="videoButton"
                onClick={this.writeVideoUrl}>Add Video</button>

            </div>


        )
    }

}

export default VideoForm;