import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddMemo = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addMemo, styles.iconLayout]}>
      <Text style={styles.memo}>Memo</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Memo1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.addMemoChild} />
      <Text style={[styles.sab, styles.sabTypo]}>25.11 (Sab)</Text>
      <Text style={[styles.judul, styles.sabTypo]}>Judul</Text>
      <Text style={[styles.memo1, styles.sabTypo]}>Memo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  sabTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  memo: {
    top: 39,
    left: 59,
    color: Color.colorGainsboro,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_mini,
    position: "absolute",
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
  addMemoChild: {
    top: 72,
    left: 37,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 98,
    height: 31,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  sab: {
    top: 79,
    left: 47,
  },
  judul: {
    top: 125,
    left: 40,
    fontWeight: "700",
  },
  memo1: {
    top: 158,
    left: 42,
    fontWeight: "300",
  },
  addMemo: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 800,
    backgroundColor: Color.colorGray_100,
  },
});

export default AddMemo;
