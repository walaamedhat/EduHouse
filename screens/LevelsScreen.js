import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {Level} from '../components/Level';


class LevelsScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
          <Level align='center' active level levelNumber='1' screen='Category' navigation={this.props.navigation}/> 
          <Level align='flex-end' level levelNumber= '2' screen='Category' navigation={this.props.navigation}/>
          <Level align='center' level levelNumber='3' screen='Category' navigation={this.props.navigation}/>
          <Level align='flex-end' level levelNumber='4' screen='Category' navigation={this.props.navigation}/>
          <Level align='center' level levelNumber='5' screen='Category' navigation={this.props.navigation}/>
          <Level align='flex-end' level levelNumber='6' screen='Category' navigation={this.props.navigation}/>
          <Level align='center' level levelNumber='7' screen='Category' navigation={this.props.navigation}/>
          <Level align='flex-end' level levelNumber='8' screen='Category' navigation={this.props.navigation}/>
          <Level align='center' level levelNumber='9' screen='Category' navigation={this.props.navigation}/>
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 100,
    paddingRight: 70,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
});

export default LevelsScreen