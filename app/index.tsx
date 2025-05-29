import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <View className="bg-blue-500">
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
