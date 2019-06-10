import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    panel: {
        height: 200,
        width: 400,
        backgroundColor: 'rgba(4,22,66,0.5)',
        flex: 1,
        position: 'absolute',
        top: 200,
        right: 0,
    },
    boxA: {
        height: 40,
        width: 200,
        backgroundColor: '#d3d3d3',
        position: 'absolute',
        top: 235,
        right: 150,
        borderRadius: 10,
        flex: 1,
    },
    boxB: {
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
        top: 280,
        borderRadius: 10,
    },
    words: { // for input fields
        margin: 15,
        height: 29,
        borderColor: '#7a42f4',
        borderWidth: 0,
        textAlign: 'center',
        fontSize: 15,
        flex: 0
    },
    text: {
        fontSize: 8,
        textAlign: 'center',
    },
});

class PopDownPanel extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {taxonA: '', taxonB: ''}
    }

    handleTaxonA = (text) => {
        this.setState({taxonA : text})
    }
    handleTaxonB = (text) => {
        this.setState({taxonB : text})
    }
    _onPress = () => {
        alert("Taxon A: "+ this.state.taxonA + "\n" + "Taxon B: " + this.state.taxonB);
    }
    render(){
        return(
            <Animatable.View
                animation = 'fadeOutRight'
                delay = {5000}
            >
                <View style = {styles.panel}/>
                    <View style = {styles.boxA}>
                        <TextInput
                            fontSize = {15}
                            placeholder = 'Taxon A...'
                            onChangeText = {this.handleTaxonA}
                            style = {styles.words}
                        />
                    </View>
                    <View style = {styles.boxB}>
                        <TextInput
                            placeholder = 'Taxon B...'
                            onChangeText = {this.handleTaxonB}
                            style = {styles.words}
                        />
                    </View>
                    <TouchableOpacity
                        style = {styles.searchButton}
                        onPress = {this._onPress}
                    >
                        <Text style = {styles.words}>Search</Text>
                    </TouchableOpacity>
            </Animatable.View>
        );
    }
}

export default PopDownPanel;