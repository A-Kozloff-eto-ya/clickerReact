import React, { Component } from 'react';

import Clicker from './clicker';
import Header from "./header";
import './compStyles/App.css'




export default class ClickerApp extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clicker'
        };
    }



    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Clicker />

            </div>
        );
    }
}