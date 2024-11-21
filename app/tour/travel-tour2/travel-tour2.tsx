import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import { Card, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const screenWidth = Dimensions.get("window").width;

interface CardData {
  id: number;
  image: any;
  name: string,
  title: string,
  country: string,
  rating: number,
  price: number,
}

const TravelTour2: React.FC = () => {
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const [tours, setTourss] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/tour"
        );
        setTourss(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchFlightData();
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="#FF9680" />;
  }
  const handleHeartPress = (id: number) => {
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

  // Mỗi trang sẽ có 4 thẻ (2 trên, 2 dưới)
  const pages = [];
  for (let i = 0; i < tours.length; i += 4) {
    pages.push(tours.slice(i, i + 4));
  }

  const handleIndicatorPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index });
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={pages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.pageContainer}>
            <View style={styles.rowContainer}>
              {item.slice(0, 2).map((card: CardData) => (
                <TouchableOpacity onPress={() => router.push('/tour/detail-tour/detail-tour')}>
                  <Card style={styles.card}>
                    <Image source={{ uri: card.image }} style={styles.image} />
                    <View style={styles.ratingContainer}>
                      <MaterialIcons name="star" size={18} color="red" />
                      <Text style={styles.ratingText}>{card.rating}</Text>
                    </View>
                    <IconButton
                      icon={() => <Ionicons name="heart-outline" size={20} color="white" />}
                      style={styles.heartIcon}
                    />
                    <Card.Content>
                      <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={16} color="red" />
                        <Text style={styles.country}>{card.name}</Text>
                      </View>
                      <Text style={styles.price}>Price: {
                        new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(card.price)}</Text>
                    </Card.Content>
                  </Card>

                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.rowContainer}>
              {item.slice(2).map((card: CardData) => (
                <TouchableOpacity onPress={() => router.push('/tour/detail-tour/detail-tour')}>
                  <Card style={styles.card}>
                    <Image source={{ uri: card.image }} style={styles.image} />
                    <View style={styles.ratingContainer}>
                      <MaterialIcons name="star" size={18} color="red" />
                      <Text style={styles.ratingText}>{card.rating}</Text>
                    </View>
                    <IconButton
                      icon={() => <Ionicons name="heart-outline" size={20} color="white" />}
                      style={styles.heartIcon}
                    />
                    <Card.Content>
                      <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={16} color="red" />
                        <Text style={styles.country}>{card.name}</Text>
                      </View>
                      <Text style={styles.price}>Price: {
                        new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(card.price)}</Text>
                    </Card.Content>
                  </Card>

                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        contentContainerStyle={styles.cardContainer}
        onScroll={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          const pageIndex = Math.round(offsetX / screenWidth);
          setCurrentPage(pageIndex);
        }}
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
    width: screenWidth,
    paddingBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  cardContainer: {
    paddingLeft: 10,
  },
  card: {
    alignItems: "center",
    width: 145,
    marginRight: 34,
    // paddingRight: 34,
  },
  cardImage: {
    height: 120,
    width: 140,
    paddingTop: 8,
  },
  cardContent: {
    alignItems: "center",
    gap: 2,
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
  tour: {
    paddingTop: 4,
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 30,
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
  image: {
    width: "100%",
    height: 120,
  },
  ratingContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 4,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  country: {
    fontSize: 14,
    color: "gray",
    marginLeft: 4,
    overflow: 'hidden', // tương đương overflow-hidden
    maxHeight: 34,
  },
  services: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
});

export default TravelTour2;
