import AddFriends from "@/components/friends/add_friends/add_friends";
import FriendsList from "@/components/friends/friends_list/friends_list";
import Tab from "@/components/friends/tab";
import React, { useState } from "react";
import { View } from "react-native";

export default function Friends() {
  const [currentTab, setCurrentTab] = useState("friends");
  return (
    <View className="flex-1 bg-white px-4">
      <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <View className="mt-4">
        {currentTab === "friends" ? <FriendsList /> : <AddFriends />}
      </View>
    </View>
  );
}
