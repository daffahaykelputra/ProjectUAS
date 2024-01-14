import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <Text style={[styles.uangMasuk, styles.uangTypo]}>{`Uang Masuk `}</Text>
      <Text style={[styles.uangKeluar, styles.uangTypo]}>{`Uang Keluar `}</Text>
      <View style={styles.homePageChild} />
      <Text style={[styles.total, styles.uangTypo]}>Total</Text>
      <Text style={[styles.nov2023, styles.uangTypo]}>{`Nov 2023 `}</Text>
      <View style={styles.homePageItem} />
      <Text style={[styles.text, styles.textTypo1]}>50.000.00</Text>
      <Text style={[styles.text1, styles.textTypo1]}>30.000.00</Text>
      <Text style={[styles.text2, styles.textTypo1]}>20.000.00</Text>
      <Text style={[styles.sab112023, styles.uangTypo]}>25 Sab 11, 2023</Text>
      <Text style={[styles.makanan, styles.makananTypo]}>Makanan</Text>
      <Text style={[styles.uangJajan, styles.makananTypo]}>Uang jajan</Text>
      <View style={[styles.homePageInner, styles.homeLayout]} />
      <View style={[styles.rectangleView, styles.homeLayout]} />
      <View style={[styles.homePageChild1, styles.homeLayout]} />
      <Text style={[styles.tunai, styles.tunaiTypo]}>Tunai</Text>
      <Text style={[styles.tunai1, styles.tunaiTypo]}>Tunai</Text>
      <Text style={[styles.text3, styles.uangTypo]}>50.000.00</Text>
      <Text style={[styles.text4, styles.textTypo]}>30.000.00</Text>
      <Text style={[styles.harian, styles.harianTypo]}>Harian</Text>
      <Text style={[styles.kalender, styles.harianTypo]}>Kalender</Text>
      <Text style={[styles.bulanan, styles.tunaiTypo]}>Bulanan</Text>
      <Text style={[styles.text5, styles.textTypo]}>50.000.00</Text>
      <Text style={[styles.text6, styles.textTypo]}>30.000.00</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector15.png")}
      />
      <Text style={[styles.transaksi, styles.memoTypo1]}>Transaksi</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("TahunanUangMasuk")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
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
      <Text style={[styles.settings, styles.memoTypo]}>Settings</Text>
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
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("UangMasuk")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon3, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector16.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  uangTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  textTypo1: {
    top: 135,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  makananTypo: {
    left: 30,
    textAlign: "left",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  homeLayout: {
    height: 22,
    width: 97,
    backgroundColor: Color.colorChocolate,
    top: 76,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  tunaiTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    left: 275,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  harianTypo: {
    top: 79,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  memoTypo1: {
    fontSize: FontSize.size_smi,
    top: 764,
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
  vectorPosition: {
    bottom: "5.63%",
    top: "91.25%",
    height: "3.13%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  memoTypo: {
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  uangMasuk: {
    color: Color.colorGainsboro,
    fontSize: FontSize.size_xs,
    left: 42,
    top: 110,
    fontFamily: FontFamily.inter,
  },
  uangKeluar: {
    left: 165,
    color: Color.colorGainsboro,
    fontSize: FontSize.size_xs,
    top: 110,
    fontFamily: FontFamily.inter,
  },
  homePageChild: {
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
  total: {
    left: 291,
    color: Color.colorGainsboro,
    fontSize: FontSize.size_xs,
    top: 110,
    fontFamily: FontFamily.inter,
  },
  nov2023: {
    top: 39,
    left: 44,
    fontSize: FontSize.size_mini,
    color: Color.colorGainsboro,
  },
  homePageItem: {
    top: 166,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: 360,
    height: 134,
    position: "absolute",
  },
  text: {
    color: Color.colorCornflowerblue,
    left: 42,
  },
  text1: {
    color: Color.colorTomato,
    left: 165,
  },
  text2: {
    left: 276,
    color: Color.colorGainsboro,
  },
  sab112023: {
    left: 26,
    top: 191,
    color: Color.colorGainsboro,
    fontSize: FontSize.size_xs,
  },
  makanan: {
    top: 233,
  },
  uangJajan: {
    top: 267,
  },
  homePageInner: {
    left: 26,
  },
  rectangleView: {
    left: 151,
  },
  homePageChild1: {
    left: 270,
  },
  tunai: {
    left: 108,
    color: Color.colorWhite,
    top: 233,
  },
  tunai1: {
    left: 108,
    color: Color.colorWhite,
    top: 267,
  },
  text3: {
    left: 185,
    top: 191,
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_xs,
  },
  text4: {
    top: 191,
    color: Color.colorTomato,
  },
  harian: {
    left: 56,
  },
  kalender: {
    left: 174,
  },
  bulanan: {
    top: 80,
    left: 299,
  },
  text5: {
    top: 267,
    color: Color.colorCornflowerblue,
  },
  text6: {
    top: 233,
    color: Color.colorTomato,
  },
  vectorIcon: {
    right: "80.03%",
    left: "13.89%",
    bottom: "5.63%",
    top: "91.25%",
    height: "3.13%",
    position: "absolute",
    width: "6.08%",
    maxWidth: "100%",
  },
  transaksi: {
    left: 32,
    color: Color.colorChocolate,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  vectorIcon1: {
    right: "63.31%",
    left: "33.89%",
  },
  vectorIcon2: {
    right: "89.97%",
    left: "7.22%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "38.33%",
    right: "53.06%",
    width: "8.61%",
  },
  tahunan: {
    left: 127,
    fontSize: FontSize.size_smi,
    top: 764,
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
    fontSize: FontSize.size_xs,
  },
  vector2: {
    left: "62.5%",
    right: "32.28%",
    width: "5.22%",
  },
  memo: {
    left: 214,
    fontSize: FontSize.size_smi,
    top: 764,
  },
  wrapper: {
    left: 268,
    top: 619,
    width: 65,
    height: 65,
    position: "absolute",
  },
  vectorIcon3: {
    height: "2.74%",
    top: "80.13%",
    right: "13.36%",
    bottom: "17.14%",
    left: "80.56%",
    width: "6.08%",
    maxWidth: "100%",
    position: "absolute",
  },
  homePage: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
  },
});

export default HomePage;
