import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

import { Button, Checkbox } from "react-native-paper";

import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import {
  Bus,
  Clock,
  DollarSign,
  MapPin,
  MapPinHouse,
  Plane,
} from "lucide-react-native";
import HeaderFlights from "@/app/flights/headerFlight/header";
import HeaderCoach from "../headerCoach/headerCoach";

interface CoachDetail {
  id: string;
  brand: string;
  price: number;
  start_time: string;
  start_day: string;
  end_day: string;
  end_time: string;
  trip_time: string;
  take_place: string;
  destination: string;
  trip_to: string;
  createAt: string;
  updateAt: string;
  userId: string | null;
  image: string;
  number_of_seats_remaining: number;

  baggage_weight: string;
}

export default function DetailFlight() {
  const [coachDetail, setCoachDetail] = useState<CoachDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useLocalSearchParams();

  const price = coachDetail?.price ?? 0;

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  const fetchCoachDetail = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.5:3001/api/road-vehicle/crawl/${id}`
      );
      setCoachDetail(response?.data);
      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu chi tiết:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCoachDetail();
    }
  }, [id]);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!coachDetail) {
    return <Text>No data found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderCoach />
      <Image source={{ uri: coachDetail.image }} style={styles.headerImage} />

      <View style={styles.infoContainer}>
        <MapPin style={styles.icon} color="black" size={24} />
        <Text style={styles.infoText}>{coachDetail?.take_place}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Bus style={styles.icon} color="black" size={24} />
        <Text style={styles.infoText}>{coachDetail?.destination}</Text>
      </View>
      <View style={styles.imagesld}>
        <Image
          source={require("@/assets/images/buss.png")}
          style={styles.img}
        />
      </View>

      <View style={styles.infoContainer}>
        <DollarSign style={styles.icon} color="black" size={24} />
        <Text style={styles.infoText}>Price: {formattedPrice}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Clock style={styles.icon} color="black" size={24} />
        <Text style={styles.infoText}>Trip time: {coachDetail?.trip_time}</Text>
      </View>

      <View style={styles.containerImage}>
        <Image
          source={require("@/assets/images/bus1.png")}
          style={styles.image2}
        />
        <View style={styles.textContainer2}>
          <Text style={styles.text1}>{coachDetail?.brand}</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.column}>
          <Text style={styles.timeText}>{coachDetail?.start_time} h</Text>
          <Text style={styles.locationText}>{coachDetail?.destination}</Text>
        </View>
        <MapPinHouse color="black" style={styles.icon} />
        <View style={styles.column}>
          <Text style={styles.timeText}>{coachDetail?.end_time} h</Text>
          <Text style={styles.locationText}>{coachDetail?.take_place}</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Button mode="contained" style={styles.bookButton}>
          Book Coach
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 200,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  ticketItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  headerImage: {
    width: "100%",
    borderRadius: 30,
    resizeMode: "cover",
    height: 150,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
    width: "98%",
    gap: 3,
    padding: 10,
  },
  icon: {
    color: "black",
    width: 24,
    height: 24,
  },
  infoText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  h1: {
    fontSize: 10,
  },
  b1: {
    fontSize: 10,
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
    fontSize: 10,
    color: "gray",
  },
});
