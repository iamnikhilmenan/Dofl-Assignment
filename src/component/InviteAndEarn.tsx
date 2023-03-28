import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function InviteAndEarn({}): JSX.Element {
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather
            name="gift"
            size={24}
            color="black"
            style={{
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Invite and Earn
            </Text>
            <Text
              style={{
                fontSize: 10,
              }}
            >
              Invite <Text style={{ fontWeight: "900", fontSize: 10 }}>3</Text>{" "}
              friends ad earn upto{" "}
              <Text
                style={{
                  fontWeight: "500",
                }}
              >
                $20
              </Text>{" "}
              in Matic
            </Text>
          </View>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default InviteAndEarn;
