import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:20, backgroundColor:'pink'}}
                      onPress={()=>{
                          this.setState({
                              count:this.state.count+1,
                          })
                      }}
                >来，你打我呀.</Text>
                <Text style={{fontSize:20}}>被打了{this.state.count}次</Text>
            </View>
        )
    }
}