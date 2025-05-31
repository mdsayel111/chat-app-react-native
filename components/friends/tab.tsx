import { View, Text, Pressable } from "react-native";
import React from "react";

export default function Tab({ currentTab, setCurrentTab }: { currentTab: string; setCurrentTab: (tab: string) => void }) {
  return (
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
      <Pressable onPress={() => setCurrentTab("add-friends")} className="w-1/2">
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
  );
}
