import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import Character from './Character'

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: ''
        }
     }
    componentDidMount() {
        fetch('http://demo7145971.mockable.io/charContent')
            .then((response) => response.json())
            .then((respnseJSON) =>
                this.setState({
                    data: respnseJSON,
                    isLoading: false
                }))
            .catch((error) => console.error(error))
    }
    render() {
        const {data} = this.state
        return (
            !this.state.isLoading ? 
            <View style={styles.container}>
                <View style={styles.row}>
                    <Character handleChar={this.props.onClick} content={data[0]}/>   
                    <Character handleChar={this.props.onClick} content={data[1]}/>   
                    <Character handleChar={this.props.onClick} content={data[2]}/>   
                    <Character handleChar={this.props.onClick} content={data[3]}/>   
                    <Character handleChar={this.props.onClick} content={data[4]}/>   
                </View>
                <View style={styles.row}>
                    <Character handleChar={this.props.onClick} content={data[5]}/>   
                    <Character handleChar={this.props.onClick} content={data[6]}/>   
                    <Character handleChar={this.props.onClick} content={data[7]}/>   
                    <Character handleChar={this.props.onClick} content={data[8]}/>   
                    <Character handleChar={this.props.onClick} content={data[9]}/>   
                </View>
                <View style={styles.row}>
                    <Character handleChar={this.props.onClick} content={data[10]}/>   
                    <Character handleChar={this.props.onClick} content={data[11]}/>   
                    <Character handleChar={this.props.onClick} content={data[12]}/>   
                    <Character handleChar={this.props.onClick} content={data[13]}/>   
                    <Character handleChar={this.props.onClick} content={data[14]}/>   
                </View>
                <View style={styles.row}>
                    <Character handleChar={this.props.onClick} content={data[15]}/>   
                    <Character handleChar={this.props.onClick} content={data[16]}/>   
                    <Character handleChar={this.props.onClick} content={data[17]}/>   
                    <Character handleChar={this.props.onClick} content={data[18]}/>   
                    <Character handleChar={this.props.onClick} content={data[19]}/>   
                </View>
                <View style={styles.row}>
                    <Character handleChar={this.props.onClick} content={data[20]}/>   
                    <Character handleChar={this.props.onClick} content={data[21]}/>   
                    <Character handleChar={this.props.onClick} content={data[22]}/>   
                    <Character handleChar={this.props.onClick} content={data[23]}/>   
                    <Character handleChar={this.props.onClick} content={data[24]}/>   
                </View>
                <View style={{justifyContent: 'space-between', flex: 1,flexDirection: 'row', margin: 20}}>
                    <Character handleChar={this.props.onClick} content={data[25]}/>
                    < TouchableOpacity onPress = {
                        () => this.props.navigation? this.props.navigation.navigate('Test',{data}): null
                    }
                    style = {
                        {
                            justifyContent: 'center',
                            backgroundColor: !this.props.test?'#ED004E':'green',
                            padding: 10,
                            borderRadius: 10,
                            width: 190
                        }
                    } >
                        <Text style={{fontSize: 14,color: '#fff',textAlign: 'center'}}>{!this.props.test?'Try Yourself': 'Check your Answer'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View></View>
        );       
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
  }
});