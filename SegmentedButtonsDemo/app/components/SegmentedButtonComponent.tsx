import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

type propsType ={
  background: string;
  onChangeBackground: (next: string) => void;
}

const SegmentedButtonComponent: React.FC<propsType> = ({
  //background,
  onChangeBackground,
}) => {
  const [value, setValue] = React.useState("");

  const handleBackground = (color: string) => {
    onChangeBackground(color);
    setValue(color);

  }
  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={handleBackground}
        buttons={[
        { 
          value: "pink",
          label: "Pink",
          style: styles.buttonStyle
        },
        { 
          value: "green", 
          label: "Green", 
          style: styles.buttonStyle 
        },
        { 
          value: "orange",
          label: "Orange",
          style: styles.buttonStyle 
        },
        { 
          value: "blue",
          label: "Blue", 
          style: styles.buttonStyle 
        },
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

export default SegmentedButtonComponent;
