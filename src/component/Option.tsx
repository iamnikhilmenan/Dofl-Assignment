import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  text: string;
}

const optionsData = [
  {
    name: "Buy Crypto",
    icon: "attach-money",
    bgcolor: "#E7FFF9",
    color: "#19A684",
  },
  {
    name: "Swap Crypto",
    icon: "swap-vert",
    bgcolor: "#FFF4E6",
    color: "#FF8A00",
  },
  {
    name: "Transactions",
    icon: "mobile-friendly",
    bgcolor: "#F0F6FF",
    color: "#0052FE",
  },
  {
    name: "Markets",
    icon: "show-chart",
    bgcolor: "#F8F8F8",
    color: "#7B8DA3",
  },
];

const { width } = Dimensions.get("screen");

function Option({}) {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          marginVertical: 8,
          justifyContent: "center",
        }}
      >
        {optionsData.map((item, index) => (
          <View
            style={{
              backgroundColor: item.bgcolor,
              width: width * 0.4,
              height: width * 0.3,
              margin: width * 0.012,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
            key={index.toString()}
          >
            <MaterialIcons name={item.icon} size={24} color="black" />
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: 16,
                fontWeight: "400",
                color: item.color,
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
});

export default Option;
