import React from "react";
import { StyleSheet, View } from "react-native";
import SegmentedButtonComponent from "./components/SegmentedButtonComponent";

export default function Index() {
    const [background, setBackground] = React.useState<string>("");
    const changeBackground = (color: string) => {
    setBackground(color);
  };

  return (
    <View style={styles.container}>
      <SegmentedButtonComponent background={background} onChangeBackground={changeBackground}/>
      <View style={[styles.box, {backgroundColor: background}]}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  }
});
