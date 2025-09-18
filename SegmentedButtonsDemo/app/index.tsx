import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SegmentedButtonComponent from "./components/SegmentedButtonComponent";

export default function Index() {
    const [background, setBackground] = React.useState<string>("");
    const changeBackground = (color: string) => {
    setBackground(color);
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.text}
      >Click the buttons to change the color of the box!
      </Text>
      <SegmentedButtonComponent background={background} onChangeBackground={changeBackground}/>
      <View style={[styles.box, {backgroundColor: background}]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 350,
    height: 350,
    borderWidth: 2,
    marginBottom: 300,
  },
});
