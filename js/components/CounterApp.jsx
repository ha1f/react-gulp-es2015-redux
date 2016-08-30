"use strict";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import React from 'react';
import CountButton from './../components/CountButton.jsx';
import CountImage from './../components/CountImage.jsx';

import * as Actions from './../actions';

class CounterApp extends React.Component {
    handleClickPlus() {
        this.props.increment();
    }
    handleClickMinus() {
        this.props.decrement();
    }
    render() {
        return (
            <div>
                <div>Counter: {this.props.number}</div>
                <CountButton onClick={this.handleClickPlus.bind(this)}></CountButton>
                <CountImage number={this.props.number}></CountImage>
                <CountButton onClick={this.handleClickMinus.bind(this)}></CountButton>
            </div>
        );
    }
}

export default connect((state) => state, (dispatch) => { return bindActionCreators(Actions, dispatch); })(CounterApp);
