import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css';
import React, { Component } from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import { randomString } from '../helpers';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=youwildforthat';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: [],
            error: ''
        }
    }

    addItem = async (item) => {
        const resp = await axios.post(BASE_URL + API_KEY, item);

        console.log("Add item response:", resp);
        this.getListData();
    }

    deleteItem = async (id) => {
        console.log('Delete item with ID:', id);

        // http://api.reactprototypes.com/todos/5be4a795d2af63260da32ac0?key=c718_demouser
        const resp = await axios.delete(`${BASE_URL}/${id + API_KEY}`);
        this.getListData();
    }

    componentDidMount(){
        this.getListData();
    }

    async getListData(){
        try {
            const resp = await axios.get(BASE_URL + API_KEY);

            this.setState({
                list: resp.data.todos
            });
        } catch(err) {
            this.setState({
                error: 'Error getting to-dos'
            })
        }
        

        // Tradional AXIOS Call
        //
        // http://api.reactprototypes.com/todos?key=c718_demouser
        // axios.get(BASE_URL + API_KEY).then((response) => {
        //     console.log('Server response:', response);

        //     this.setState({
        //         list: response.data.todos
        //     });
        // }).catch((err) => {
        //     console.log('Request Error:', err.message);
        //     this.setState({
        //         error: 'Error getting to-dos'
        //     })
        // });
    }

    render(){
        const {error} = this.state

        return(
            <div className="container">
                <h1 className="center title">To<span className='title-orange'>-Do</span> List</h1>

                <AddItem add={this.addItem} />

                {
                    error 
                        ? <h1 className="center red-text">{error}</h1> 
                        : <List delete={this.deleteItem} data={this.state.list} />
                }
                
            </div>
        );
    }
}

export default App;
