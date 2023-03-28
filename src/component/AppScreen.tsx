import React from "react";
import { Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

function AppScreen({ children, style }: any): JSX.Element {
  return (
    <>
      <SafeAreaView style={[{ flex: 1, backgroundColor: "white" }, style]}>
        <StatusBar />
        {children}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppScreen;
