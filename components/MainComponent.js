//This component will be the main point of control for the state 
import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { ENTREES } from '../shared/mainEntrees';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entrees: ENTREES
        };
    }

    render() {
        return(
            <Directory entrees={this.state.entrees} />
        );
    }
}

export default Main;