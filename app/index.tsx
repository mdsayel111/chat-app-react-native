import React from "react";
import { Image, Text, View } from "react-native";

export default function Home() {
  return (
    // <SafeAreaView className="px-4 flex-1 bg-white">
    <View className="px-4 flex-1 bg-white">
      <View className="mt-4">
        <View className="flex flex-row gap-10 items-center ">
          <Image
            source={require("../assets/images/new-logo-removebg-preview.png")}
            style={{ width: 50, height: 50 }}
            className="w-fit"
          />
          <View className="flex-grow gap-2">
            <Text className="text-nautral-900 font-semibold">
              Hi, this is a new chat app
            </Text>
            <Text className="text-gray-400">message</Text>
          </View>
          <View className="flex gap-2 items-end w-fit">
            <Text className="text-[#B3B4C4]">10:00</Text>
            <Text className="bg-[#40C4FF] px-2 py-0.5 rounded-lg text-white">
              5
            </Text>
          </View>
        </View>
      </View>
    </View>

    // </SafeAreaView>
  );
}
