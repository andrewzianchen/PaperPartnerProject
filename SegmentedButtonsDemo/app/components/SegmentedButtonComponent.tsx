import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

type propsType = {
  background: string;
  onChangeBackground: (next: string) => void;
};

const SegmentedButtonComponent: React.FC<propsType> = ({
  onChangeBackground,
}) => {
  const [value, setValue] = React.useState("");

  const handleBackground = (color: string) => {
    onChangeBackground(color);
    setValue(color);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        style={styles.buttonStyle}
        value={value}
        onValueChange={handleBackground}
        buttons={[
          {
            value: "pink",
            label: "Pink",
          },
          {
            value: "green",
            label: "Green",
          },
          {
            value: "orange",
            label: "Orange",
          },
          {
            value: "blue",
            label: "Blue",
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
    justifyContent: "center",
  },
  buttonStyle: {
    width: 350,
  },
});

export default SegmentedButtonComponent;
