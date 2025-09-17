import { StyleSheet, Text, View } from "react-native";
import SegmentedButtonComponent from "./components/SegmentedButtonComponent";

export default function Index() {
  return (
    <View style={styles.container}>
      <SegmentedButtonComponent />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
