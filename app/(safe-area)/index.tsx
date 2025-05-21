import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation<any>();

  return (
      <View>
        {/* <Button title="Go to Home" onPress={() => navigation.navigate("index")} /> */}
        <Link href="/[username]">
          Go
        </Link>
      </View>
  );
}
