import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css';
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item';
import listData from '../dummy_data/list';
import { randomString } from '../helpers';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        }
    }
    addItem = (item) => {
        item.id = randomString(8);
        this.setState({
            list: [item, ...this.state.list]
        })
    }

    deleteItem = (index) => {
        const listCopy = this.state.list.slice();

        listCopy.splice(index, 1);

        this.setState({
            list: listCopy
        });
    }

    componentDidMount(){
        this.getListData();
    }

    getListData(){
        this.setState({
            list: listData
        });
    }

    render(){
        return(
            <div className="container">
                <h1 className="center title">To<span className='title-orange'>-Do</span> List</h1>

                <AddItem add={this.addItem} />
                <List delete={this.deleteItem} data={this.state.list} />
            </div>
        );
    }
}

export default App;
