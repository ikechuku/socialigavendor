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
  color: color.palette.white,
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
  justifyContent: "space-between",
  paddingHorizontal: 10,
  marginHorizontal: 15,
  marginVertical: 10,
};

const CARD: ViewStyle = {
  backgroundColor: color.palette.purple,
  height: 203,
  width: "90%",
  marginTop: 10,
  marginHorizontal: "auto",
  borderRadius: 20,
};
const COIN_CARD: ViewStyle = {
  backgroundColor: color.palette.deeperBlue,
  width: "90%",
  height: 60,
  marginTop: 10,
  marginHorizontal: "auto",
  borderRadius: 8,
  paddingVertical: 15,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
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
          onPress={() => NextScreen(link)}
        >
          <View style={COIN_CARD}>
            <TouchableOpacity style={FLEX} onPress={() => NextScreen(link)}>
              <View
                style={{
                  display: "flex",
                  height: 35,
                  width: 35,
                  borderRadius: 100,
                  backgroundColor: color.palette.purple,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 20,
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
            <TouchableOpacity onPress={() => NextScreen(link)}>
              <View style={{ display: "flex", justifyContent: "center" }}>
                <Icon
                  style={{
                    height: 15,
                    width: 15,
                    marginRight: 2,
                    marginTop: 6,
                  }}
                  icon="forward"
                />
              </View>
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
            colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
          />
          <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.palette.deeperBlue}
          >
            <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
              {/* <TouchableOpacity onPress={goBack}>
                <Icon icon="back" style={{ padding: 6, marginRight: 20 }} />
              </TouchableOpacity> */}
              <Text style={{}} preset="header" text="Settings" />
            </View>
            <View style={CENTER}>
              <Image source={bg} style={CARD} />
            </View>

            {/* <View style={BOTTOM}> */}

            <View style={[CENTER, { marginTop: 20 }]}>
              <CoinComponent
                coin="Default Currency"
                icon="currency"
                link={"ChooseCurrencyScreen"}
              />
              <CoinComponent
                coin="Wallet"
                icon="wallet"
                link={"WalletSettingsScreen"}
              />
              <CoinComponent
                coin="Transaction History"
                icon="transaction"
                link={"SecureSeedPhraseScreen"}
              />
              <CoinComponent
                coin="Security"
                icon="security"
                link={"SecureSeedPhraseScreen"}
              />
              <CoinComponent
                coin="Join Community"
                icon="community"
                link={"CommunityScreen"}
              />
              <CoinComponent
                coin="Delete Wallet"
                icon="delete"
                link={"SecureSeedPhraseScreen"}
              />
              <CoinComponent
                coin="Help and Support"
                icon="help"
                link={"SecureSeedPhraseScreen"}
              />
              <CoinComponent
                coin="Logout"
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
