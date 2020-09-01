import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import RNBounceable from "./lib/RNBounceable";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <RNBounceable>
          <View
            style={{
              padding: 12,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#eb4034",
            }}
          >
            <Text style={{ color: "#fdfdfd" }}>Bounce</Text>
          </View>
        </RNBounceable>
      </SafeAreaView>
    </>
  );
};

export default App;
