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

interface CoachData {
  id: string;
  brand: string;
  price: number;
  number_of_seat: string;
  start_time: string;
  start_day: string;
  end_day: string;
  end_time: string;
  trip_time: string;
  take_place: string;
  destination: string;
  location: string;
  isFavorite: boolean;
  number_of_seats_remaining: number;
  image: string;
}

const CoachCard: React.FC = () => {
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const [coachs, setCoachs] = useState<CoachData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const flatListRef = useRef<FlatList<any>>(null);

  useEffect(() => {
    const fetchCoachData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.5:3001/api/road-vehicle/crawl"
        );
        setCoachs(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchCoachData();
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
  for (let i = 0; i < coachs.length; i += 2) {
    pages.push(coachs.slice(i, i + 2));
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
            {item.map((card: CoachData) => (
              <TouchableOpacity
                key={card.id}
                onPress={() =>
                  router.push(`/coach/detailCoach/detail-Coach?id=${card.id}`)
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
                    <View style={styles.place}>
                      <Text style={styles.coach}>{card.take_place}</Text>
                      <Text style={styles.coach}>{card.destination}</Text>
                    </View>

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
    height: 270,
  },
  place: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 8,
    width: "100%",
    position: "absolute",
    top: 15,
  },
  cardImage: {
    height: 100,
    width: 140,
    marginTop: 4,
    borderRadius: 10,
  },
  cardContent: {
    width: "100%",
    paddingHorizontal: 8,
    paddingTop: 8,
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
  },
  star: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: "black",
    fontSize: 12,
  },
  heart: {
    backgroundColor: "rgba(135, 206, 250, 0.5)",
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 10,
  },
  coach: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
    width: "48%",
    textAlign: "center",
  },
  price: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 14,
    color: "#FF9680",
    fontWeight: "bold",
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

export default CoachCard;
