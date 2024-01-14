import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Total = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.total}>
      <Text style={[styles.tambahData, styles.asetTypo]}>Tambah Data</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.totalChild} />
      <View style={[styles.totalItem, styles.totalLayout]} />
      <Text style={[styles.uangMasuk, styles.uangTypo]}>Uang Masuk</Text>
      <View style={[styles.totalInner, styles.totalLayout]} />
      <Text style={[styles.uangKeluaran, styles.uangTypo]}>Uang Keluaran</Text>
      <Text style={[styles.tanggal, styles.total1Typo]}>Tanggal</Text>
      <Text style={[styles.total1, styles.total1Typo]}>Total</Text>
      <Text style={[styles.kategori, styles.total1Typo]}>Kategori</Text>
      <Text style={[styles.aset, styles.asetTypo]}>Aset</Text>
      <Text style={[styles.catatan, styles.total1Typo]}>Catatan</Text>
      <Image
        style={[styles.lineIcon, styles.totalChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.totalChild1, styles.totalChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.totalChild2, styles.totalChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.totalChild3, styles.totalChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.totalChild4, styles.totalChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.pilih, styles.pilihTypo]}>Pilih</Text>
      <Text style={[styles.pilih1, styles.pilihTypo]}>Pilih</Text>
      <Text style={[styles.pilih2, styles.pilihTypo]}>Pilih</Text>
      <View style={styles.rectangleView} />
      <View style={[styles.lineView, styles.totalChildLayout1]} />
      <View style={[styles.totalChild5, styles.totalChildLayout1]} />
      <View style={[styles.totalChild6, styles.totalChildLayout1]} />
      <Image
        style={[styles.totalChild7, styles.totalChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-9.png")}
      />
      <Image
        style={[styles.totalChild8, styles.totalChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-9.png")}
      />
      <Image
        style={[styles.totalChild9, styles.totalChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-9.png")}
      />
      <Text style={[styles.text, styles.textTypo3]}>1</Text>
      <Text style={[styles.text1, styles.textTypo3]}>2</Text>
      <Text style={[styles.text2, styles.textTypo3]}>3</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector21.png")}
      />
      <Text style={[styles.text3, styles.textTypo2]}>4</Text>
      <Text style={[styles.text4, styles.textTypo2]}>5</Text>
      <Text style={[styles.text5, styles.textTypo2]}>6</Text>
      <Text style={[styles.text6, styles.textTypo2]}>-</Text>
      <Text style={[styles.text7, styles.textTypo1]}>7</Text>
      <Text style={[styles.text8, styles.textTypo1]}>8</Text>
      <Text style={[styles.text9, styles.textTypo1]}>9</Text>
      <Text style={[styles.text10, styles.textTypo]}>0</Text>
      <Text style={[styles.text11, styles.textTypo]}>,</Text>
      <View style={styles.totalChild10} />
      <Text style={[styles.total2, styles.asetTypo]}>Total</Text>
      <Pressable
        style={styles.selesai}
        onPress={() => navigation.navigate("UangMasuk")}
      >
        <Text style={styles.asetTypo}>Selesai</Text>
      </Pressable>
      <Image
        style={styles.totalChild11}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  asetTypo: {
    textAlign: "left",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_mini,
  },
  totalLayout: {
    height: 33,
    width: 140,
    top: 106,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  uangTypo: {
    color: Color.colorWhite,
    top: 113,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  total1Typo: {
    left: 31,
    textAlign: "left",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  totalChildLayout2: {
    height: 1,
    width: 228,
    left: 116,
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
  totalChildLayout1: {
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    height: 1,
    left: 0,
    position: "absolute",
  },
  totalChildLayout: {
    width: 1,
    top: 556,
    height: 244,
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.size_xl,
    top: 572,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "84.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    top: 629,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  textTypo1: {
    top: 686,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  textTypo: {
    top: 754,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  tambahData: {
    top: 39,
    left: 44,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
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
  totalChild: {
    top: 176,
    height: 244,
    left: 0,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  totalItem: {
    left: 25,
    backgroundColor: Color.colorCornflowerblue,
  },
  uangMasuk: {
    left: 50,
  },
  totalInner: {
    left: 194,
    backgroundColor: Color.colorDimgray,
  },
  uangKeluaran: {
    left: 212,
  },
  tanggal: {
    top: 206,
  },
  total1: {
    top: 247,
  },
  kategori: {
    top: 288,
  },
  aset: {
    top: 329,
    left: 32,
    position: "absolute",
  },
  catatan: {
    top: 370,
  },
  lineIcon: {
    top: 226,
  },
  totalChild1: {
    top: 264,
  },
  totalChild2: {
    top: 305,
  },
  totalChild3: {
    top: 347,
  },
  totalChild4: {
    top: 389,
  },
  pilih: {
    top: 206,
  },
  pilih1: {
    top: 284,
  },
  pilih2: {
    top: 327,
  },
  rectangleView: {
    top: 556,
    height: 244,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    left: 0,
    position: "absolute",
  },
  lineView: {
    top: 613,
  },
  totalChild5: {
    top: 669,
  },
  totalChild6: {
    top: 727,
  },
  totalChild7: {
    left: 91,
  },
  totalChild8: {
    left: 179,
  },
  totalChild9: {
    left: 267,
  },
  text: {
    left: 41,
  },
  text1: {
    left: 129,
  },
  text2: {
    left: 219,
  },
  vectorIcon: {
    height: "1.88%",
    width: "6.94%",
    top: "72.13%",
    right: "8.89%",
    bottom: "26%",
  },
  text3: {
    left: 39,
  },
  text4: {
    left: 129,
  },
  text5: {
    left: 219,
  },
  text6: {
    left: 309,
  },
  text7: {
    left: 41,
  },
  text8: {
    left: 129,
  },
  text9: {
    left: 219,
  },
  text10: {
    left: 129,
  },
  text11: {
    left: 219,
  },
  totalChild10: {
    top: 498,
    left: -1,
    height: 51,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  total2: {
    top: 515,
    left: 21,
    position: "absolute",
  },
  selesai: {
    left: 288,
    top: 755,
    position: "absolute",
  },
  totalChild11: {
    top: 726,
    left: 268,
    width: 92,
    height: 74,
    position: "absolute",
  },
  vectorIcon1: {
    height: "3.13%",
    width: "6.08%",
    top: "85.75%",
    right: "9.75%",
    bottom: "11.13%",
  },
  total: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
  },
});

export default Total;
