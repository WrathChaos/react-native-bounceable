import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <RNBounceable onPress={() => {}}>
          <View style={styles.bounceButtonStyle}>
            <Text style={styles.bounceButtonTextStyle}>Bounce</Text>
          </View>
        </RNBounceable>
      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bounceButtonStyle: {
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eb4034",
  },
  bounceButtonTextStyle: {
    color: "#fdfdfd",
  },
};

export default App;
