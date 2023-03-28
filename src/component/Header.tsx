import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Header({ onQRCodehandler, navigation }: any): JSX.Element {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 12,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "grey",
            }}
          >
            Hello
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "black",
            }}
          >
            0xbc...00f2
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MaterialIcons name="notifications-active" size={24} color="black" />
          <MaterialIcons
            name="qr-code-scanner"
            size={24}
            color="black"
            style={{ paddingLeft: 12 }}
            onPress={() => onQRCodehandler()}
          />
        </View>
      </View>
      {/* ///////////////////////////////// */}

      {/* ///////////////////////////////// */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Header;
