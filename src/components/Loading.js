import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  image: {
    position: "absolute",
    top: 175,
    height: 400,
    width: 400,
    flex: 1
  }
});

// for some reason the backgroundcolor will not render
class Loading extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View
          useNativeDriver={true}
          animation="fadeOut"
          iterationCount={2000}
          easing="ease-out-quad"
        >
          <Image
            source={require("../assets/images/TimeTreeSearch.png")}
            style={styles.image}
            resizeMode="contain"
            alignSelf="center"
          />
        </Animatable.View>
      </View>
    );
  }
}

export default Loading;
