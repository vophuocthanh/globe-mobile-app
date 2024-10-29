import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Card } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { Flame } from "lucide-react-native";




export default function Hotel() {
  const [value, setValue] = React.useState('Popular');

  const [liked, setLiked] = useState(new Set());
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
  const iconMap: { [key: string]: string } = {
    Popular: "fire",
    Lake: "water",
    Beach: "beach",
    Mountain: "flag-triangle",
  };

  const cardData = [
    {
      id: 1,
      image: require("../../assets/images/ImageHaNoi.png"),
      city: "Melbourne",
      country: "Australia",
      tour: "Tour - Flight - Hotel",
    },
    {
      id: 2,
      image: require("../../assets/images/ImagePlace.png"),
      city: "Paris",
      country: "France",
      tour: "Tour - Flight - Hotel",
    },
  ]

  // Tùy chỉnh màu nền cho các nút dựa vào giá trị đã chọn
  const getButtonStyle = (buttonValue: string) => ({
    borderColor: value === buttonValue ? '#FF5733' : '#cccccc',
    backgroundColor: value === buttonValue ? '#FF5733' : '#ffffff',
    color: value === buttonValue ? 'white' : 'black',
    borderWidth: 1,
    borderRadius: 5,
  });

  // Hàm để render các nút tùy chỉnh
  const renderButton = (buttonValue: string, label: string, icon: string) => (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(buttonValue)]}
      onPress={() => setValue(buttonValue)}
    >
      <View style={styles.iconButton}>
        <Text style={{ color: getButtonStyle(buttonValue).color }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );

  // Nội dung tương ứng với mỗi lựa chọn
  const renderContent = () => {
    switch (value) {
      case 'Popular':
        return (
          <View style={styles.cardContainer}>
            {cardData.length > 0 ? (
              cardData.map((card) => (
                <Card key={card.id} style={styles.card}>
                  <Card.Cover source={card.image} style={styles.cardImage} />
                  <Text style={styles.star}>
                    <Icon name="star" color="#FF9680" />
                    4.8
                  </Text>
                  <Card.Content>
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
                      <Text style={styles.city}>{card.city}</Text>
                      <Text style={styles.country}>
                        <Icon name="map-marker-outline" size={14} color="#FF9680" />
                        {card.country}
                      </Text>
                      <Text style={styles.tour}>{card.tour}</Text>
                    </View>
                  </Card.Content>
                </Card>
              ))
            ) : (
              <Text style={styles.contentText}>No cards available.</Text>
            )}
          </View>
        );
      case 'Lake':
        return <Text style={styles.contentText}>Nội dung hồ</Text>;
      case 'Beach':
        return <Text style={styles.contentText}>Nội dung bãi biển</Text>;
      case 'Mountain':
        return <Text style={styles.contentText}>Nội dung núi</Text>;
      default:
        return null;
    }
  };


  return (
    <>
      <ScrollView>
        <HeaderTabs />
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
              {renderButton('Popular', 'Popular', 'fire')}
              {renderButton('Lake', 'Lake', 'waves')}
              {renderButton('Beach', 'Beach', 'weather-sunset')}
              {renderButton('Mountain', 'Mountain', 'terrain')}
            </View>
            <View style={styles.contentContainer}>
              {renderContent()}
            </View>
            <View style={styles.iconContainer}>
              {[...Array(4)].map((_, index) => (
                <Icon
                  key={index}
                  name="circle"
                  size={10}
                  style={styles.icon}
                />
              ))}
            </View>
          </SafeAreaView>

          <View>
            <View style={styles.title}>
              <Text style={styles.text}>Tour hot</Text>
              <Icon name="fire" size={24} color="#FF9680" />
            </View>
            <View>
              <View style={styles.cardContainer}>
                {cardData.length > 0 ? (
                  cardData.map((card) => (
                    <Card key={card.id} style={styles.card}>
                      <Card.Cover source={card.image} style={styles.cardImage} />
                      <Text style={styles.star}>
                        <Icon name="star" color="#FF9680" />
                        4.8
                      </Text>
                      <Card.Content>
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
                          <Text style={styles.city}>{card.city}</Text>
                          <Text style={styles.country}>
                            <Icon name="map-marker-outline" size={14} color="#FF9680" />
                            {card.country}
                          </Text>
                          <Text style={styles.tour}>{card.tour}</Text>
                        </View>
                      </Card.Content>
                    </Card>
                  ))
                ) : (
                  <Text style={styles.contentText}>No cards available.</Text>
                )}
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    marginHorizontal: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  contentContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  },
  scrollViewContent: {
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  cardContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,

  },
  card: {
    alignItems: "center",
    width: 160,
  },
  cardImage: {
    height: 120,
    width: 140,
    display: "flex",
    paddingTop: 8,
  },
  iconButton: {
    flexDirection: 'row',          // Sắp xếp các phần tử theo hàng ngang
    alignItems: 'center',          // Căn giữa theo chiều dọc
    shadowColor: '#000',           // Màu đổ bóng
    shadowOpacity: 0.2,            // Độ mờ của đổ bóng
    shadowRadius: 2,               // Kích thước của đổ bóng
    elevation: 3,                  // Độ nổi cho Android
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  city: {
    paddingTop: 4,
    fontSize: 17,
    fontWeight: "bold",
  },
  country: {
    fontSize: 10,
    color: "gray",
  },
  tour: {
    fontSize: 10,
    color: "gray",
    paddingBottom: 4,
  },
  star: {
    position: "absolute",
    top: 15,
    left: 5,
    color: 'white'
  },
  heart: {
    backgroundColor: "rgba(135, 206, 250, 0.5)",
    borderColor: "white",
    borderRadius: 50,
    width: 20,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: 1,
    position: 'absolute',
    top: 5,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    flexDirection: 'row',          // Đặt các phần tử theo hàng ngang
    alignItems: 'center',          // Căn giữa theo chiều dọc
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,                // Khoảng cách giữa văn bản và biểu tượng
  },
});
