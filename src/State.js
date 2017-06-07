import React, { Component } from 'react';
import Dropdown from './Dropdown';

class State extends Component {
    constructor(props) {
        super(props);
        this.state={stateArray: []};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentCountry === 'default' || nextProps.currentCountry === '') {
            console.log('In the method');
            return;
        } else {
            fetch('http://localhost:8000/api/countries/' + nextProps.currentCountry + '/states/').then(
                (response) => {
                    response.json().then(
                        (json) => {
                            this.setState({stateArray: json});
                        }
                    );
                }
            );
        }
    }

    render() {
        return <Dropdown optionsList={this.state.stateArray} selectedIndex='0'/>;
    }
}

export default State;