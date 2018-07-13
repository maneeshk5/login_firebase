import React, { Component } from 'react';

class  Youtube extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        var res = Object.entries(this.props.videoLink)
        var info = res.map(function(profile,i) {
               return(
            <iframe width="420" height="315"
             key={i}
            src=""
            frameBorder="0" allow="autoplay; encrypted-media"
            allowFullScreen="allowFullScreen"></iframe>
               )
        });

        return(
            <div className="col-sm-4 videoMargin">
                {info}
                {/*<iframe width="420" height="315"*/}
                        {/*src=""*/}
                        {/*frameBorder="0" allow="autoplay; encrypted-media"*/}
                        {/*allowFullScreen="allowFullScreen"></iframe>*/}
                </div>
        );
    }

}
export default Youtube;
