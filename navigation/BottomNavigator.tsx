import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Foundation,
  MaterialIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import HomeScreen from "../src/screen/HomeScreen";
import PortfolioScreen from "../src/screen/PortfolioScreen";
import WalletScreen from "../src/screen/WalletScreen";
import SettingsScreen from "../src/screen/SettingsScreen";
import ScannerScreen from "../src/screen/ScannerScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Scan" component={ScannerScreen} />
    </Stack.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 70,
          },
        }}
      >
        <Tab.Screen
          name="StackNavigator"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Foundation
                  name="home"
                  size={24}
                  color={focused ? "#0052FE" : "black"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: focused ? "800" : "700",
                    color: focused ? "#0052FE" : "#231f1e",
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <MaterialIcons
                  name="pie-chart-outlined"
                  size={24}
                  color={focused ? "#0052FE" : "black"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: focused ? "800" : "700",
                    color: focused ? "#0052FE" : "#231f1e",
                  }}
                >
                  Portfolio
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Ionicons
                  name="wallet-outline"
                  size={24}
                  color={focused ? "#0052FE" : "black"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: focused ? "800" : "700",
                    color: focused ? "#0052FE" : "#231f1e",
                  }}
                >
                  Wallet
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Feather
                  name="settings"
                  size={24}
                  color={focused ? "#0052FE" : "black"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: focused ? "800" : "700",
                    color: focused ? "#0052FE" : "#231f1e",
                  }}
                >
                  Settings
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
