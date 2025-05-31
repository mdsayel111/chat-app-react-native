import Notification from "@/components/notifications/notification";
import React from "react";
import { View } from "react-native";

export default function Notifications() {
  return (
    <View className="flex-1 bg-white px-4">
      <Notification />
    </View>
  );
}
