import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class Greeting extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Text style={{fontSize:20, backgroundColor:'pink'}}>Hello</Text>
        );
    }
}


