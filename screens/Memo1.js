import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Memo1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.memo}>
      <View style={styles.memoChild} />
      <Text style={[styles.text, styles.textTypo]}>{`2023 `}</Text>
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector71.png")}
        />
      </Pressable>
      <Text style={[styles.transaksi, styles.tahunanTypo]}>Transaksi</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("TahunanUangKeluar")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <Text style={[styles.tahunan, styles.tahunanTypo]}>Tahunan</Text>
      <Pressable
        style={styles.vector2}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
      </Pressable>
      <Text style={[styles.settings, styles.tahunanTypo]}>Settings</Text>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector111.png")}
      />
      <Text style={[styles.memo1, styles.memo1Position]}>Memo</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("AddMemo")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector121.png")}
      />
      <Text style={[styles.tidakAdaData, styles.textTypo]}>Tidak ada data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  vectorPosition: {
    height: "3.13%",
    bottom: "5.63%",
    top: "91.25%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tahunanTypo: {
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "93.18%",
    top: "4.88%",
    width: "2.81%",
    height: "1.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  memo1Position: {
    top: 764,
    fontSize: FontSize.size_smi,
  },
  memoChild: {
    top: 709,
    left: -9,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 375,
    height: 96,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  text: {
    top: 39,
    left: 59,
    fontSize: FontSize.size_mini,
    color: Color.colorGainsboro,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "13.89%",
    right: "80.03%",
    width: "6.08%",
  },
  transaksi: {
    left: 32,
    fontSize: FontSize.size_smi,
    top: 764,
  },
  vectorIcon: {
    right: "63.31%",
    left: "33.89%",
  },
  vectorIcon1: {
    right: "89.97%",
    left: "7.22%",
  },
  vector1: {
    left: "38.33%",
    right: "53.06%",
    width: "8.61%",
  },
  tahunan: {
    left: 127,
    fontSize: FontSize.size_smi,
    top: 764,
  },
  vector2: {
    left: "82.78%",
    top: "91.38%",
    right: "10.78%",
    bottom: "5.6%",
    width: "6.44%",
    height: "3.03%",
    position: "absolute",
  },
  settings: {
    top: 765,
    left: 286,
    fontSize: FontSize.size_xs,
  },
  vectorIcon2: {
    width: "5.22%",
    right: "32.28%",
    left: "62.5%",
    height: "3.13%",
    bottom: "5.63%",
    top: "91.25%",
    position: "absolute",
  },
  memo1: {
    left: 214,
    color: Color.colorChocolate,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 265,
    top: 619,
    width: 65,
    height: 65,
    position: "absolute",
  },
  vectorIcon3: {
    height: "3.88%",
    width: "6.39%",
    top: "79.5%",
    right: "14.17%",
    bottom: "16.63%",
    left: "79.44%",
    position: "absolute",
  },
  tidakAdaData: {
    top: 299,
    left: 133,
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
  },
  memo: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Memo1;
