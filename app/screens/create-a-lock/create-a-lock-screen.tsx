import React, { FC, useState } from "react";
import {
  View,
  TextInput,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
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
import { ImportWalletScreen } from "..";
import { placeholder } from "i18n-js";
// import { back } from "../../components/icon/icons"

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
const LOGIN_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.green,
  borderRadius: 38,
  width: 327,
  alignSelf: "center",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: 55,
  marginBottom: 20,
};
const GOOGLE_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.white,
  borderRadius: 38,
  width: 327,
  alignSelf: "center",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderColor: color.palette.lightGrey,
};
const FACEBOOK_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.skyBlue,
  borderRadius: 38,
  width: 327,
  alignSelf: "center",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 15,
};

const TAG_CONTAINER: TextStyle = {
  // width: "70%",
  paddingHorizontal: 50,
  display: "flex",
  justifyContent: "center",
  fontWeight: "400",
  fontSize: 14,
  lineHeight: 24,
  marginBottom: 60,
};
const TAGLINE: TextStyle = {
  color: color.palette.lightGrey,
  textAlign: "center",
  fontSize: 14,
  lineHeight: 24,
  marginHorizontal: "auto",
  marginBottom: spacing[4] + spacing[1],
};
const TAGLINE2: TextStyle = {
  color: color.palette.lightGrey,
  fontSize: 14,
  lineHeight: 24,
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
  fontWeight: "normal",
  lineHeight: 20,
};
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
};
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
};
const FOOTER: ViewStyle = { backgroundColor: color.palette.deeperBlue };
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
};
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 25,
  lineHeight: 25,
  textAlign: "center",
  marginBottom: spacing[5],
  fontStyle: "normal",
  color: "black",
  marginTop: 60,
};

const DOTS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "100%",
  height: 20,
  marginTop: 40,
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

type InputTextProps = {
  label: string;
  notEditable?: boolean;
};

export const CreateALockScreen: FC<
  StackScreenProps<NavigatorParamList, "CreateALockScreen">
> = observer(({ navigation }) => {
  const NextScreen = () => navigation.navigate("PortfolioHomeScreen");
  const goBack = () => navigation.goBack();
  const [visible, setVisible] = useState();

  return (
    <View testID="CreateALockScreen" style={FULL}>
      <GradientBackground colors={["white", "white"]} />
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}
      >
        <View />
        <View style={DOTS}>
          <Button
            preset="link"
            onPress={goBack}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon style={{ marginRight: 15, height: 15 }} icon="back" />
            <Text style={{ color: "black", fontWeight: "bold" }}>Back</Text>
          </Button>
        </View>

        <Text style={TITLE} preset="header" text="Welcome Back!" />

        <View style={{ marginVertical: 20, marginBottom: 40 }}>
          <TouchableOpacity style={FACEBOOK_BUTTON} onPress={NextScreen}>
            <Icon
              style={{
                marginLeft: -50,
                height: 23,
                width: 20,
              }}
              icon="facebook"
            />
            <Text>CONTINUE WITH FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={GOOGLE_BUTTON} onPress={NextScreen}>
            <Icon
              style={{
                marginLeft: -50,
                height: 23,
                width: 20,
              }}
              icon="google"
            />
            <Text style={{ color: "black" }}>CONTINUE WITH FACEBOOK</Text>
          </TouchableOpacity>
        </View>

        <View style={TAG_CONTAINER}>
          <Text style={TAGLINE} text="OR LOGIN IN WITH EMAIL" />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textInputInputWrapper}>
            <TouchableOpacity>
              <View style={styles.textInputIconWrapper}>
                <Icon icon="person" style={{ height: 20 }} />
              </View>
            </TouchableOpacity>
            <TextInput
              style={{
                width: "90%",
                height: 40,
              }}
              placeholder="Email Address"
            />
          </View>
        </View>
        <PasswordInput placeholder="Password" />

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            width: "80%",
            marginLeft: 20,
          }}
        >
          <Text style={TAGLINE2} text="ALREADY HAVE AN ACCOUNT? " />
          <TouchableOpacity onPress={NextScreen}>
            <Text
              style={[TAGLINE2, { color: color.palette.green, marginLeft: 3 }]}
              text="SIGNUP "
            />
          </TouchableOpacity>
        </View>
      </Screen>

      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
        
          <View
            style={{
              height: 10,
            }}
          ></View>

          <Button
            style={LOGIN_BUTTON}
            textStyle={CONTINUE_TEXT}
            text="Next"
            onPress={NextScreen}
          />
        </View>
      </SafeAreaView>
    </View>
  );
});

const PasswordInput = ({ placeholder }) => {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }
  return (
    <View style={styles.formContainer}>
      <View style={styles.textInputInputWrapper}>
        <TouchableOpacity onPress={handleVisible}>
          <View style={styles.textInputIconWrapper}>
            <Icon icon="lock" style={{ height: 20 }} />
          </View>
        </TouchableOpacity>
        <TextInput
          style={{
            width: "90%",
            height: 40,
          }}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePage: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
  },
  formContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textFieldWrapper: {
    width: "85%",
    alignSelf: "center",
    paddingTop: 20,
  },
  textInputLabel: {
    color: color.palette.black,
    marginBottom: 10,
    fontWeight: "100",
  },
  textInput: {
    height: 50,
    color: color.palette.black,
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
  },
  textInputIconWrapper: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textInputInputWrapper: {
    borderRadius: 10,
    // elevation: 1,
    width: "90%",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "auto",
    textAlign: "center",
    height: 55,
  },
  textFeild: {
    width: 325,
    backgroundColor: color.transparent,
    height: 60,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 10,
    paddingLeft: 20,
    justifyContent: "center",
    borderWidth: 0.5,
    borderStyle: "solid",
    alignSelf: "center",
  },

  flatGreyBtn: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
  },
  buttonsWrapper: {
    width: "100%",
    paddingLeft: 0,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
});
