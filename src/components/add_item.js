import React, { Component, Fragment } from 'react';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleAddItem = (event) => {
        event.preventDefault();
        
        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }

    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleAddItem}>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <input 
                                type="text" 
                                value={this.state.title}
                                onChange={(e) => { this.setState({title: e.target.value}) }}
                            />
                            <label>Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <input 
                                type="text" 
                                value={this.state.details}
                                onChange={ e => this.setState({details: e.target.value})}
                            />
                            <label>Details</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2 right-align">
                            <button className="btn ">Add to List</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default AddItem