import { View, StyleSheet, FlatList, ViewToken } from "react-native";
import React, { useRef, useState } from "react";

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import SliderItem from "./SliderItem";
import { ImageSLiderType } from "../data/SliderData";
import Panigation from "./Panigation";

type Props = {
  itemList: ImageSLiderType[];
};
export default function Slider({ itemList }: Props) {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginativeIndex] = useState(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginativeIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);
  return (
    <View>
      <View style={styles.container}>
        <Animated.FlatList
          data={itemList}
          renderItem={({ item, index }) => (
            <SliderItem item={item} index={index} scrollX={scrollX} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
        />
      </View>
      <Panigation
        items={itemList}
        scrollX={scrollX}
        paginationIndex={paginationIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
