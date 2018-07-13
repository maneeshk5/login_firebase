import React, { Component } from 'react';
import './Video.css';
import PropTypes from 'prop-types';

class Video extends Component{

    constructor(props){
        super(props);
        this.videoContent = props.videoContent;
        this.videoId = props.videoId;
    }

    render(props){
        return(
            <div className="video fade-in">
                <p className="videoContent">{this.videoContent}</p>
            </div>
        )
    }

}

Video.propTyes = {
    videoContent: PropTypes.string
}
export default Video;