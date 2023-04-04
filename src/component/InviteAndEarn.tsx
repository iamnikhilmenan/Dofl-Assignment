import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function InviteAndEarn({ }): JSX.Element {
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
          borderColor: "#f5f5f5",
          borderWidth: 0.5,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather
            name="gift"
            size={24}
            color="#2c2c2c"
            style={{
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: '#404040'
              }}
            >
              Invite and Earn
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: "#888888"
              }}
            >
              Invite <Text style={{ fontWeight: "900", fontSize: 10, color: "#404040" }}>3</Text>{" "}
              friends ad earn upto{" "}
              <Text
                style={{
                  fontWeight: "500",
                  color: "#404040"
                }}
              >
                $20 in Matic
              </Text>
            </Text>
          </View>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </View>
    </>
  );
}

export default InviteAndEarn;
