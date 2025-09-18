import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

<<<<<<< Updated upstream
const MyComponent = () => {
=======
type propsType ={
  background: string;
  onChangeBackground: (next: string) => void;
}

const SegmentedButtonComponent: React.FC<propsType> = ({
  onChangeBackground,
}) => {
>>>>>>> Stashed changes
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons style = {styles.buttonStyle}
        value={value}
        onValueChange={setValue}
        buttons={[
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
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

export default MyComponent;
