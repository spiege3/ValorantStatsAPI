import { getByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';
const valorantAPI = require('unofficial-valorant-api');

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            accountName:"",
            tag:"",
            region:""
        }
    }

    displayAccountInfo = () =>{
        const acc = valorantAPI.getAccount(this.state.accountName, this.state.tag)
        acc.then(value => {
            document.write(value.name)
        })
        return(console.log(acc))
    }
    

    handleChange = (event) =>{
        this.setState({
            accountName : event.target.value
        })
    }
    handleChange2 = (event) =>{
        this.setState({
            tag : event.target.value
        })
    }

    render() { 
        return (
            <div>
            <input type="text" value = {this.state.accountName} onChange={this.handleChange}></input> 
            <input type="text" value = {this.state.tag} onChange={this.handleChange2}></input> 
            <select name="region" id="rgn">
                <option value="EUW">EUW</option>
                <option value="NA">NA</option>
            </select>
            <button onClick={this.displayAccountInfo}>SEARCH</button>
            <div>
                <output></output>
            </div>
            </div>

            );
    }
}
 
export default Search;