import React from "react";
import { LearnScreen, AddProductScreen } from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Icon, Text } from "../../components";
import { Settings } from "../settings/settings-navigator";
import MarketNavigator from "../market-navigator";
import WalletScreen from "../wallet-navigator";
import PortfolioHomeScreen from "../homescreen-navigator";

export type HomeParamList = {
  welcome: undefined;
  Homescreen: undefined;
  WalletScreen: undefined;
  Market: undefined;
  Settings: undefined;
  Learn: undefined;
  BuySell: undefined;
};
const Tab = createBottomTabNavigator<HomeParamList>();

export const HomeNavigator = () => {
  const tabOptions: any = {
    headerShown: false,
    swipeEnabled: true,
    tabBarShowLabel: false,
    borderWidth: 0,
    elevation: 0,
    tabBarStyle: {
      backgroundColor: "white",
      position: "absolute",
      bottom: 20,
      // marginHorizontal: 20,
      height: 71,
      paddingHorizontal: 5,
      shadowColor: "#0000",
      paddingBottom: 15,
      marginBottom: -20,
    },
  };
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name={"Homescreen"}
          component={MarketNavigator}
          options={{
            ...tabOptions,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: "30%",
                  width: "100%",
                  alignSelf: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  style={{ width: 34, height: 32, alignSelf: "center" }}
                  icon={focused ? "activeBarChart" : "inactiveBarChart"}
                />
                <Text style={{ fontSize: 10, marginTop: 4, color: "black " }}>
                  {" "}
                  Add a product
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Market"
          component={PortfolioHomeScreen}
          options={{
            ...tabOptions,
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: "30%",
                  width: "100%",
                  alignSelf: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  style={{ width: 34, height: 32, alignSelf: "center" }}
                  icon={focused ? "activemarket" : "inactivemarket"}
                />
                <Text style={{ fontSize: 10, marginTop: 4, color: "black " }}>
                  {" "}
                  Dashboard
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            ...tabOptions,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: "30%",
                  width: "100%",
                  alignSelf: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  style={{ width: 34, height: 32, alignSelf: "center" }}
                  icon={focused ? "activesettings" : "inactivesettings"}
                />
                <Text style={{ fontSize: 10, marginTop: 4, color: "black " }}>
                  {" "}
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
