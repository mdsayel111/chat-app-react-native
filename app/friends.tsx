import { View, Text, Button, Pressable } from "react-native";
import React, { useState } from "react";

export default function Friends() {
  const [currentTab, setCurrentTab] = useState("friends");
  return (
    <View className="flex-1 bg-white">
      <View className="flex flex-row gap-6 items-center justify-center">
        <Pressable onPress={() => alert("Pressed!")}>
          <Text className="bg-blue-500 text-white text-2xl py-1 font-semibold">
            Friends
          </Text>
        </Pressable>
        <Pressable onPress={() => alert("Pressed!")}>
          <Text className="bg-blue-500 text-white text-2xl py-1 font-semibold">
            Add Friends
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
