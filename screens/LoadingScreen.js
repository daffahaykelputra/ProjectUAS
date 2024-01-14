import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingScreen}>
      <Text
        style={[styles.financial, styles.reminderTypo]}
      >{`FINANCIAL `}</Text>
      <Text style={[styles.reminder, styles.reminderTypo]}>Reminder</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  reminderTypo: {
    textAlign: "left",
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  financial: {
    top: 320,
    left: 105,
    fontFamily: FontFamily.franklinGothicHeavy,
    color: Color.colorTomato,
  },
  reminder: {
    top: 366,
    left: 115,
    fontFamily: FontFamily.arial,
    color: Color.colorWhite,
  },
  vectorIcon: {
    height: "2.99%",
    width: "6.72%",
    top: "55.63%",
    right: "46.61%",
    bottom: "41.39%",
    left: "46.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loadingScreen: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoadingScreen;
