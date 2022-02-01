/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  WelcomeScreen,
  ImportWalletScreen,
  ImportFromSeedScreen,
  CreateALockScreen,
  OnboardingScreen,
  Onboarding2Screen,
  SecureYourWalletScreen,
  SecureSeedPhraseScreen,
  WriteSeedPhraseScreen,
  SeedPhraseSuccessfulScreen,
  BuySellScreen,
  // BuyCoinScreen,
  // SellCoinScreen,
} from "../screens";
import { navigationRef } from "./navigation-utilities";
import { HomeNavigator } from "./home/home-navigator";

export type NavigatorParamList = {
  welcome: undefined;
  Home: undefined;
  ImportWalletScreen: undefined;
  SecureYourWalletScreen: undefined;
  ImportFromSeedScreen: undefined;
  onboarding: undefined;
  onboarding2: undefined;
  PortfolioHomeScreen: undefined;
  CreateALockScreen: undefined;
  SecureSeedPhraseScreen: undefined;
  WriteSeedPhraseScreen: undefined;
  SeedPhraseSuccessfulScreen: undefined;
  BuySellScreen: undefined;
  // BuyCoinScreen: undefined;
  // SellCoinScreen: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="onboarding"
    >
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
      <Stack.Screen name="onboarding2" component={Onboarding2Screen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="CreateALockScreen" component={CreateALockScreen} />
      <Stack.Screen
        name="ImportFromSeedScreen"
        component={ImportFromSeedScreen}
      />
      <Stack.Screen name="ImportWalletScreen" component={ImportWalletScreen} />
      <Stack.Screen
        name="SecureYourWalletScreen"
        component={SecureYourWalletScreen}
      />
      <Stack.Screen
        name="SecureSeedPhraseScreen"
        component={SecureSeedPhraseScreen}
      />
      <Stack.Screen
        name="WriteSeedPhraseScreen"
        component={WriteSeedPhraseScreen}
      />
      <Stack.Screen
        name="SeedPhraseSuccessfulScreen"
        component={SeedPhraseSuccessfulScreen}
      />
      <Stack.Screen name="Home" component={OnboardingScreen} />
      <Stack.Screen name="PortfolioHomeScreen" component={HomeNavigator} />
      <Stack.Screen name="BuySellScreen" component={BuySellScreen} />
      {/* <Stack.Screen name="BuyCoinScreen" component={BuyCoinScreen} />
      <Stack.Screen name="SellCoinScreen" component={SellCoinScreen} /> */}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        {...props}
      >
        <AppStack />
      </NavigationContainer>
    </>
  );
};

AppNavigator.displayName = "AppNavigator";

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
