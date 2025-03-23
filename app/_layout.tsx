import { DateProviderModel } from "@/model/DateModel";
import { EventProviderModel } from "@/model/EventModel";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { HeaderRight } from "@/components/HeaderRight";
import { CustomDrawerContent } from "@/components/CustomDrawerContent";
import { useDayPageViewModel } from "@/viewModel/useDayPageViewModel";
import { useMonthPageViewModel } from "@/viewModel/useMonthPageViewModel";

export default function RootLayout() {
  return (
    <DateProviderModel>
      <EventProviderModel>
        <DrawerLayout />
      </EventProviderModel>
    </DateProviderModel>
  );
}

export const DrawerLayout = () => {
  const day = useDayPageViewModel();
  const month = useMonthPageViewModel();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ sceneStyle: { backgroundColor: "#fcfaf2" } }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "День",
            title: `${month.state.monthName || ""}, ${day.state.day || ""}`,
            headerRight: () => <HeaderRight />,
          }}
        />
        <Drawer.Screen
          name="week"
          options={{
            drawerLabel: "Неделя",
            title: month.state.monthName || "",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Drawer.Screen
          name="month"
          options={{
            drawerLabel: "Месяц",
            title: month.state.monthName || "",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Drawer.Screen
          name="(stack)"
          options={{
            title: "",
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};
