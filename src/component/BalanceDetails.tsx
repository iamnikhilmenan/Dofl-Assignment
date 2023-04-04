import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function BalanceDetails(): JSX.Element {
  return (
    <>
      <View
        style={{
          backgroundColor: "#f8fafe",
          paddingVertical: 26,
          paddingHorizontal: 20,
          borderRadius: 12,
          borderWidth:1,
          borderColor:"#f5f5f5"
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
              color: "#808588",
            }}
          >
            Total Balance
          </Text>
          <MaterialIcons
            name="remove-red-eye"
            size={16}
            color="#808588"
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
            <Text style={{ fontSize: 10, color:"#808588" }}>24H Change</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "700", color:'#117B34' }}>
                $240.
                <Text style={{ fontSize: 12, fontWeight: "700", color:'#117B34'  }}>36</Text>
              </Text>
              <MaterialIcons name="arrow-drop-up" size={24} color="#117B34" />
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
