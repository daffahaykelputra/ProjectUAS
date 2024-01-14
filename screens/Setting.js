import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setting}>
      <Text style={styles.setting1}>Setting</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Text style={[styles.tema, styles.temaTypo]}>Tema</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector41.png")}
      />
      <Text style={[styles.masukan, styles.temaTypo]}>Masukan</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector51.png")}
      />
      <Text style={[styles.bahasa, styles.temaTypo]}>Bahasa</Text>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector61.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  temaTypo: {
    fontSize: FontSize.size_xl,
    left: 34,
    textAlign: "left",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "6.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  setting1: {
    top: 29,
    left: 129,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "7.22%",
    top: "4.88%",
    right: "89.97%",
    bottom: "93.18%",
    width: "2.81%",
    height: "1.95%",
    position: "absolute",
  },
  tema: {
    top: 136,
  },
  vectorIcon: {
    height: "3.13%",
    top: "17%",
    right: "64.17%",
    bottom: "79.88%",
    left: "28.89%",
  },
  masukan: {
    top: 253,
  },
  vectorIcon1: {
    height: "2.75%",
    top: "31.88%",
    right: "51.94%",
    bottom: "65.38%",
    left: "41.11%",
  },
  bahasa: {
    top: 195,
  },
  vectorIcon2: {
    height: "2.25%",
    width: "8.89%",
    top: "24.75%",
    right: "55.28%",
    bottom: "73%",
    left: "35.83%",
    position: "absolute",
  },
  setting: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Setting;
