import React, { Component } from 'react';

class Dropdown extends Component {
    createTag(option) {
        return <option value={option.code}>{option.name}</option>
    }

    render() {
        return (
            <div className='Dropdown'>
                <select>
                    <option value='default'>Select an Option:</option>
                    
                </select>
            </div>
        );
    }
}

export default Dropdown;