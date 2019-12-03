import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Category from '../components/Category';

 
class CategoriesScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
          <View style={{flex:1, alignSelf:'center'}}>
            <Category active level categoryName='A' screen='Learn' navigation={this.props.navigation}/>
          </View>
          <View style={{flex:1, alignSelf:'center', marginTop: 15}}>
            <Text style={{color: '#2968CD'}}>The alphabet</Text>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
             <Category level categoryName='123'/>
             <Category level image='Welcome'/>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
             <Text style={{color: '#E2E2E2'}}>Numbers</Text>
             <Text style={{color: '#E2E2E2'}}>Greetings</Text>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
             <Category level image='months'/>
             <Category level image='days'/>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
             <Text style={{color: '#E2E2E2'}}>The Months</Text>
             <Text style={{color: '#E2E2E2'}}>The Days</Text>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
             <Category level image='weather'/>
             <Category level image='time'/>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
             <Text style={{color: '#E2E2E2'}}>Seasons</Text>
             <Text style={{color: '#E2E2E2'}}>Time</Text>
          </View>
          <View style={{flex:1, alignSelf:'center'}}>
             <Category level image='grammar'/>
          </View>
          <View style={{flex:1, alignSelf:'center', marginBottom: 15 }}>
             <Text style={{color: '#E2E2E2'}}>Grammar</Text>
          </View>
      </ScrollView>
    ); 

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 50,
    backgroundColor: '#fff',
  },
});

export default CategoriesScreen