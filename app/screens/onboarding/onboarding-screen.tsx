import React, { FC } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import {
  Text,
  Button,
  Screen,
  GradientBackground,
  Header,
  AutoImage as Image,
  Icon,
} from "../../components";
import { color, spacing, typography } from "../../theme";
import { goBack, NavigatorParamList } from "../../navigators";

const walletImage = require("../../../assets/images/bg.png");
const bg = require("../../../assets/images/bg1.png");

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = { fontWeight: "bold" };
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "space-between",
};
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 25,
  lineHeight: 25,
  textAlign: "center",
  marginBottom: spacing[5],
  fontStyle: "normal",
  color: "black",
};
const TAGLINE: TextStyle = {
  color: "#4E7ED4",
  textAlign: "center",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
  width: "70%",
  alignSelf: "center",
};
const TAGLINE2: TextStyle = {
  color: "#4E7ED4",
  textAlign: "center",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
  alignSelf: "center",
};
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  width: "100%",
  height: 200,
};
const IMPORT_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.green,
  borderRadius: 38,
  marginBottom: 40,
  width: 305,
  height: 55,
  alignSelf: "center",
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
const DOTS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  height: 20,
};
const LIGHT_DOT: ViewStyle = {
  backgroundColor: "#8F92A1",
  height: 10,
  borderRadius: 100,
  width: 10,
  marginHorizontal: 4,
  opacity: 0.4,
};
const DARK_DOT: ViewStyle = {
  backgroundColor: color.palette.green,
  height: 10,
  width: 16,
  borderRadius: 100,
  marginHorizontal: 4,
};
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  flexDirection: "row",
  justifyContent: "center",
};

export const OnboardingScreen: FC<
  StackScreenProps<NavigatorParamList, "onboarding">
> = observer(({ navigation }) => {
  const Skip = () => navigation.navigate("CreateALockScreen");

  return (
    <View testID="OnboardingScreen" style={FULL}>
      <GradientBackground colors={["white", "white"]} />
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}
      >
        <View style={ROOT}>
          <View />
          {/* <TouchableOpacity onPress={Skip}>
            <Text style={TAGLINE} text="skip" />
          </TouchableOpacity> */}
        </View>
        <ImageBackground source={bg} style={{ width: "100%", height: 450 }}>
          <Image source={walletImage} style={BOWSER} />
        </ImageBackground>
        <View style={DOTS}>
          <View style={LIGHT_DOT}></View>
          <View style={DARK_DOT}></View>
          <View style={LIGHT_DOT}></View>
        </View>
        <Text
          style={TITLE}
          preset="header"
          text="Welcome to SociaLiga Vendor"
        />
        {/* <Text
          style={TAGLINE}
          text="Showing care at all times to the need & challenges of our time."
        /> */}
      </Screen>
      <View>
        <View style={FOOTER_CONTENT}>
          <Button
            style={IMPORT_BUTTON}
            textStyle={CONTINUE_TEXT}
            text="START SELLING"
            onPress={() => navigation.navigate("PortfolioHomeScreen")}
          />
          <Icon
            style={{ height: 20, width: 30, marginTop: 15, marginLeft: -80 }}
            icon="arrowRight"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={TAGLINE2} text="ALREADY HAVE AN ACCOUNT?" />
          <TouchableOpacity onPress={Skip}>
            <Text
              style={[TAGLINE2, { color: color.palette.green, marginLeft: 10 }]}
              text=" LOG IN"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});
