import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const TahunanUangMasuk = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tahunanUangMasuk}>
      <View style={styles.tahunanUangMasukChild} />
      <Text style={styles.text}>{`2023 `}</Text>
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
      <Text style={[styles.transaksi, styles.memoTypo]}>Transaksi</Text>
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
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector131.png")}
      />
      <Text style={[styles.tahunan, styles.memoTypo]}>Tahunan</Text>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
      </Pressable>
      <Text style={[styles.settings, styles.text2Typo]}>Settings</Text>
      <Pressable
        style={[styles.vector2, styles.vectorPosition]}
        onPress={() => navigation.navigate("Memo1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector14.png")}
        />
      </Pressable>
      <Text style={[styles.memo, styles.memoTypo]}>Memo</Text>
      <Image
        style={[styles.tahunanUangMasukItem, styles.tahunanPosition]}
        resizeMode="cover"
        source={require("../assets/line-6.png")}
      />
      <Text style={[styles.uangMasuk, styles.uangTypo]}>Uang Masuk</Text>
      <Pressable
        style={[styles.uangKeluar, styles.uangPosition]}
        onPress={() => navigation.navigate("TahunanUangKeluar")}
      >
        <Text style={styles.uangTypo}>Uang Keluar</Text>
      </Pressable>
      <View style={[styles.tahunanUangMasukInner, styles.tahunanPosition]} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-321.png")}
      />
      <View style={styles.lineView} />
      <View style={styles.rectangleView} />
      <Text style={[styles.text1, styles.text1Typo]}>100 %</Text>
      <Text style={[styles.uangJajan, styles.text1Typo]}>Uang Jajan</Text>
      <Text style={[styles.text2, styles.text2Typo]}>50.000.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  memoTypo: {
    fontSize: FontSize.size_smi,
    top: 764,
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
  text2Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  tahunanPosition: {
    top: 113,
    position: "absolute",
  },
  uangTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  uangPosition: {
    top: 88,
    position: "absolute",
  },
  text1Typo: {
    top: 442,
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  tahunanUangMasukChild: {
    top: 709,
    left: -9,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 375,
    height: 96,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  text: {
    top: 39,
    left: 59,
    fontSize: FontSize.size_mini,
    color: Color.colorGainsboro,
    textAlign: "left",
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
    left: "13.89%",
    right: "80.03%",
    width: "6.08%",
  },
  transaksi: {
    left: 32,
    color: Color.colorDimgray,
  },
  vectorIcon: {
    right: "63.31%",
    left: "33.89%",
  },
  vectorIcon1: {
    right: "89.97%",
    left: "7.22%",
  },
  vectorIcon2: {
    width: "8.61%",
    right: "53.06%",
    left: "38.33%",
    height: "3.13%",
    bottom: "5.63%",
    top: "91.25%",
    position: "absolute",
  },
  tahunan: {
    left: 127,
    color: Color.colorChocolate,
  },
  vector1: {
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
    color: Color.colorDimgray,
  },
  vector2: {
    left: "62.5%",
    right: "32.28%",
    width: "5.22%",
  },
  memo: {
    left: 214,
    color: Color.colorDimgray,
  },
  tahunanUangMasukItem: {
    left: 0,
    width: 360,
    height: 2,
  },
  uangMasuk: {
    left: 51,
    top: 88,
    position: "absolute",
  },
  uangKeluar: {
    left: 233,
  },
  tahunanUangMasukInner: {
    left: -11,
    borderColor: Color.colorCornflowerblue,
    borderTopWidth: 3,
    width: 193,
    height: 3,
    borderStyle: "solid",
  },
  ellipseIcon: {
    top: 148,
    left: 64,
    width: 229,
    height: 229,
    position: "absolute",
  },
  lineView: {
    top: 147,
    left: 180,
    borderColor: Color.colorBlack,
    borderRightWidth: 1,
    width: 1,
    height: 117,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleView: {
    top: 433,
    left: 26,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    width: 64,
    height: 33,
    position: "absolute",
  },
  text1: {
    left: 40,
  },
  uangJajan: {
    left: 109,
  },
  text2: {
    top: 446,
    left: 252,
    color: Color.colorCornflowerblue,
  },
  tahunanUangMasuk: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default TahunanUangMasuk;
