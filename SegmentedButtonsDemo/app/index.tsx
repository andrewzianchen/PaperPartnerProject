import { StyleSheet, View } from "react-native";
import SegmentedButtonComponent from "./components/SegmentedButtonComponent";

export default function Index() {

  return (
    <View style={styles.container}>
      <SegmentedButtonComponent />
      <View style={styles.box}>

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
