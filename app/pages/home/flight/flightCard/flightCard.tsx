import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import axios from "axios";

// Tạo interface cho dữ liệu chuyến bay
interface CardData {
  id: string;
  image: string;
  flight: string;
  price: string;
  trip_time: string;
  take_place: string;
  destination: string;
}

const FlightCard: React.FC = () => {
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const [flights, setFlights] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const flatListRef = useRef<FlatList<any>>(null);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.28:3001/api/flight-crawl/crawl"
        );
        setFlights(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchFlightData();
  }, []);

  const handleHeartPress = (id: string) => {
    setLiked((prevLiked) => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };
  const formatPriceToVND = (price: any) => {
    const priceString = String(price);
    const numberPrice = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
    return numberPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const pages = [];
  for (let i = 0; i < flights.length; i += 2) {
    pages.push(flights.slice(i, i + 2));
  }

  const handleIndicatorPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index });
    setCurrentPage(index);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#FF9680" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={pages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.pageContainer}>
            {item.map((card: CardData) => (
              <TouchableOpacity
                key={card.id}
                onPress={() =>
                  router.push("/flights/detailFlight/detail-flight")
                }
              >
                <Card style={styles.card}>
                  <Image
                    source={{ uri: card.image }}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.star}>
                    <Icon name="star" color="#FF9680" /> 4.8
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.heart,
                      {
                        backgroundColor: liked.has(card.id)
                          ? "#FF9680"
                          : "rgba(135, 206, 250, 0.5)",
                      },
                    ]}
                    onPress={() => handleHeartPress(card.id)}
                  >
                    <Icon
                      name="heart"
                      color={liked.has(card.id) ? "#FFF" : "#FF9680"}
                    />
                  </TouchableOpacity>
                  <View style={styles.cardContent}>
                    <Text style={styles.flight}>{card.take_place}</Text>
                    <Text style={styles.price}>
                      {formatPriceToVND(card.price)}
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        )}
        contentContainerStyle={styles.cardContainer}
      />

      <View style={styles.indicatorContainer}>
        {pages.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleIndicatorPress(index)}
          >
            <View
              style={[
                styles.indicator,
                {
                  backgroundColor:
                    currentPage === index ? "#FF9680" : "#D3D3D3",
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  pageContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cardContainer: {
    paddingLeft: 10,
  },
  card: {
    alignItems: "center",
    width: 150,
    marginRight: 15,
    height: 250,
  },
  cardImage: {
    height: 120,
    width: 140,
    marginTop: 4,
    borderRadius: 10,
  },
  cardContent: {
    width: "100%",
    gap: 8,
    paddingTop: 4,
  },
  star: {
    color: "black",
    position: "absolute",
    bottom: 10,
    right: 7,
    fontSize: 10,
  },
  heart: {
    backgroundColor: "rgba(135, 206, 250, 0.5)",
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 7,
    top: 10,
  },
  flight: {
    paddingTop: 4,
    fontSize: 10,
    fontWeight: "bold",
    paddingBottom: 30,
    width: "100%",
    height: 70,
  },
  price: {
    fontSize: 14,
    color: "#FF9680",
    textAlign: "left",
    paddingBottom: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#D3D3D3",
  },
});

export default FlightCard;
