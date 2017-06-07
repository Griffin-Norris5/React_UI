import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state={countryArray: []};
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/countries').then(
            (response) => {
                response.json().then(
                    (json) => {
                        this.setState({countryArray: json});
                    }
                );
            }   
        );
    }

    render() {
        return (
            <Dropdown handleChange={this.props.handleChange} optionsList={this.state.countryArray}/>
        );
    }
}

export default Country;