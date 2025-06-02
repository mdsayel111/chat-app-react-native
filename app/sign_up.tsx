import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function SignUp() {
  return (
    <View>
      <View>
        <Link href="/login">Login</Link>
        <Text>Register</Text>
      </View>
    </View>
  );
}
