import React, { useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import HeaderFlights from "../headerFlight/header";
import { Button, Checkbox } from "react-native-paper";
import {
  FileKey,
  Plane,
  RockingChair,
  Star,
  Utensils,
  Wifi,
} from "lucide-react-native";

export default function DetailFlight() {
  const [selectedClass, setSelectedClass] = useState<string>("");

  const handleCheckboxChange = (classType: string) => {
    setSelectedClass(classType);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderFlights />
      <Image
        source={require("@/assets/images/flight-detail-banner.png")}
        style={styles.headerImage}
      />
      <View style={styles.imagesld}>
        <Image
          source={require("@/assets/images/caray.png")}
          style={styles.img}
        />
        <Image
          source={require("@/assets/images/quatar.png")}
          style={styles.img}
        />
        <Image
          source={require("@/assets/images/conrad.png")}
          style={styles.img}
        />
      </View>
      <Text style={styles.h1}>Emirates Airlines</Text>
      <Text style={styles.b1}>Basic Economy Features</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <Checkbox
            status={selectedClass === "economy" ? "checked" : "unchecked"}
            onPress={() => handleCheckboxChange("economy")}
          />
          <Text style={styles.label}>Economy Class</Text>
        </View>
        <View style={styles.checkbox}>
          <Checkbox
            status={selectedClass === "firstClass" ? "checked" : "unchecked"}
            onPress={() => handleCheckboxChange("firstClass")}
          />
          <Text style={styles.label}>First Class</Text>
        </View>
        <View style={styles.checkbox}>
          <Checkbox
            status={selectedClass === "business" ? "checked" : "unchecked"}
            onPress={() => handleCheckboxChange("business")}
          />
          <Text style={styles.label}>Business Class</Text>
        </View>
      </View>

      <View style={styles.policyContainer}>
        <Text style={styles.tt}>Emirates Airlines Policies</Text>
        <View style={styles.policyItem}>
          <Star style={styles.starIcon} />
          <Text style={styles.policyText}>
            Pre-flight cleaning, installation of cabin HEPA filters.
          </Text>
        </View>
        <View style={styles.policyItem}>
          <Star style={styles.starIcon} />
          <Text style={styles.policyText}>
            Pre-flight health screening questions.
          </Text>
        </View>
      </View>

      <Text>Return Wed, Dec 8</Text>
      <Text>2h 28m</Text>

      <View style={styles.containerImage}>
        <Image
          source={require("@/assets/images/ImageHaNoi.png")}
          style={styles.image2}
        />
        <View style={styles.textContainer2}>
          <Text style={styles.text1}>Emirates</Text>
          <Text style={styles.text2}>Airbus A320</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Plane color="black" />
        <Wifi color="black" />
        <FileKey color="black" />
        <Utensils color="black" />
        <RockingChair color="black" />
      </View>

      <View style={styles.container3}>
        <View style={styles.column}>
          <Text style={styles.timeText}>12h pm</Text>
          <Text style={styles.locationText}>Newark</Text>
        </View>
        <Plane color="black" style={styles.icon} />
        <View style={styles.column}>
          <Text style={styles.timeText}>12h pm</Text>
          <Text style={styles.locationText}>Newark</Text>
        </View>
      </View>

      <View style={styles.btn}>
        <Button mode="contained" style={styles.bookButton}>
          Book Tour
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Cho phép ScrollView lấp đầy không gian
    paddingBottom: 200,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  headerImage: {
    width: "100%",
    borderRadius: 30,
    resizeMode: "cover",
    height: 150,
  },
  img: {
    position: "absolute", // Đặt các ảnh chồng lên nhau
    top: 0, // Căn chỉnh vị trí ảnh theo ý muốn
    left: 0, // Căn chỉnh vị trí ảnh theo ý muốn
    width: "100%", // Đảm bảo ảnh chiếm toàn bộ chiều rộng container
    height: "100%", // Đảm bảo ảnh chiếm toàn bộ chiều cao container
    resizeMode: "contain",
  },
  h1: {
    fontSize: 20,
  },
  b1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imagesld: {
    flexDirection: "row",
    marginTop: 20,
    position: "relative",
    width: "100%",
    height: 200,
  },
  tt: {
    fontSize: 20,
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: "#FF6347",
    width: 200,
    textAlign: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: 13,
  },
  policyContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#8DD3BB",
    height: 200,
    borderRadius: 10,
  },
  policyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 30,
  },
  starIcon: {
    marginRight: 10,
    color: "black",
    width: 24,
    height: 24,
  },
  policyText: {
    fontSize: 16,
  },
  containerImage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.0,
    elevation: 3,
    textAlign: "center",

    height: 100,
    width: "100%",
  },
  image2: {
    width: "40%",
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
    padding: 10,
  },
  textContainer2: {
    width: "60%",
    paddingLeft: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  text2: {
    fontSize: 16,
    color: "gray",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginVertical: 10,
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  column: {
    alignItems: "center",
    flex: 1,
  },
  timeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 14,
    color: "gray",
  },
  icon: {
    marginHorizontal: 10,
  },
});
