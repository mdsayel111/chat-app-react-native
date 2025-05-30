import { View, Text, Button, Pressable } from "react-native";
import React, { useState } from "react";

export default function Friends() {
  const [currentTab, setCurrentTab] = useState("friends");
  return (
    <View className="flex-1 bg-white px-4">
      <View className="flex flex-row gap-6 items-center justify-center w-[80%] mx-auto mt-4">
        <Pressable onPress={() => setCurrentTab("friends")} className="w-1/2">
          <Text
            className={`${
              currentTab === "friends"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }  py-2 text-center rounded-lg`}
          >
            Friends
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setCurrentTab("add-friends")}
          className="w-1/2"
        >
          <Text
            className={`${
              currentTab === "add-friends"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }  py-2 text-center rounded-lg`}
          >
            Add Friends
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
