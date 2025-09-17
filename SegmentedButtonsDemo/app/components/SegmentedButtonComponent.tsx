import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

const MyComponent = () => {
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "walk",
            label: "Walking",
            style: styles.buttonStyle,
          },
          {
            value: "train",
            label: "Transit",
            style: styles.buttonStyle,
          },
          { value: "drive", label: "Driving", style: styles.buttonStyle },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1,
    alignItems: "center",
  },
  buttonStyle: {
    width: 110,
  },
});

export default MyComponent;
