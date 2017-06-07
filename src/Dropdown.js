import React, { Component } from 'react';

class Dropdown extends Component {
    createTag(option) {
        return <option value={option.code}>{option.name}</option>
    }

    mySort(options) {
        options.sort(function(a, b) {
            var name1=a.name.toUpperCase();
            var name2=b.name.toUpperCase();
            if (name1<name2) {
                return -1;
            } else if (name1>name2) {
                return 1;
            } else {
                return 0;
            }
        });
        return options;
    }

    render() {
        var sortedList = this.mySort(this.props.optionsList);
        return (
            <div className='Dropdown'>
                <select onChange={this.props.handleChange}>
                    <option value='default' selected>Select an Option:</option>
                    {sortedList.map(this.createTag)}
                </select>
            </div>
        );
    }
}

export default Dropdown;