import { getByDisplayValue } from '@testing-library/react';
import React, { Component, useState } from 'react';
import styles from './Search.module.css';
import AccountInfo from './AccountInfo';
const valorantAPI = require('unofficial-valorant-api');

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accountName:"",
            trueAccountName:"",
            tag:"",
            region:"",
            output: []
        }
        
    }



    handleChange = (event) => {
        this.setState({
            accountName: event.target.value
        })
    }
    handleChange2 = (event) => {
        this.setState({
            tag: event.target.value
        })
    }
    getInfo = () => {
        const acc = valorantAPI.getAccount(this.state.accountName, this.state.tag)
        acc.then(value => {
            this.setState({
                region: value.data.region,
                
            })
        })
        return (console.log(acc))
      }

    setaccountInfo = ( ) => {
        this.getInfo();
        this.setState({
            trueAccountName: this.state.accountName
        })
    }

    giveInfo = () => {
        const [accName, setName ] = useState('')
        setName( accName = this.state.accountName)
    }

    giveName = () =>{
        return this.state.trueAccountName
    }

    giveRegion = () => {
        return this.state.region
    }


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.search}>
                    <input className={styles.name} type="text" value={this.state.accountName} onChange={this.handleChange}></input>
                    <input className={styles.tag} type="text" value={this.state.tag} onChange={this.handleChange2}></input>
                    <button className={styles.button_design} onClick={this.displayAccountInfo}>SEARCH</button>
                </div>
                <select className={styles.rgn} name="region" id="rgn">
                    <option value="EUW">EUW</option>
                    <option value="NA">NA</option>
                </select>
<<<<<<< HEAD
=======
                <button onClick={this.setaccountInfo}>SEARCH</button>
>>>>>>> c40d74d858cb61a0cecd95c907d2f14087dd7bbb
                <div>
                    <AccountInfo giveName={this.giveName()} giveRegion={this.giveRegion()}></AccountInfo>
                    
                    <output >
                    </output>
                </div>
            </div>

        );
    }
}

export default Search;