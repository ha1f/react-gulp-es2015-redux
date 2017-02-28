import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import React from 'react';

import BalloonBox from './../components/BalloonBox.jsx';
import * as Actions from './../actions';

class Main extends React.Component {
    render() {
        return (
          <div className="container">
            <div className="container-row">
              <div className="center-box">
                <span className="title">はるふだよ</span><br />
                <a href="https://www.instagram.com/ha1fha1f/" target="_blank"><i className="fa fa-5x fa-instagram icon-button" aria-hidden="true"></i></a>
                <a href="https://twitter.com/_ha1f" target="_blank"><i className="fa fa-5x fa-twitter icon-button" aria-hidden="true"></i></a>
                <a href="https://github.com/ha1f" target="_blank"><i className="fa fa-5x fa-github icon-button" aria-hidden="true"></i></a>
                <a href="http://line.me/ti/p/u0512708aacc4c7bf6d0f4ffae9a049fb" target="_blank"><i className="fa fa-2x icon-button">LINE</i></a>
              </div>
              <BalloonBox></BalloonBox>
            </div>
            <div className="container-row">
              Instagramとかにリンクしたい
            </div>
          </div>
        );
    }
}

export default connect((state) => state, (dispatch) => { return bindActionCreators(Actions, dispatch); })(Main);
