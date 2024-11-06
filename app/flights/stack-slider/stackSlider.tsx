import React from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  { id: "1", source: require("@/assets/images/caray.png") },
  { id: "2", source: require("@/assets/images/quatar.png") },
  { id: "3", source: require("@/assets/images/conrad.png") },
];

const SimpleImageSlider = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width, // Mỗi ảnh sẽ chiếm toàn bộ chiều rộng màn hình
    height: 300, // Chiều cao của ảnh
    resizeMode: "cover", // Cách hiển thị ảnh
  },
});

export default SimpleImageSlider;
