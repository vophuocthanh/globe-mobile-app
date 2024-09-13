import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ImageSLiderType } from "../data/SliderData";

type Props = {
  item: ImageSLiderType;
  index: number;
  scrollX: SharedValue<number>;
};
const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index, scrollX }: Props) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.container, rnAnimatedStyle]}>
      <Image
        source={item.image}
        style={{ width: 270, height: 200, borderRadius: 20 }}
      />
      {/* <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        style={[styles.background, { height: 200, width: 270 }]}
      /> */}
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Animated.View>
  );
};
export default SliderItem;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: width,
  },
  background: {
    // position: "absolute",
    // height:200,
    // width:300,
  },
  text: {
    position: "absolute",
    bottom: 50,
    left: 50,
  },
  title: {
    color: "white",
    fontSize: 15,
  },
  description: {
    color: "white",
    fontSize: 7,
  },
});
