import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import "react-native-reanimated";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen name="(safe-area)/index" options={{ headerShown: false }} />
        <Tabs.Screen name="+not-found" options={{ tabBarButton: () => null }} />
      </Tabs>
  );
}
