import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { ImageSLiderType } from "../data/SliderData";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  items: ImageSLiderType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};
const { width } = Dimensions.get("screen");
const Panigation = ({ items, paginationIndex, scrollX }: Props) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        const pgAnimationStyle = useAnimatedStyle(() => {
          const doWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [8, 20, 8],
            Extrapolation.CLAMP
          );

          return {
            width: doWidth,
          };
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              pgAnimationStyle,
              {
                backgroundColor: paginationIndex === index ? "#FF5733" : "#aaa",
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default Panigation;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "#aaa",
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 10,
  },
});
