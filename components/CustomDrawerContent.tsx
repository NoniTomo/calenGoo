import React from "react";
import { View, Text } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MeetingOrganizerIcon } from "@/assets/icons";

export function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Meeting Organizer
        </Text>
        <MeetingOrganizerIcon />
      </View>

      <DrawerItemList {...props} />

      <View
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      ></View>
    </DrawerContentScrollView>
  );
}
