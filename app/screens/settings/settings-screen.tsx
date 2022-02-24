import React, { FC } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  Text as NativeText,
  Image,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Screen, GradientBackground, Text, Icon } from "../../components";
import { color, spacing, typography } from "../../theme";
import { NavigatorParamList } from "../../navigators";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const bg = require("./settings_bg.png");

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  flex: 1,
  paddingBottom: 200,
};
const COINT_ITEM: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
  fontSize: 15,
  fontWeight: "500",
};
const BOLD: TextStyle = { fontWeight: "bold" };

const TAGLINE: TextStyle = {
  color: color.palette.white,
  textAlign: "center",
  fontSize: 8,
  lineHeight: 11,
  marginHorizontal: "auto",
  marginBottom: spacing[4] + spacing[1],
};

const TAGLINE2: TextStyle = {
  color: color.palette.lightGrey,
  fontSize: 12,
  lineHeight: 22,
  marginHorizontal: "auto",
};
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
};
const COIN_TEXT_CONTAINER: ViewStyle = {
  display: "flex",
};

const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 20,
  fontStyle: "normal",
  color: "white",
};

const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 10,
  marginHorizontal: 15,
  marginVertical: 10,
};

const CARD: ViewStyle = {
  backgroundColor: "#17C682",
  height: 203,
  width: "90%",
  marginTop: 10,
  marginHorizontal: "auto",
  borderRadius: 4,
  opacity: 0.2,
};
const COIN_CARD: ViewStyle = {
  backgroundColor: color.palette.white,
  width: "100%",
  // height: 60,
  marginHorizontal: "auto",
  paddingVertical: 15,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  borderBottomWidth: 1,
  borderBottomColor: color.palette.lightGrey,
  paddingBottom: 30,
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

export const SettingsScreen: FC<StackScreenProps<NavigatorParamList>> =
  observer(({ navigation }) => {
    const NextScreen = (link) => navigation.navigate(link);

    const CoinComponent = ({ coin, icon, link }) => {
      return (
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            width: "100%",
          }}
          onPress={() => {}}
        >
          <View style={COIN_CARD}>
            <TouchableOpacity style={FLEX} onPress={() => {}}>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 4,
                  alignItems: "center",
                  marginRight: 20,
                  marginLeft: 10,
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#17C682",
                  flexDirection: "row",
                  opacity: 0.2,
                }}
              >
                <Icon
                  style={{ height: 15, width: 20, paddingBottom: 2 }}
                  icon={icon}
                />
              </View>
              <View style={COIN_TEXT_CONTAINER}>
                <Text style={COINT_ITEM}>{coin}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#17C682",
                  flexDirection: "row",
                }}
              ></View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="SettingsScreen" style={FULL}>
          <GradientBackground
            colors={[color.palette.white, color.palette.white]}
          />
          <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.palette.green}
          >
            <View
              style={[
                ROOT,
                {
                  marginVertical: 10,
                  marginTop: 50,
                  backgroundColor: color.palette.green,
                  height: 100,
                },
              ]}
            >
              {/* <TouchableOpacity onPress={goBack}>
                <Icon icon="back" style={{ padding: 6, marginRight: 20 }} />
              </TouchableOpacity> */}
              <Text style={{}} preset="header" text="My Account" />
            </View>
            <View style={CENTER}>
              <Icon
                icon="face"
                style={{
                  padding: 6,
                  marginRight: 20,
                  height: 100,
                  width: 100,
                  marginTop: -9,
                  zIndex: 20,
                }}
              />
            </View>
            <View
              style={[
                {
                  backgroundColor: color.palette.white,
                  height: 100,
                  width: "120%",
                  marginLeft: -10,
                  marginTop: -30,
                  paddingTop: 40,
                  marginVertical: 40,
                  zIndex: 1,
                  marginBottom: 0,
                },
              ]}
            >
              <Text
                style={{
                  color: color.palette.black,
                  textAlign: "center",
                  alignSelf: "center",
                  marginLeft: -60,
                  fontWeight: "100",
                }}
                preset="header"
                text="Hi,"
              />
              <Text
                style={{
                  color: color.palette.black,
                  textAlign: "center",
                  alignSelf: "center",
                  marginLeft: -60,
                }}
                preset="header"
                text="Bolaji Fuga,"
              />
            </View>
            {/* <View style={BOTTOM}> */}

            <View style={[CENTER, { marginTop: 0, paddingBottom: 200 }]}>
              <CoinComponent
                coin="My Details"
                icon="details"
                link={"ChooseCurrencyScreen"}
              />
              <CoinComponent
                coin="Change Password"
                icon="password"
                link={"WalletSettingsScreen"}
              />
              <CoinComponent
                coin="Card Details"
                icon="creditCard"
                link={"SecureSeedPhraseScreen"}
              />
              <CoinComponent
                coin="Contact Preferences"
                icon="phone"
                link={"SecureSeedPhraseScreen"}
              />
              <CoinComponent
                coin="Social Accounts"
                icon="social"
                link={"CommunityScreen"}
              />

              <CoinComponent
                coin="Sign Out"
                icon="logout"
                link={"SecureSeedPhraseScreen"}
              />
            </View>
            {/* </View> */}
          </Screen>
          <View />
        </View>
      </ScrollView>
    );
  });
