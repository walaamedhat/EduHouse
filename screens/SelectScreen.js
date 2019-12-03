import React from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity, Text } from 'react-native';
import {Level} from '../components/Level';

export default class SelectScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Text style={styles.title}>
              Are You ...
        </Text>
        <View style={styles.type}>
          <Level active align='center' image='Kids' screen='Levels' navigation={this.props.navigation}/>
          <Level active align='center' image='Adult' screen='Levels' navigation={this.props.navigation}/>
        </View>
        <View style={styles.typeText}>
          <Text style={{color: '#2365CE', fontSize: 20, fontWeight: 'bold'}}>Kid?</Text>
          <Text style={{color: '#2365CE', fontSize: 20, fontWeight: 'bold'}}>Adult?</Text>
        </View>
        <View style={styles.language}>
          <Text style={styles.question}>
            Your native language:
          </Text>
          <TouchableOpacity>
            <Image style={{alignSelf: 'center', marginTop: 15, resizeMode: 'contain'}} source={require('../assets/images/select.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:1}}>
        <Image source = {
          require('../assets/images/blueShape.png')
        }
        />
      </View>
    </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  },
  title: {
    flex: .4,
    color: '#2365CE',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginLeft: 25

  },
  type: {
    flex:1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  typeText: {
    flex:.3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  language: {
    flex: .9,
  },
  question: {
    color: '#2365CE',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  }
});