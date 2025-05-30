import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Hero() {
  return (
    <SafeAreaView className="-mb-4">
      <ImageBackground source={require("../../assets/images/hero.png")}>
        <View className="bg-wite flex flex-row gap-2 items-center justify-center">
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 70, height: 70 }}
          />
          <Text className="text-white text-2xl py-4 font-semibold">E-Chat</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
