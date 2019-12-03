import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import Keyboard from '../components/Keyboard';


class LearnScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {image: '', french: '', english: '', sound: '', play: false}
        this.playbackInstance = null;
    }
    componentDidMount() {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false,
        });
        //  This function will be called
        // this._loadNewPlaybackInstance(true);
    }
    _onPlaybackStatusUpdate = (playbackStatus) => {
        if (playbackStatus.didJustFinish) {
            this.setState({
                play: false
            });
        }
    };
    async _loadNewPlaybackInstance(playing, link) {
        if (this.playbackInstance != null) {
            await this.playbackInstance.unloadAsync();
            this.playbackInstance.setOnPlaybackStatusUpdate(null);
            this.playbackInstance = null;
        }
        const source = {
            uri: link,
        };
        // require('../assets/sound/a.mp3');
        const initialStatus = {
            //        Play by default
            shouldPlay: playing,
            //        Control the speed
            rate: 1.0,
            //        Correct the pitch
            shouldCorrectPitch: true,
            //        Control the Volume
            volume: 1.0,
            //        mute the Audio
            isMuted: !playing,
        };
        const {
            sound,
            status
        } = await Audio.Sound.createAsync(
            source,
            initialStatus
        );
        //  Save the response of sound in playbackInstance
        this.playbackInstance = sound;
        //  Make the loop of Audio
        this.playbackInstance.setIsLoopingAsync(false);
        this.playbackInstance.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
        //  Play the Music
        this.playbackInstance.playAsync();
    }

    handleChar = (content) => {
        this.setState({image: content.Image, french: content.French, english: content.English, sound: content.Sound, play: true},
            () =>{
            this._loadNewPlaybackInstance(this.state.play, this.state.sound)
        })
    }
    playSound = (link) => {
        this.setState({play: !this.state.play}, () => {
      // do something after the stars are rendered
      this._loadNewPlaybackInstance(this.state.play, link)
    })
    }
    render(){
        const {image, french, english, sound, play} = this.state
        return (
        <ScrollView style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
                {
                    image? 
                    <Image source={{uri: image}} style={{width: '100%', height: 200, alignSelf: 'center', resizeMode: 'contain'}}/>
                    :
                    <Image source={require('../assets/images/empty.png')} style={{width: '100%', height: 200, alignSelf: 'center', resizeMode: 'contain'}}/>
                }
            </View>
            <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row'}}>
                <TouchableOpacity>
                    <View style={{flex: 1, justifyContent: 'center', flex: 1}}>
                        {
                            sound? 
                            <TouchableOpacity onPress={()=>this.playSound(sound)}>
                                {
                                    play ? 
                                    <Image style={{alignSelf: 'center', resizeMode: 'contain'}} source={require('../assets/images/soundPlay.png')}/>
                                    :
                                    <Image style={{alignSelf: 'center', resizeMode: 'contain'}} source={require('../assets/images/soundMuted.png')}/>
                                }
                            </TouchableOpacity>
                            :
                            <View/>
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{flex: 2, color: '#4A90E2', fontWeight: 'bold', fontSize: 36, textAlign: 'center'}}>
                    {french}
                </Text>
            </View>
            <Keyboard onClick={this.handleChar} navigation={this.props.navigation} />
        </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});

export default LearnScreen