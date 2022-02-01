import React from "react"
import { Icon } from "../components"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import {
  PortfolioHomeScreen,
  LearnScreen,
  MarketScreen,
  WalletScreen,
  SettingsScreen,
} from "../screens"
const Tab = createBottomTabNavigator()

function Home() {
  const tabOptions: any = {
    headerShown: false,

    tabBarStyle: {
      backgroundColor: "#3F4367F2",
      position: "absolute",
      bottom: 20,
      marginHorizontal: 20,
      height: 71,
      borderRadius: 50,
      paddingHorizontal: 5,
      paddingRight: 10,
      shadowColor: "#0000",
      paddingBottom: 15,
      shadowOpacity: 0.06,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
  }
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={PortfolioHomeScreen}
          options={{
            ...tabOptions,
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
                        // position: "absolute",
                        // bottom: 36,
                        marginTop: -10,
                        left: 4,
                        alignSelf: "center",
                        marginHorizontal: 2,
                      }}
                    ></View>
                  </View>
                ) : (
                  <></>
                )}
                <Icon
                  style={{ width: 24, height: 32, alignSelf: "center" }}
                  icon={focused ? "wallet" : "bug"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={SecureSeedPhraseScreen}
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
                        marginTop: -10,
                        left: 4,
                        alignSelf: "center",
                        marginHorizontal: 2,
                      }}
                    ></View>
                  </View>
                ) : (
                  <></>
                )}
                <Icon style={{ width: 24, height: 32, alignSelf: "center" }} icon="wallet" />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Market" component={SecureSeedPhraseScreen} options={{ ...tabOptions }} />
        <Tab.Screen name="Learn" component={SecureSeedPhraseScreen} options={{ ...tabOptions }} />
        <Tab.Screen
          name="Settings"
          component={SecureSeedPhraseScreen}
          options={{ ...tabOptions }}
        />
      </Tab.Navigator>
    </>
  )
}

export default Home
