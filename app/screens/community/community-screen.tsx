import React, { FC, useState } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Screen, GradientBackground, Text, Icon } from "../../components";
import { color, spacing, typography } from "../../theme";
import { NavigatorParamList } from "../../navigators";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../../components";

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  flex: 1,
};
const COINT_ITEM: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  fontSize: 15,
  fontWeight: "500",
  textTransform: "capitalize",
};
const COIN_TEXT_CONTAINER: ViewStyle = {
  display: "flex",
};

const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 10,
  marginHorizontal: 15,
  marginVertical: 10,
};

const COIN_CARD: ViewStyle = {
  backgroundColor: color.palette.deeperBlue,
  width: "87%",
  height: 90,
  marginTop: 10,
  marginHorizontal: "auto",
  borderRadius: 8,
  padding: 15,
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

const LINE: ViewStyle = {
  width: 40,
  height: 6,
  backgroundColor: color.palette.deeperBlue,
};
const BOTTOM: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  width: "100%",
  marginHorizontal: "auto",
  borderRadius: 40,
  marginBottom: -20,
  paddingTop: 20,
  paddingBottom: 400,
  marginTop: 20,
  height: "100%",
};

const ICON_CONTAINER: ViewStyle = {
  // borderWidth: 2,
  height: 60,
  width: 60,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 20,
  marginRight: 10,
};
const FOOTER: ViewStyle = { backgroundColor: color.palette.deepBlue };
const FOOTER_CONTENT: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const CONTINUE_TEXT: TextStyle = {
  // ...TEXT,
  // ...BOLD,
  fontSize: 15,
  letterSpacing: 2,
  color: color.palette.white,
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 20,
};
const CREATE_BUTTON: ViewStyle = {
  backgroundColor: color.palette.purple,
  borderRadius: 10,
  width: 327,
};
export const CommunityScreen: FC<StackScreenProps<NavigatorParamList>> =
  observer(({ navigation }) => {
    const goBack = () => navigation.goBack();
    const ImportWallet = () => navigation.navigate("ImportWalletScreen");

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="CommunityScreen" style={FULL}>
          <GradientBackground
            colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
          />
          <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.palette.deeperBlue}
          >
            <View style={BOTTOM}>
              <View style={CENTER}>
                <View style={LINE}></View>
              </View>
              <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
                <TouchableOpacity onPress={goBack}>
                  <Icon
                    icon="back"
                    style={{ marginRight: 20, padding: 6, height: 15 }}
                  />
                </TouchableOpacity>
                <Text style={{}} preset="header" text="Choose Currency" />
              </View>
              <Text
                style={{ marginLeft: 60, fontSize: 12, fontWeight: "normal" }}
                preset="header"
                text="Join a social media community"
              />
              <View style={[CENTER, { marginTop: 20 }]}>
                <CoinComponent
                  community="Twitter"
                  icon="twitter"
                  color={color.palette.skyBlue}
                />
                <CoinComponent
                  community="Telegram"
                  icon="telegram"
                  color={color.palette.skyBlue2}
                />
                <CoinComponent
                  community="facebook"
                  icon="facebook"
                  color={color.palette.skyBlue3}
                />
                <CoinComponent community="reddit" />
                <CoinComponent community="youtube" />
                <CoinComponent
                  community="instagram"
                  icon="instagram"
                  color={color.palette.orange2}
                />
              </View>
            </View>
          </Screen>
          <View />
        </View>
      </ScrollView>
    );
  });

const CoinComponent: React.FC<{
  color?: string;
  icon?: any;
  community: string;
}> = ({ community, icon, color }) => {
  return (
    <TouchableOpacity style={COIN_CARD}>
      <View style={FLEX}>
        <View
          style={[ICON_CONTAINER, { backgroundColor: color ? color : "white" }]}
        >
          {icon ? (
            <Icon
              style={{ height: 35, width: 35, marginRight: 20 }}
              icon={icon}
            />
          ) : (
            <></>
          )}
        </View>
        <View style={COIN_TEXT_CONTAINER}>
          <Text style={COINT_ITEM}>{community}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
