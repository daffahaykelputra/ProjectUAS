import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Total2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.total2}>
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
      <View style={styles.total2Child} />
      <View style={[styles.total2Item, styles.total2Layout]} />
      <Text style={[styles.uangMasuk, styles.uangTypo]}>Uang Masuk</Text>
      <View style={[styles.total2Inner, styles.total2Layout]} />
      <Text style={[styles.uangKeluaran, styles.uangTypo]}>Uang Keluaran</Text>
      <Text style={[styles.tanggal, styles.totalTypo]}>Tanggal</Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text style={[styles.kategori, styles.totalTypo]}>Kategori</Text>
      <Text style={[styles.aset, styles.asetTypo]}>Aset</Text>
      <Text style={[styles.catatan, styles.totalTypo]}>Catatan</Text>
      <Image
        style={[styles.lineIcon, styles.total2ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.total2Child1, styles.total2ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.total2Child2, styles.total2ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.total2Child3, styles.total2ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.total2Child4, styles.total2ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.pilih, styles.pilihTypo]}>Pilih</Text>
      <Text style={[styles.pilih1, styles.pilihTypo]}>Pilih</Text>
      <Text style={[styles.pilih2, styles.pilihTypo]}>Pilih</Text>
      <View style={styles.rectangleView} />
      <View style={[styles.lineView, styles.total2ChildLayout1]} />
      <View style={[styles.total2Child5, styles.total2ChildLayout1]} />
      <View style={[styles.total2Child6, styles.total2ChildLayout1]} />
      <Image
        style={[styles.total2Child7, styles.total2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-9.png")}
      />
      <Image
        style={[styles.total2Child8, styles.total2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-9.png")}
      />
      <Image
        style={[styles.total2Child9, styles.total2ChildLayout]}
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
      <View style={styles.total2Child10} />
      <Text style={[styles.total1, styles.asetTypo]}>Total</Text>
      <Pressable
        style={styles.selesai}
        onPress={() => navigation.navigate("UangKeluar")}
      >
        <Text style={styles.asetTypo}>Selesai</Text>
      </Pressable>
      <Image
        style={styles.total2Child11}
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
  total2Layout: {
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
  totalTypo: {
    left: 31,
    textAlign: "left",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  total2ChildLayout2: {
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
  total2ChildLayout1: {
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    height: 1,
    left: 0,
    position: "absolute",
  },
  total2ChildLayout: {
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
  total2Child: {
    top: 176,
    height: 244,
    left: 0,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  total2Item: {
    left: 25,
    backgroundColor: Color.colorDimgray,
  },
  uangMasuk: {
    left: 50,
  },
  total2Inner: {
    left: 194,
    backgroundColor: Color.colorTomato,
  },
  uangKeluaran: {
    left: 212,
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
  total2Child1: {
    top: 264,
  },
  total2Child2: {
    top: 305,
  },
  total2Child3: {
    top: 347,
  },
  total2Child4: {
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
  total2Child5: {
    top: 669,
  },
  total2Child6: {
    top: 727,
  },
  total2Child7: {
    left: 91,
  },
  total2Child8: {
    left: 179,
  },
  total2Child9: {
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
  total2Child10: {
    top: 498,
    left: -1,
    height: 51,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  total1: {
    top: 515,
    left: 21,
    position: "absolute",
  },
  selesai: {
    left: 288,
    top: 755,
    position: "absolute",
  },
  total2Child11: {
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
  total2: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
  },
});

export default Total2;
