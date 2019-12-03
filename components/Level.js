import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements'

export function Level(props) {
  return (
     <View style={{alignSelf: props.align, marginRight: props.align === 'center' ? 0 : 40}}>
        <TouchableOpacity onPress={()=> props.navigation.navigate(props.screen)}>
          <View style={styles.magnifyingGlassCircle}>
            <View style={props.active ? styles.active : styles.insideCircle}>
              {
                props.image === 'Kids' ? 
                  <Image style={{alignSelf: "center"}} source={require(`../assets/images/Kids.png`)}/> 
                :
                props.image === 'Adult' ? 
                  <Image style={{alignSelf: "center"}} source={require(`../assets/images/Adult.png`)}/> 
                :
                  <View style={{alignSelf: "center"}}>
                    <Text style={{fontSize: 18, color: '#fff'}}>
                      Level
                    </Text>
                    <Text style={{textAlign: 'center', fontSize: 18, color: '#fff'}}>
                      {props.levelNumber}
                    </Text>
                  </View>
              }
            </View>
          </View>
          {
            props.level ?
            <View style={styles.magnifyingGlassStick}>
            <Icon name='stars' color={props.active? '#FD565F' : 'grey'} />
          </View>
          : null
          }
        </TouchableOpacity>
      </View>
  );
}


const styles = StyleSheet.create({
  magnifyingGlassCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignContent: 'center'
  },
  insideCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,    
    backgroundColor: '#E2E2E2',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  active: {
    backgroundColor: '#0C5AD6',
    width: 70,
    height: 70,
    borderRadius: 50,    
    alignSelf: 'center',
    justifyContent: 'center'
  },
  magnifyingGlassStick: {
    position: 'absolute',
    right: 1,
    bottom: 4,
  }
});