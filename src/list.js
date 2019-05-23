import React, { Component } from 'react';

const lists = [1, 2, 3, 4, 5];
class list extends Component {
    render() {
        return (
            <ul>
                {lists.map((item, i) =>
                <li key={i}>{item}</li>)
                }
            </ul>
        );
    }
}

export default list;