import React from "react";
import { LearnScreen, MarketScreen } from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Icon } from "../../components";
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
      backgroundColor: "#3F4367F2",
      position: "absolute",
      bottom: 20,
      // marginHorizontal: 20,
      height: 71,
      borderRadius: 50,
      paddingHorizontal: 5,
      shadowColor: "#0000",
      paddingBottom: 15,
      marginBottom: -18
    },
  };
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name={"Homescreen"}
          component={PortfolioHomeScreen}
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
                {focused ? (
                  <View
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "60%",
                        height: 2,
                        backgroundColor: "#F3B050",
                        marginTop: -20,
                        left: 1,
                        alignSelf: "center",
                        marginHorizontal: 2,
                      }}
                    ></View>
                  </View>
                ) : (
                  <></>
                )}
                <Icon
                  style={{ width: 34, height: 32, alignSelf: "center" }}
                  icon={focused ? "activeBarChart" : "inactiveBarChart"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="WalletScreen"
          component={WalletScreen}
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
                {focused ? (
                  <View
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "60%",
                        height: 2,
                        backgroundColor: focused ? "#F3B050" : "white",
                        marginTop: -20,
                        left: 0,
                        alignSelf: "center",
                        marginHorizontal: 2,
                      }}
                    ></View>
                  </View>
                ) : (
                  <></>
                )}
                <Icon
                  style={{ width: 34, height: 32, alignSelf: "center" }}
                  icon={focused ? "activewallet" : "inactivewallet"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Market"
          component={MarketNavigator}
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
                {focused ? (
                  <View
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "60%",
                        height: 2,
                        backgroundColor: focused ? "#F3B050" : "white",
                        marginTop: -20,
                        alignSelf: "center",
                        marginHorizontal: 2,
                      }}
                    ></View>
                  </View>
                ) : (
                  <></>
                )}
                <Icon
                  style={{ width: 34, height: 32, alignSelf: "center" }}
                  icon={focused ? "activemarket" : "inactivemarket"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={"Learn"}
          component={LearnScreen}
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
                {focused ? (
                  <View
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "60%",
                        height: 2,
                        backgroundColor: focused ? "#F3B050" : "white",
                        // position: "absolute",
                        // bottom: 36,
                        marginTop: -20,
                        left: 0,
                        alignSelf: "center",
                        marginHorizontal: 2,
                      }}
                    ></View>
                  </View>
                ) : (
                  <></>
                )}
                <Icon
                  style={{ width: 34, height: 32, alignSelf: "center" }}
                  icon={focused ? "activeLearn" : "inactiveLearn"}
                />
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
                {focused ? (
                  <View
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "60%",
                        height: 2,
                        backgroundColor: focused ? "#F3B050" : "white",
                        // position: "absolute",
                        // bottom: 36,
                        marginTop: -20,
                        left: -2,
                        alignSelf: "center",
                        marginHorizontal: 2,
                      }}
                    ></View>
                  </View>
                ) : (
                  <></>
                )}
                <Icon
                  style={{ width: 34, height: 32, alignSelf: "center" }}
                  icon={focused ? "activesettings" : "inactivesettings"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
