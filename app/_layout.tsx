import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { HeaderRight } from "@/components/HeaderRight";
import { CustomDrawerContent } from "@/components/CustomDrawerContent";
import { Stack } from "expo-router";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "День",
            title: "Февраль, 19",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Drawer.Screen
          name="week"
          options={{
            drawerLabel: "Неделя",
            title: "Февраль",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Drawer.Screen
          name="month"
          options={{
            drawerLabel: "Месяц",
            title: "Февраль",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Drawer.Screen
          name="notifications"
          options={{
            title: "Уведомления",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
