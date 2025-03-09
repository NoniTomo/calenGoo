import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { TouchableHighlight, View } from "react-native";
import { NotificationsIcon, SearchIcon } from "@/assets/icons";
import { HeaderRight } from "@/components/HeaderRight";
import { CustomDrawerContent } from "@/components/CustomDrawerContent";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "День",
            title: "Февраль, 19",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Drawer.Screen
          name="week" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Неделя",
            title: "Февраль",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Drawer.Screen
          name="month" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Месяц",
            title: "Февраль",
            headerRight: () => <HeaderRight />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
