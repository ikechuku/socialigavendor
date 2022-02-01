import React, { FC, useState } from "react";
import {
  View,
  Text as Textt,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import {
  Header,
  Button,
  Screen,
  GradientBackground,
  AutoImage as Image,
  Text,
  Icon,
  Checkbox,
} from "../../components";
import { color, spacing, typography } from "../../theme";
import { NavigatorParamList } from "../../navigators";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ImportWalletScreen } from "..";
// import { back } from "../../components/icon/icons"

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  // backgroundColor: color.red,
  paddingHorizontal: spacing[4],
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = { fontWeight: "bold" };

const CREATE_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  borderWidth: 0,
  // borderColor: color.palette.white,
  backgroundColor: color.palette.deepBlue,
  borderRadius: 10,
  marginBottom: 20,
};
const IMPORT_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.purple,
  borderRadius: 10,
  marginBottom: 80,
};

const TAG_CONTAINER: ViewStyle = {
  backgroundColor: color.palette.deeperBlue,
  paddingHorizontal: 20,
  paddingVertical: 20,
  display: "flex",
  justifyContent: "center",
  marginVertical: 10,
  borderRadius: 10,
  marginTop: 30,
};
const TAGLINE: TextStyle = {
  color: color.palette.white,
  fontSize: 15,
  lineHeight: 22,
  marginHorizontal: "auto",
  marginBottom: spacing[4] + spacing[1],
};
const TAGLINE_seed: TextStyle = {
  color: color.palette.lightBlue,
  fontSize: 15,
  lineHeight: 22,
};
const TAGLINE2: TextStyle = {
  color: color.palette.lightGrey,
  fontSize: 12,
  lineHeight: 22,
  marginHorizontal: "auto",
  marginBottom: spacing[4] + spacing[1],
  marginLeft: 30,
};
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 15,
  letterSpacing: 2,
  color: color.palette.white,
  // fontFamily: "Avenir Next",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 20,
};

const FOOTER: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  height: "70%",
  borderRadius: 45,
  marginBottom: -50,
  paddingHorizontal: 30,
  paddingBottom: 600,
};
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 18,
  lineHeight: 25,
  textAlign: "center",
  marginBottom: spacing[5],
  fontStyle: "normal",
  color: "white",
  marginTop: 20,
};

const DOTS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  height: 20,
  marginTop: 40,
  marginBottom: 50,
};
const LIGHT_DOT: ViewStyle = {
  backgroundColor: color.palette.purple,
  height: 16,
  borderRadius: 100,
  width: 16,
  marginHorizontal: 4,
};
const DARK_DOT: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  height: 16,
  width: 16,
  borderRadius: 100,
  marginHorizontal: 4,
};
const LINE: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  height: 5,
  width: "30%",
  marginTop: 6,
};
const DARK_LINE: ViewStyle = {
  backgroundColor: color.palette.purple,
  height: 5,
  width: "30%",
  marginTop: 6,
};
const CENTER: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: "auto",
  marginTop: 30,
};

const FIT_LINE: ViewStyle = {
  width: 40,
  height: 6,
  backgroundColor: color.palette.deeperBlue,
};
export const SeedPhraseSuccessfulScreen: FC<
  StackScreenProps<NavigatorParamList, "SeedPhraseSuccessfulScreen">
> = observer(({ navigation }) => {
  const NextScreen = () => navigation.navigate("PortfolioHomeScreen");
  const goBack = () => navigation.goBack();

  const [important, setImportant] = useState(false);

  return (
    <View testID="SeedPhraseSuccessfulScreen" style={FULL}>
      <GradientBackground
        colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
      />
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}
      >
        <View />
        <View style={DOTS}>
          <Button preset="link" onPress={goBack}>
            <Icon style={{ marginRight: 20, height: 20 }} icon="back" />
          </Button>
          <View style={LIGHT_DOT}></View>
          <View style={DARK_LINE}></View>
          <View style={LIGHT_DOT}></View>
          <View style={LINE}></View>
          <View style={DARK_DOT}></View>
          <TouchableOpacity>
            <Text style={TAGLINE} text="2/3" />
          </TouchableOpacity>
        </View>
      </Screen>
      <ScrollView style={FOOTER}>
        <View style={CENTER}>
          <View style={FIT_LINE}></View>
        </View>
        <View style={{}}>
          {important ? (
            <Text style={TITLE} preset="header" text="Why is it important?" />
          ) : (
            <>
              <Text style={TITLE} preset="header" text="Secure Your Wallet" />
              <Textt
                style={[
                  TAGLINE2,
                  { textAlign: "center", color: "white", fontSize: 14 },
                ]}
              >
                Secure Your Wallet's "
                <Textt style={{ color: color.palette.purple }}>
                  Seed Phrase
                </Textt>
                "
              </Textt>
              <TouchableOpacity onPress={() => setImportant(true)}>
                <Textt
                  style={{
                    color: color.palette.purple,
                    textAlign: "center",
                  }}
                >
                  Why is it Important?
                </Textt>
              </TouchableOpacity>
            </>
          )}

          {!important ? (
            <>
              <View style={TAG_CONTAINER}>
                <Text
                  style={TAGLINE}
                  text="Write down your seed phrase on a piece of paper and store in a safe place."
                />
                <Text style={TAGLINE_seed} text="Risks are:" />
                <Text style={TAGLINE_seed} text="You lose it" />
                <Text style={TAGLINE_seed} text="You forget where you put it" />
                <Text style={TAGLINE_seed} text="Someone else finds it" />
              </View>
              <View style={TAG_CONTAINER}>
                <Text
                  style={TAGLINE}
                  text="Other options: Doesn't have to be paper!"
                />
                <Text style={TAGLINE} text="Tips" />
                <Text style={TAGLINE_seed} text="Store in bank vault" />
                <Text style={TAGLINE_seed} text="Store in safe" />
                <Text
                  style={TAGLINE_seed}
                  text="Store in multiple secret places"
                />
              </View>
            </>
          ) : (
            <View style={TAG_CONTAINER}>
              <Text
                style={[TAGLINE, { textAlign: "center" }]}
                text="Dont’t risk losing your funds. Protect
your wallet by saving your seed phrase in a place you trust."
              />
              <Text
                style={[TAGLINE, { textAlign: "center" }]}
                text="It’s the only way to recover your wallet if you get locked out of the app or get a new device."
              />
            </View>
          )}
        </View>
        <View style={FOOTER_CONTENT}>
          <View
            style={{
              height: 10,
            }}
          ></View>
          {important ? (
            <Button
              style={IMPORT_BUTTON}
              textStyle={CONTINUE_TEXT}
              text="I Got It"
              onPress={() => {
                setImportant(false);
              }}
            />
          ) : (
            <Button
              style={IMPORT_BUTTON}
              textStyle={CONTINUE_TEXT}
              text="I Got It"
              onPress={NextScreen}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
});
