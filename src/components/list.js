import React, { Component } from 'react';

class List extends Component {
    render(){
        const listElements = this.props.data.map((item, index) => {
            return (
            <li className="collection-item row" key={item.id}>
                <div className="col s8">
                    { item.title }
                </div>
                <div className="col s4 right-align">
                    <button onClick={() => {this.props.delete(index)}} className='btn-small red darken-3'>Delete</button>
                </div>
            </li>
            );
        });

        return(
            <ul className="collection">
                { listElements }
            </ul>
        )
    }
}

export default List;