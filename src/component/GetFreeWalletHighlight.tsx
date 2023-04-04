import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function GetFreeWalletHighlight({ }): JSX.Element {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 12,
          paddingVertical: 6,
          paddingHorizontal: 24,
          borderColor: "black",
          borderWidth: 0.05,
          borderRadius: 12,
        }}
      >
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <MaterialCommunityIcons name="star-four-points" size={18} color="#FBDE3B" />
          <Text style={{
            marginLeft: 4
          }}>
            Get your free{" "}
            <Text
              style={{
                fontWeight: "600",
              }}
            >
              wallet
            </Text>{" "}
            username
          </Text>
        </View>

        <MaterialIcons name="chevron-right" size={24} color="black" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default GetFreeWalletHighlight;
