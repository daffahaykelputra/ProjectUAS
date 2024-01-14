import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Aset = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aset, styles.asetLayout1]}>
      <Text style={[styles.tambahData, styles.asetTypo]}>Tambah Data</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.asetLayout1]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.asetChild} />
      <View style={[styles.asetItem, styles.asetLayout]} />
      <Text style={[styles.uangMasuk, styles.uangTypo]}>Uang Masuk</Text>
      <View style={[styles.asetInner, styles.asetLayout]} />
      <Text style={[styles.uangKeluaran, styles.uangTypo]}>Uang Keluaran</Text>
      <Text style={[styles.tanggal, styles.totalTypo]}>Tanggal</Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text style={[styles.kategori, styles.totalTypo]}>Kategori</Text>
      <Text style={[styles.aset1, styles.asetTypo]}>Aset</Text>
      <Text style={[styles.catatan, styles.totalTypo]}>Catatan</Text>
      <Image
        style={[styles.lineIcon, styles.lineChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.asetChild1, styles.lineChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.asetChild2, styles.lineChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.asetChild3, styles.lineChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.asetChild4, styles.lineChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.pilih, styles.pilihTypo]}>Pilih</Text>
      <Text style={[styles.pilih1, styles.pilihTypo]}>Pilih</Text>
      <Text style={[styles.pilih2, styles.pilihTypo]}>Pilih</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("UangMasuk")}
      />
      <Text style={[styles.kartu, styles.kartuPosition]}>Kartu</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.aset2, styles.asetTypo]}>Aset</Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={[styles.asetChild5, styles.asetChildPosition]} />
      <Image
        style={[styles.asetChild6, styles.asetChildPosition]}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Text style={[styles.tunai, styles.kartuPosition]}>Tunai</Text>
      <Text style={[styles.bank, styles.uangTypo]}>Bank</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  asetLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  asetTypo: {
    textAlign: "left",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  asetLayout: {
    height: 33,
    width: 140,
    top: 106,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  uangTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  totalTypo: {
    left: 31,
    textAlign: "left",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  lineChildLayout: {
    height: 1,
    position: "absolute",
  },
  pilihTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_smi,
    left: 116,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  kartuPosition: {
    top: 575,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  lineViewBorder: {
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
  },
  asetChildPosition: {
    width: 1,
    top: 556,
    position: "absolute",
  },
  tambahData: {
    top: 39,
    left: 44,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
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
  asetChild: {
    top: 176,
    height: 244,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    left: 0,
    position: "absolute",
  },
  asetItem: {
    left: 25,
    backgroundColor: Color.colorCornflowerblue,
  },
  uangMasuk: {
    left: 50,
    top: 113,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  asetInner: {
    left: 194,
    backgroundColor: Color.colorDimgray,
  },
  uangKeluaran: {
    left: 212,
    top: 113,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  tanggal: {
    top: 206,
  },
  total: {
    top: 247,
  },
  kategori: {
    top: 288,
  },
  aset1: {
    top: 329,
    left: 32,
  },
  catatan: {
    top: 370,
  },
  lineIcon: {
    top: 226,
    width: 228,
    left: 116,
    height: 1,
  },
  asetChild1: {
    top: 264,
    width: 228,
    left: 116,
    height: 1,
  },
  asetChild2: {
    top: 305,
    width: 228,
    left: 116,
    height: 1,
  },
  asetChild3: {
    top: 347,
    width: 228,
    left: 116,
    height: 1,
  },
  asetChild4: {
    top: 389,
    width: 228,
    left: 116,
    height: 1,
  },
  pilih: {
    top: 206,
  },
  pilih1: {
    top: 243,
  },
  pilih2: {
    top: 285,
  },
  rectanglePressable: {
    top: 556,
    height: 244,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    left: 0,
    position: "absolute",
  },
  kartu: {
    left: 286,
    fontSize: FontSize.size_smi,
  },
  rectangleView: {
    top: 498,
    left: -1,
    height: 51,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  aset2: {
    top: 515,
    left: 21,
  },
  lineView: {
    top: 610,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    position: "absolute",
    left: 0,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
  },
  asetChild5: {
    left: 124,
    borderRightWidth: 1,
    height: 55,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
  },
  asetChild6: {
    left: 243,
    height: 54,
  },
  tunai: {
    left: 39,
    fontSize: FontSize.size_mini,
    top: 575,
  },
  bank: {
    top: 576,
    left: 170,
    fontSize: FontSize.size_smi,
  },
  aset: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    borderRadius: Border.br_xl,
    overflow: "hidden",
    width: "100%",
  },
});

export default Aset;
