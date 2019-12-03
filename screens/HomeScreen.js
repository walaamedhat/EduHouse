import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex:2}}>
        < Image source = {
          require('../assets/images/Comp-1.gif')
        }
        />
      </View>
      <View style={{flex: 2, position: 'relative'}}>
        < Image source = {
          require('../assets/images/blueShape.png')
        }
        />
        <TouchableOpacity
          style={styles.startButton}
          onPress = {
            () => navigation.navigate('Select')
          }
        >
          <Text style={styles.helpLinkText}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ); 
}

HomeScreen.navigationOptions = {
  header: null,
  tabBarVisible: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  startButton: {
      position: 'absolute',
      top: '70%',
      left: '50%',
      backgroundColor: '#ED004E',
      padding: 10,
      borderRadius: 50,
      width: 200,
      zIndex: 1
  },
  helpLinkText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  },
});

{/* <ScrollView
        style={styles.container}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/Home.png')
            }
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.helpLinkText}>
              Commencez
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView> */}