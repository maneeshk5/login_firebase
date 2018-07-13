import React, { Component } from 'react';
import './Home.css';
import Youtube from "../../Youtube";
import fire from "../../config/Fire";


class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }
  render() {
    return (
        <article className="grid-container">
            <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
                <div className="cell">
                    {/*<img className="thumbnail" width="20%" height="20%" src="https://placehold.it/550x550"/>*/}
                    {/*<div className="col-sm-12">*/}
                        {/*<Youtube/>*/}
                        {/*<Youtube />*/}
                        {/*<Youtube />*/}
                    {/*</div>*/}
                    {/*<button className="button button-primary">Logout</button>*/}
                </div>

                <button onClick={this.logout}>Logout</button>
            </div>
        </article>
  );
  }
}

export default Home;
