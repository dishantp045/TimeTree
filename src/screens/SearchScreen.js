import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text, TextInput,
    ImageBackground,
    Button,
    Alert,
    Keyboard,
    Animated,
    Easing,
    TouchableHighlight,
    ActivityIndicator,
    } from 'react-native';
import {Header} from 'react-native-elements';

// import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create ({
    container: { // just for main screen if need be
        backgroundColor: 'dimgrey'
    },
    image: { // for time tree logo 
        flex: 1,
        width: 400,
        height: 400,
    },
    words: { // for input fields
        margin: 15,
        height: 20,
        borderColor: '#7a42f4',
        borderWidth: 0,
        alignSelf: 'baseline',
        fontSize: 20,
        flex: 0
    },
    small: { // random too scared to get rid of
        alignItems: 'baseline',
        flex: 3,
    },
    info: { // for info button
        height: 50,
        width: 50,
        flex: 1,
        position: 'absolute',
        left: 315,
        bottom: -675,
    },
    panel: { // for panel that input stuff will lay on
        height: 200,
        width: 400,
        backgroundColor: 'rgba(4,22,66,0.5)',
        flex: 1,
        position: 'absolute',
        top: 200,
        right: 0,
    },
    boxA:{ // for taxon A
        height: 40,
        width: 200,
        backgroundColor: '#d3d3d3',
        position: 'absolute',
        top: 235,
        right: 150,
        borderRadius: 10,
        flex: 1,
    },
    boxB: { // for taxon B
        height: 40,
        width: 200,
        backgroundColor: '#d3d3d3',
        position: 'absolute',
        top: 315,
        right: 150,
        borderRadius: 10,
        flex: 1,
    },
    searchButton: {
        height: 30,
        width: 80,
        backgroundColor: '#d3d3d3',
        flex: 1,
        position: 'absolute',
        right: 25,
        top: 190,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
});

class SearchScreen extends Component<Props>{
    constructor(props){
        super(props);
        this._onPress = this._onPress.bind(this);
        this.state = {taxonA: '', taxonB: '', ready: false}
    }
    handleTaxonA = (text) => {
        this.setState({ taxonA: text })
    }
    handleTaxonB = (text) => {
        this.setState({ taxonB: text })
    }
    showLoader = () => {this.setState({ ready: true }); };
    hideLoader = () => {this.setState({ ready: false }); };
    
    _onPress = () => {
        this.showLoader();
    }
    _infoPress = () => {
        alert('pressed');
    }
    render(){
        return (
            <View style = {styles.container}>
                <ImageBackground source = {require('../assets/images/TimeTreeSearch.png')}
                    imageStyle = {{resizeMode: 'contain'}}
                    style = {{height: '100%', width: '100%'}}
                >
                    <Header
                        centerComponent = {{text: 'TimeTree',style: {color: 'silver', fontSize: 40, textAlign: 'center'}}}
                        backgroundColor = 'green'
                    />
                    <View style = {styles.panel}/>
                    <View style = {styles.boxA}>
                        <TextInput
                            placeholder = 'Taxon A...'
                            style = {styles.words}
                            onChangeText = {this.handleTaxonA}
                        />
                    </View>
                    <View style = {styles.boxB}>
                        <TextInput
                            placeholder = 'Taxon B...'
                            style = {styles.words}
                            onChangeText = {this.handleTaxonB}
                        />
                    </View>
                    <TouchableHighlight
                        onPress = {this._onPress}
                    >
                        <View style = {styles.searchButton}>
                            <Text style = {styles.text}>Search</Text>
                        </View>
                    </TouchableHighlight>
                    <View style = {{position: 'absolute', top: "35%", right: "15%", left: "25%"}}>
                        <ActivityIndicator animating={this.state.ready} size = "large" color= 'red' />
                    </View>
                    <TouchableHighlight
                        onPress = {this._infoPress}
                    >
                        <Image source = {require('../assets/images/info2.png')}
                            style = {styles.info}
                            resizeMode = 'contain'
                        />
                    </TouchableHighlight>
                </ImageBackground>
            </View>
        );  
    }
}

export default SearchScreen;