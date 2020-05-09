import React, { Component } from 'react';
import axios from 'axios'
class Mongo extends Component {
    constructor(){
        super()
        this.state = {
            azurePrd : []
        }
    }

    componentDidMount(){
        axios.get(`https://javainuser-org.cfapps.io/mongo`)
        //axios.get(`https://apolis-grocery.herokuapp.com/api/products/cat/${this.props.match.params.id}`)
        .then(response => {
            console.log(response)
            this.setState({
                azurePrd: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() { 
        
        this.html = this.state.azurePrd;
        return ( 
            <div dangerouslySetInnerHTML={{__html: this.html}}/>
                     
            
         );
    }
}

export default Mongo;
