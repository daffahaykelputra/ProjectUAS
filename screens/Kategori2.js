import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Kategori2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.kategori2, styles.iconLayout]}>
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
      <View style={styles.kategori2Child} />
      <View style={[styles.kategori2Item, styles.kategori2Layout]} />
      <Text style={[styles.uangMasuk, styles.uangTypo]}>Uang Masuk</Text>
      <View style={[styles.kategori2Inner, styles.kategori2Layout]} />
      <Text style={[styles.uangKeluaran, styles.uangTypo]}>Uang Keluaran</Text>
      <Text style={[styles.tanggal, styles.totalTypo]}>Tanggal</Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text style={[styles.kategori, styles.totalTypo]}>Kategori</Text>
      <Text style={[styles.aset, styles.asetTypo]}>Aset</Text>
      <Text style={[styles.catatan, styles.totalTypo]}>Catatan</Text>
      <Image
        style={[styles.lineIcon, styles.kategori2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.kategori2Child1, styles.kategori2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.kategori2Child2, styles.kategori2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.kategori2Child3, styles.kategori2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.kategori2Child4, styles.kategori2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.pilih, styles.pilihTypo]}>Pilih</Text>
      <Text style={[styles.pilih1, styles.pilihTypo]}>Pilih</Text>
      <Text style={[styles.pilih2, styles.pilihTypo]}>Pilih</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("UangKeluar")}
      />
      <Text style={[styles.lainnya, styles.lainnyaTypo]}>Lainnya</Text>
      <Text style={[styles.pakaian, styles.pakaianPosition]}>Pakaian</Text>
      <Text style={[styles.transportasi, styles.lainnyaTypo]}>
        Transportasi
      </Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.kategori1, styles.asetTypo]}>Kategori</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.kategori2Child5, styles.lineViewLayout]} />
      <View style={styles.kategori2Child6} />
      <Image
        style={[styles.kategori2Child7, styles.kategori2ChildPosition]}
        resizeMode="cover"
        source={require("../assets/line-111.png")}
      />
      <View style={[styles.kategori2Child8, styles.kategori2ChildPosition]} />
      <Text style={[styles.makanan, styles.makananPosition]}>Makanan</Text>
      <Text style={[styles.kehidupanSosial, styles.lainnyaTypo]}>{`Kehidupan
Sosial`}</Text>
      <Text style={[styles.kesehatan, styles.makananPosition]}>Kesehatan</Text>
      <Text style={[styles.pendidikan, styles.pakaianPosition]}>
        Pendidikan
      </Text>
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
  kategori2Layout: {
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
  kategori2ChildLayout: {
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
  lainnyaTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  pakaianPosition: {
    top: 630,
    fontSize: FontSize.size_smi,
  },
  lineViewLayout: {
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    height: 1,
    left: 0,
    position: "absolute",
  },
  kategori2ChildPosition: {
    width: 1,
    top: 556,
    position: "absolute",
  },
  makananPosition: {
    left: 30,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
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
  kategori2Child: {
    top: 176,
    height: 244,
    left: 0,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  kategori2Item: {
    left: 25,
    backgroundColor: Color.colorDimgray,
  },
  uangMasuk: {
    left: 50,
    top: 113,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  kategori2Inner: {
    left: 194,
    backgroundColor: Color.colorTomato,
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
  kategori2Child1: {
    top: 264,
  },
  kategori2Child2: {
    top: 305,
  },
  kategori2Child3: {
    top: 347,
  },
  kategori2Child4: {
    top: 389,
  },
  pilih: {
    top: 206,
  },
  pilih1: {
    top: 244,
  },
  pilih2: {
    top: 327,
  },
  rectanglePressable: {
    top: 556,
    height: 244,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    left: 0,
    position: "absolute",
  },
  lainnya: {
    top: 684,
    left: 39,
  },
  pakaian: {
    left: 278,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  transportasi: {
    left: 263,
    top: 575,
  },
  rectangleView: {
    top: 498,
    left: -1,
    height: 51,
    width: 360,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  kategori1: {
    top: 515,
    left: 21,
  },
  lineView: {
    top: 610,
  },
  kategori2Child5: {
    top: 667,
  },
  kategori2Child6: {
    top: 724,
    width: 124,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    height: 1,
    left: 0,
    position: "absolute",
  },
  kategori2Child7: {
    left: 123,
    height: 168,
  },
  kategori2Child8: {
    left: 243,
    borderRightWidth: 1,
    height: 112,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    width: 1,
  },
  makanan: {
    top: 575,
    fontSize: FontSize.size_mini,
    left: 30,
  },
  kehidupanSosial: {
    top: 568,
    left: 155,
  },
  kesehatan: {
    top: 630,
    fontSize: FontSize.size_smi,
  },
  pendidikan: {
    left: 152,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  kategori2: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    borderRadius: Border.br_xl,
    width: "100%",
  },
});

export default Kategori2;
