import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const TahunanUangKeluar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tahunanUangKeluar}>
      <View style={styles.tahunanUangKeluarChild} />
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
        style={[styles.tahunanUangKeluarItem, styles.tahunanPosition]}
        resizeMode="cover"
        source={require("../assets/line-6.png")}
      />
      <Pressable
        style={[styles.uangMasuk, styles.uangPosition]}
        onPress={() => navigation.navigate("TahunanUangMasuk")}
      >
        <Text style={styles.uangTypo}>Uang Masuk</Text>
      </Pressable>
      <Text style={[styles.uangKeluar, styles.uangTypo]}>Uang Keluar</Text>
      <Image
        style={[styles.tahunanUangKeluarInner, styles.tahunanPosition]}
        resizeMode="cover"
        source={require("../assets/line-7.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.lineViewPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-311.png")}
      />
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={styles.rectangleView} />
      <Text style={[styles.text1, styles.text1Typo]}>100 %</Text>
      <Text style={[styles.makanan, styles.text1Typo]}>Makanan</Text>
      <Text style={[styles.text2, styles.text2Typo]}>30.000.00</Text>
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
  uangPosition: {
    top: 88,
    position: "absolute",
  },
  uangTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  lineViewPosition: {
    top: 148,
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
  tahunanUangKeluarChild: {
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
    color: Color.colorDimgray,
    left: 32,
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
  tahunanUangKeluarItem: {
    left: 0,
    width: 360,
    height: 2,
  },
  uangMasuk: {
    left: 51,
  },
  uangKeluar: {
    left: 233,
    top: 88,
    position: "absolute",
  },
  tahunanUangKeluarInner: {
    left: 169,
    width: 191,
    height: 1,
  },
  ellipseIcon: {
    left: 64,
    width: 229,
    height: 229,
  },
  lineView: {
    left: 179,
    borderColor: Color.colorBlack,
    borderRightWidth: 1,
    width: 1,
    height: 117,
    borderStyle: "solid",
  },
  rectangleView: {
    top: 433,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTomato,
    width: 64,
    height: 33,
    left: 32,
    position: "absolute",
  },
  text1: {
    left: 46,
  },
  makanan: {
    left: 115,
  },
  text2: {
    top: 446,
    left: 258,
    color: Color.colorTomato,
  },
  tahunanUangKeluar: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default TahunanUangKeluar;
