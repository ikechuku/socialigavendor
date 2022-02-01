import React, { FC } from "react";
import { View, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Screen, GradientBackground, Text, Icon } from "../../components";
import { color } from "../../theme";
import { NavigatorParamList } from "../../navigators";
import { ScrollView } from "react-native-gesture-handler";

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  flex: 1,
};

const BOLD: TextStyle = { fontWeight: "bold" };

const COIN_NAME: TextStyle = {
  color: color.palette.white,
  fontSize: 10,
  lineHeight: 22,
  marginHorizontal: "auto",
  fontWeight: "bold",
  marginTop: 5,
};

const CUBE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  marginTop: 30,
  justifyContent: "space-evenly",
  width: "100%",
  backgroundColor: color.palette.deepBlue,
  paddingVertical: 5,
};

const BIG_CUBE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  // marginVertical: 40,
  justifyContent: "space-evenly",
  width: "100%",
  // borderWidth: 1,
};

const BIG_CUBE: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  display: "flex",
  borderRadius: 20,
  padding: 15,
  height: 130,
  width: "40%",
  marginHorizontal: 10,
  marginBottom: 10,
};

const JUSTIFY_BETWEEN: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
};
const COINS: TextStyle = {
  ...BOLD,
  fontSize: 14,
  lineHeight: 20,
  fontStyle: "normal",
  color: "white",
};
const TITLE: TextStyle = {
  ...BOLD,
  fontStyle: "normal",
  fontSize: 20,
  lineHeight: 27,
  color: "white",
};

const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 10,
  marginHorizontal: 15,
  marginVertical: 10,
  justifyContent: "space-between",
};

const CENTER: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: "auto",
};
const FLEX: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: "auto",
};

const LINE: ViewStyle = {
  width: 40,
  height: 6,
  backgroundColor: color.palette.deeperBlue,
};
const MANAGE: ViewStyle = {
  width: 62,
  height: 30,
  borderRadius: 3,
  backgroundColor: color.palette.lightPurple,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

export const WalletScreen: FC<StackScreenProps<NavigatorParamList>> = observer(
  ({ navigation }) => {
    const NextScreen = () => navigation.navigate("ManageWalletScreen");
    const goBack = () => navigation.goBack();

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="WalletScreen" style={FULL}>
          <GradientBackground
            colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
          />
          <Screen
            style={[CONTAINER, { flex: 1, height: "100%", paddingBottom: 200 }]}
            preset="scroll"
            backgroundColor={color.palette.deeperBlue}
          >
            <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={goBack}>
                  <Icon
                    icon="back"
                    style={{ padding: 6, marginRight: 20, height: 15 }}
                  />
                </TouchableOpacity>
                <Text style={{}} preset="header" text="Wallet" />
              </View>
              <View style={MANAGE}>
                <TouchableOpacity onPress={NextScreen}>
                  <Text style={{ color: "white" }} text="Manage" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={CUBE_CONTAINER}>
              <Text style={COINS} text="ALL" />
              <Text style={COINS} text="ETH" />
              <Text style={COINS} text="BSC" />
              <Text style={COINS} text="SOLANA" />
              <Text style={COINS} text="DEFI" />
            </View>
            <View style={[CENTER, { marginBottom: 10 }]}>
              <View style={LINE}></View>
            </View>

            <View
              style={{
                backgroundColor: color.palette.deeperBlue,
                paddingBottom: 0,
              }}
            >
              <View style={[BIG_CUBE_CONTAINER, { marginLeft: 12 }]}>
                <View style={BIG_CUBE}>
                  <View style={JUSTIFY_BETWEEN}>
                    <Icon style={{ height: 25, width: 25 }} icon="btc" />
                    <Text style={{ color: "green" }}>+5.67%</Text>
                  </View>
                  <Text style={COIN_NAME}>BTC</Text>
                  <Text style={COIN_NAME}>0.35 BTC</Text>
                  <Text
                    style={{
                      color: color.palette.lightGrey,
                      fontSize: 10,
                    }}
                  >
                    USD 1,875.29
                  </Text>
                </View>
                <View style={BIG_CUBE}>
                  <Icon style={{ height: 25, width: 25 }} icon="doge" />
                  <Text style={COIN_NAME}>DOG</Text>
                  <Text
                    style={[
                      COIN_NAME,
                      { fontSize: 12, color: color.palette.purple },
                    ]}
                  >
                    USD 1,875.29
                  </Text>
                  <View style={FLEX}>
                    <Text style={COIN_NAME}>USD 1,875.29</Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        backgroundColor: "green",
                      }}
                    >
                      <Icon style={{ height: 10, width: 10 }} icon="check" />
                    </View>
                  </View>
                </View>
                <View style={BIG_CUBE}>
                  <Icon style={{ height: 25, width: 25 }} icon="etherum" />
                  <Text style={COIN_NAME}>DOG</Text>
                  <Text
                    style={[
                      COIN_NAME,
                      { fontSize: 12, color: color.palette.purple },
                    ]}
                  >
                    USD 1,875.29
                  </Text>
                  <View style={FLEX}>
                    <Text style={COIN_NAME}>USD 1,875.29</Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        backgroundColor: "green",
                      }}
                    >
                      <Icon style={{ height: 10, width: 10 }} icon="check" />
                    </View>
                  </View>
                </View>
                <View style={BIG_CUBE}>
                  <Icon style={{ height: 25, width: 25 }} icon="usa" />
                  <Text style={COIN_NAME}>DOG</Text>
                  <Text
                    style={[
                      COIN_NAME,
                      { fontSize: 12, color: color.palette.purple },
                    ]}
                  >
                    USD 1,875.29
                  </Text>
                  <View style={FLEX}>
                    <Text style={COIN_NAME}>USD 1,875.29</Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        backgroundColor: "green",
                      }}
                    >
                      <Icon style={{ height: 10, width: 10 }} icon="check" />
                    </View>
                  </View>
                </View>
                <View style={BIG_CUBE}>
                  <Icon style={{ height: 25, width: 25 }} icon="doge" />
                  <Text style={COIN_NAME}>DOG</Text>
                  <Text
                    style={[
                      COIN_NAME,
                      { fontSize: 12, color: color.palette.purple },
                    ]}
                  >
                    USD 1,875.29
                  </Text>
                  <View style={FLEX}>
                    <Text style={COIN_NAME}>USD 1,875.29</Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        backgroundColor: "green",
                      }}
                    >
                      <Icon style={{ height: 10, width: 10 }} icon="check" />
                    </View>
                  </View>
                </View>
                <View style={BIG_CUBE}>
                  <Icon style={{ height: 25, width: 25 }} icon="tron" />
                  <Text style={COIN_NAME}>DOG</Text>
                  <Text
                    style={[
                      COIN_NAME,
                      { fontSize: 12, color: color.palette.purple },
                    ]}
                  >
                    USD 1,875.29
                  </Text>
                  <View style={FLEX}>
                    <Text style={COIN_NAME}>USD 1,875.29</Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        backgroundColor: "green",
                      }}
                    >
                      <Icon style={{ height: 10, width: 10 }} icon="check" />
                    </View>
                  </View>
                </View>

                <View style={BIG_CUBE}>
                  <Icon style={{ height: 25, width: 25 }} icon="usa" />
                  <Text style={COIN_NAME}>DOG</Text>
                  <Text
                    style={[
                      COIN_NAME,
                      { fontSize: 12, color: color.palette.purple },
                    ]}
                  >
                    USD 1,875.29
                  </Text>
                  <View style={FLEX}>
                    <Text style={COIN_NAME}>USD 1,875.29</Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        backgroundColor: "green",
                      }}
                    >
                      <Icon style={{ height: 10, width: 10 }} icon="check" />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: color.palette.deepBlue,
                    display: "flex",
                    borderRadius: 20,
                    padding: 15,
                    height: 130,
                    width: "40%",
                    marginHorizontal: 10,
                    marginBottom: 10,
                    borderColor: color.palette.white,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderStyle: "dashed",
                  }}
                >
                  <TouchableOpacity
                    onPress={NextScreen}
                    style={{
                      width: 140,
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: 35,
                        height: 35,
                        borderRadius: 100,
                        borderStyle: "dashed",
                        backgroundColor: color.palette.black,
                      }}
                    >
                      <Icon style={{ height: 18, width: 18 }} icon="plus" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Screen>
          <View />
        </View>
      </ScrollView>
    );
  }
);

const CoinComponent = ({ coin, icon, amount }) => {
  return (
    <View style={BIG_CUBE}>
      <Icon style={{ height: 25, width: 25 }} icon="doge" />
      <Text style={COIN_NAME}>DOG</Text>
      <Text style={COIN_NAME}>USD 1,875.29</Text>
    </View>
  );
};
