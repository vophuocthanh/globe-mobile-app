import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  House,
  CalendarCheck2,
  MapPinPlusInside,
  User,
  Heart,
  Binoculars,
  BedDouble,
  Plane,
} from "lucide-react-native";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const icon: { [key: string]: (props: any) => JSX.Element } = {
    home: (props: any) => <House name="home" size={20} {...props} />,
    tour: (props: any) => <Binoculars name="tour" size={20} {...props} />,
    add: (props: any) => <MapPinPlusInside name="add" size={20} {...props} />,
    hotel: (props: any) => <BedDouble name="hotel" size={20} {...props} />,
    flight: (props: any) => <Plane name="flight" size={20} {...props} />,
    profile: (props: any) => <User name="profile" size={20} {...props} />,
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const IconComponent =
          icon[route.name] ||
          (() => <House size={20} color={isFocused ? "#FF0000" : "black"} />);

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            <IconComponent color={isFocused ? "#FF0000" : "black"} />
            {/* <Text style={{ color: isFocused ? "#FF0000" : "#222" }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#A1B1C3",
    marginHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 15,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
