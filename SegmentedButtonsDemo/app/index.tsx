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
<<<<<<< Updated upstream
=======
  text:{
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
>>>>>>> Stashed changes
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
<<<<<<< Updated upstream
=======
  box: {
    width: 350,
    height: 350,
    borderWidth: 2,
    marginBottom: 100,
  },
>>>>>>> Stashed changes
});
