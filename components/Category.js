import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


export default class Category extends React.Component {
  render() {
    return (
       <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={
              ()=>this.props.navigation? 
                this.props.navigation.navigate(this.props.screen)
                : null
            }
            >
            <View style={styles.magnifyingGlassCircle}>
              <View style={this.props.active ? styles.active : styles.insideCircle}>
                {
                  this.props.image === 'Welcome' ? 
                    <Image style={{alignSelf: "center"}} source={require(`../assets/images/welcome.png`)}/> 
                  :
                  this.props.image === 'time' ? 
                    <Image style={{alignSelf: "center"}} source={require(`../assets/images/time.png`)}/> 
                  :
                  this.props.image === 'months' ? 
                    <Image style={{alignSelf: "center"}} source={require(`../assets/images/months.png`)}/> 
                  :
                  this.props.image === 'days' ? 
                    <Image style={{alignSelf: "center"}} source={require(`../assets/images/days.png`)}/> 
                  :
                  this.props.image === 'weather' ? 
                    <Image style={{alignSelf: "center"}} source={require(`../assets/images/weather.png`)}/> 
                  :
                  this.props.image === 'grammar' ? 
                    <Image style={{alignSelf: "center"}} source={require(`../assets/images/grammar.png`)}/> 
                  :
                    <View style={{alignSelf: "center"}}>
                      <Text style={{textAlign: 'center', fontSize: 32, color: '#fff', fontWeight: 'bold'}}>
                        {this.props.categoryName}
                      </Text>
                    </View>
                }
              </View>
            </View>
            {
              this.props.level ?
              <View style={styles.magnifyingGlassStick}>
              <Icon name='stars' color={this.props.active? '#FD565F' : 'grey'} />
            </View>
            : null
            }
          </TouchableOpacity>
        </View>
    );
  }
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