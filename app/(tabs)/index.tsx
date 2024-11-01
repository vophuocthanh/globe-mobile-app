// import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ScrollView,  } from "react-native";
import Header from "../header";
import Slider from "../Carousel/Slider";
import { ImageSLider } from "../data/SliderData";
import Option from "../optionOfYou/index";

import Hotel from "../pages/home/hotel";
import Flight from "../pages/home/flight";



export default function Page() {
  return (
    <ScrollView>
      <StatusBar style="light" />
      <View>
        <Header openDrawer={() => console.log("Drawer opened")} />
      </View>
      <View className="flex flex-row items-center justify-center">
        <Slider itemList={ImageSLider} />
      </View>
      <View>
        <Option />
      </View>
      <View>
        <Flight />
      </View>
      <View>
        <Hotel />
      </View>
      {/* <Link href="/register" asChild>
        <Button title="Register" />
      </Link> */}
      {/* <Link href="/profile" asChild>
        <Button title="Open tabs one" />
      </Link> */}
    </ScrollView>
  );
}
