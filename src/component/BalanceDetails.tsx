import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function BalanceDetails(): JSX.Element {
  return (
    <>
      <View
        style={{
          backgroundColor: "#B9D9EB",
          paddingVertical: 26,
          paddingHorizontal: 20,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "grey",
            }}
          >
            Total Balance
          </Text>
          <MaterialIcons
            name="remove-red-eye"
            size={16}
            color="black"
            style={{ paddingLeft: 2 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 16,
          }}
        >
          <Text
            style={{
              fontSize: 28,
            }}
          >
            $6,554.<Text style={{ fontSize: 16 }}>00</Text>
          </Text>
          <View>
            <Text style={{ fontSize: 10 }}>24H Change</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "700" }}>
                $240.
                <Text style={{ fontSize: 12, fontWeight: "700" }}>36</Text>
              </Text>
              <MaterialIcons name="arrow-drop-up" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BalanceDetails;
