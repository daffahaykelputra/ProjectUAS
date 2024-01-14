import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UangMasuk = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.uangMasuk, styles.iconLayout]}>
      <Text style={[styles.tambahData, styles.asetTypo]}>Tambah Data</Text>
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
      <View style={styles.uangMasukChild} />
      <View style={[styles.uangMasukItem, styles.uangLayout]} />
      <Text style={[styles.uangMasuk1, styles.uangTypo]}>Uang Masuk</Text>
      <Pressable
        style={[styles.uangMasukInner, styles.uangLayout]}
        onPress={() => navigation.navigate("UangKeluar")}
      />
      <Text style={[styles.uangKeluaran, styles.uangTypo]}>Uang Keluaran</Text>
      <Text style={[styles.tanggal, styles.totalTypo]}>Tanggal</Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text style={[styles.kategori, styles.totalTypo]}>Kategori</Text>
      <Text style={[styles.aset, styles.asetTypo]}>Aset</Text>
      <Text style={[styles.catatan, styles.totalTypo]}>Catatan</Text>
      <Image
        style={[styles.lineIcon, styles.uangChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.uangMasukChild1, styles.uangChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.uangMasukChild2, styles.uangChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.uangMasukChild3, styles.uangChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.uangMasukChild4, styles.uangChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("HomePage")}
      />
      <Text style={[styles.menyimpan, styles.uangTypo]}>Menyimpan</Text>
      <Text style={[styles.pilih, styles.pilihTypo]}>Pilih</Text>
      <Pressable
        style={[styles.pilih1, styles.pilihPosition]}
        onPress={() => navigation.navigate("Kategori")}
      >
        <Text style={styles.pilihTypo}>Pilih</Text>
      </Pressable>
      <Pressable
        style={[styles.pilih3, styles.pilihPosition]}
        onPress={() => navigation.navigate("Aset")}
      >
        <Text style={styles.pilihTypo}>Pilih</Text>
      </Pressable>
      <Pressable
        style={[styles.pilih5, styles.pilihPosition]}
        onPress={() => navigation.navigate("Total")}
      >
        <Text style={styles.pilihTypo}>Pilih</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
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
  uangLayout: {
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
  uangChildLayout: {
    height: 1,
    width: 228,
    left: 116,
    position: "absolute",
  },
  pilihTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  pilihPosition: {
    left: 116,
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
  uangMasukChild: {
    top: 176,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: 360,
    height: 244,
    position: "absolute",
  },
  uangMasukItem: {
    left: 25,
    backgroundColor: Color.colorCornflowerblue,
  },
  uangMasuk1: {
    left: 50,
    top: 113,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  uangMasukInner: {
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
  aset: {
    top: 329,
    left: 32,
  },
  catatan: {
    top: 370,
  },
  lineIcon: {
    top: 226,
  },
  uangMasukChild1: {
    top: 264,
  },
  uangMasukChild2: {
    top: 305,
  },
  uangMasukChild3: {
    top: 347,
  },
  uangMasukChild4: {
    top: 389,
  },
  rectanglePressable: {
    top: 515,
    left: 26,
    width: 308,
    height: 58,
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  menyimpan: {
    top: 532,
    left: 126,
    fontSize: FontSize.size_xl,
    width: 196,
  },
  pilih: {
    left: 116,
    position: "absolute",
    top: 206,
  },
  pilih1: {
    top: 284,
  },
  pilih3: {
    top: 327,
  },
  pilih5: {
    top: 243,
  },
  uangMasuk: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    borderRadius: Border.br_xl,
  },
});

export default UangMasuk;
