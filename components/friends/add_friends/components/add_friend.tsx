import { View, Text, Image } from "react-native";
import React from "react";
import imgSrc from "@/assets/images/new-icon.png";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function AddFriend() {
  return (
    <View className="flex flex-row gap-10 items-center mt-4">
      <Image
        source={imgSrc}
        style={{ width: 50, height: 50 }}
        className="w-fit"
      />
      <View className="flex-grow gap-2">
        <Text className="text-nautral-900 font-semibold">
          Hi, this is a new chat app
        </Text>
        {/* <Text className="text-gray-400">message</Text> */}
      </View>
      <View className="flex gap-2 items-end w-fit">
        <AntDesign name="adduser" size={24} color="#20b3f5" />
      </View>
    </View>
  );
}
