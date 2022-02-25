import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "..";

interface ButtonProps {
  width: number;
  background: string;
  name: string;
  handleClick?: any;
}

const CustomButton = ({
  width,
  background,
  color,
  name,
  handleClick,
}: ButtonProps) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={[styles.wrapper, { backgroundColor: `${background}` }]}
        onPress={handleClick}
      >
        <Text style={styles.btnText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  view: {
    width: "90%",
    marginHorizontal: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  wrapper: {
    height: 31,
    display: "flex",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 10,
  },
});
