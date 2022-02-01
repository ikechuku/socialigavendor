import React, { FC } from "react"
import { View, ViewStyle, TextStyle, ImageStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Text,
  Button,
  Screen,
  GradientBackground,
  Header,
  AutoImage as Image,
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { TouchableOpacity } from "react-native-gesture-handler"

const walletImage = require("./wallet.png")
const lockImage = require("../../../assets/images/lock-safe.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "space-between",
}
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 18,
  lineHeight: 25,
  textAlign: "center",
  marginBottom: spacing[5],
  fontStyle: "normal",
}
const TAGLINE: TextStyle = {
  color: "#BAB6C8",
  textAlign: "center",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  width: 100,
  height: 100,
}
const IMPORT_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.purple,
  borderRadius: 10,
  marginBottom: 40,
  width: 327,
  alignSelf: "center",
}
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
}
const DOTS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  height: 20,
}
const LIGHT_DOT: ViewStyle = {
  backgroundColor: color.palette.purple,
  height: 10,
  borderRadius: 100,
  width: 10,
  marginHorizontal: 4,
}
const DARK_DOT: ViewStyle = {
  backgroundColor: color.palette.lighterPurple,
  height: 10,
  width: 10,
  borderRadius: 100,
  marginHorizontal: 4,
}
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export const OnboardingScreen: FC<StackScreenProps<NavigatorParamList, "onboarding">> = observer(
  ({ navigation }) => {
    const Skip = () => navigation.navigate("CreateALockScreen")

    return (
      <View testID="OnboardingScreen" style={FULL}>
        <GradientBackground colors={["#2B2E47", "#2B2E47"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <View style={ROOT}>
            <View />
            <TouchableOpacity onPress={Skip}>
              <Text style={TAGLINE} text="skip" />
            </TouchableOpacity>
          </View>
          <Image source={walletImage} style={BOWSER} />
          <Text style={TITLE} preset="header" text="MANAGE YOUR CRYPTO COINS" />
          <Text style={TAGLINE} text="Take full control with completely self-custodied wallet." />
          <Text style={TAGLINE} text="Your keys, your coins." />
        </Screen>
        <View>
          <View style={DOTS}>
            <View style={LIGHT_DOT}></View>
            <View style={DARK_DOT}></View>
          </View>
          <View style={FOOTER_CONTENT}>
            <Button
              style={IMPORT_BUTTON}
              textStyle={CONTINUE_TEXT}
              text="Next"
              onPress={() => navigation.navigate("onboarding2")}
            />
          </View>
        </View>
      </View>
    )
  },
)
