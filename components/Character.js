import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


export default class Character extends React.Component {
  render() {
    return ( 
        <TouchableOpacity onPress={()=> this.props.handleChar(this.props.content)}>
          <View style={styles.box}>
            <Text style={{color: '#4A90E2', fontSize: 20}}>{this.props.content.Text}</Text>
          </View>    
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  box:{
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    borderRadius: 9,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});