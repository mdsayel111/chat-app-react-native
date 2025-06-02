import Hero from "@/components/ui/Hero";
import { useColorScheme } from "@/hooks/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StatusBar } from "react-native";
import "react-native-reanimated";
import "../global.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Hero />
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#A267EE",
            headerShown: false,
            tabBarStyle: Platform.select({
              android: {
                height: 70,
                paddingBottom: 10,
                paddingTop: 10,
                backgroundColor: "#fff",
              },
              ios: {
                position: "absolute",
              },
              default: {},
            }),
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              title: "Messages",
              tabBarIcon: ({ color }) => (
                <AntDesign name="message1" size={25} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="friends"
            options={{
              headerShown: false,
              title: "Friends",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user-o" size={25} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="notifications"
            options={{
              headerShown: false,
              title: "Notifications",
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="login"
            options={{
              headerShown: false,
              href: null,
            }}
          />
          <Tabs.Screen
            name="sign_up"
            options={{
              headerShown: false,
              href: null,
            }}
          />
          <Tabs.Screen name="+not-found" options={{ href: null }} />
        </Tabs>
        <StatusBar backgroundColor={"black"} />
      </PersistGate>
    </Provider>
  );
}
