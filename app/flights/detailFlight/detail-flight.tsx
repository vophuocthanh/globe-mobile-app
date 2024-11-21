import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import HeaderFlights from "../headerFlight/header";
import { Button, Checkbox } from "react-native-paper";

import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { Clock, DollarSign, MapPin, Plane } from "lucide-react-native";

interface Ticket {
  id: string;
  type_ticket: "ECONOMY" | "BUSINESS" | "FIRST_CLASS";
  price: number;
  baggage_weight: string;
  baggage_price: number;
  flightId: string;
  createdAt: string;
  updatedAt: string;
}

interface FLightDetail {
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
  type_ticket: "ECONOMY" | "BUSINESS" | "FIRST_CLASS";
  baggage_weight: string;
  Ticket: Ticket[];
}

export default function DetailFlight() {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [flightDetail, setFlightDetail] = useState<FLightDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const handleCheckboxChange = (classType: string) => {
    setSelectedClass(classType);
    console.log("Bạn đã chọn loại vé:", classType);
  };
  const { id } = useLocalSearchParams();

  const price = flightDetail?.price ?? 0;

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  const fetchFlighgtDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/flight-crawl/crawl/${id}`
      );
      setFlightDetail(response?.data);
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
      fetchFlighgtDetail();
    }
  }, [id]);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!flightDetail) {
    return <Text>No data found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderFlights />
      <Image
        source={require("@/assets/images/flight-detail-banner.png")}
        style={styles.headerImage}
      />
      <View style={styles.infoContainer}>
        <MapPin style={styles.icon} color="black" size={24} />
        <Text style={styles.infoText}>{flightDetail?.take_place}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Plane style={styles.icon} color="black" size={24} />
        <Text style={styles.infoText}>{flightDetail?.destination}</Text>
      </View>
      <View style={styles.imagesld}>
        <Image
          source={require("@/assets/images/caray.png")}
          style={styles.img}
        />
      </View>

      <View style={styles.infoContainer}>
        <DollarSign style={styles.icon} color="black" size={24} />
        <Text style={styles.infoText}>Price: {formattedPrice}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Clock style={styles.icon} color="black" size={24} />
        <Text style={styles.infoText}>
          Trip time: {flightDetail?.trip_time}
        </Text>
      </View>

      <View style={styles.containerImage}>
        <Image
          source={require("@/assets/images/ImageHaNoi.png")}
          style={styles.image2}
        />
        <View style={styles.textContainer2}>
          <Text style={styles.text1}>{flightDetail?.brand}</Text>
          <Text style={styles.text2}>{flightDetail?.type_ticket}</Text>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        {flightDetail?.Ticket?.map((ticket) => (
          <View style={styles.checkbox} key={ticket.id}>
            <Checkbox
              status={
                selectedClass === ticket.type_ticket ? "checked" : "unchecked"
              }
              onPress={() => handleCheckboxChange(ticket.type_ticket)}
            />
            <Text style={styles.label}>{ticket.type_ticket}</Text>
          </View>
        ))}
      </View>
      <View style={styles.container3}>
        <View style={styles.column}>
          <Text style={styles.timeText}>{flightDetail?.start_time} h</Text>
          <Text style={styles.locationText}>{flightDetail?.destination}</Text>
        </View>
        <Plane color="black" style={styles.icon} />
        <View style={styles.column}>
          <Text style={styles.timeText}>{flightDetail?.end_time} h</Text>
          <Text style={styles.locationText}>{flightDetail?.take_place}</Text>
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
