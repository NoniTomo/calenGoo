import { CreateButton } from "@/components/CreateButton";
import { Colors } from "@/constants/Colors";
import { useDayPageViewModel } from "@/viewModel/useDayPageViewModel";
import { ScrollView, Text, useColorScheme, View } from "react-native";

export default function DayPage() {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];
  const { state, functions } = useDayPageViewModel();
  return (
    <>
      <CreateButton />
      <ScrollView
        style={{
          width: "100%",
          backgroundColor: colorTheme.background,
        }}
        contentContainerStyle={{ flexDirection: "column" }}
      >
        {Array.from({ length: 24 }, (_, hour) => (
          <View
            key={hour}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                width: 50,
                height: 80,
                borderWidth: 1,
                borderColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {hour !== 0 && (
                <Text style={{ color: colorTheme.text, top: -40 }}>
                  {hour.toString().padStart(2, "0")}:00
                </Text>
              )}
            </View>
            <View
              style={{
                flex: 1,
                height: 80,
                borderWidth: 1,
                borderColor: colorTheme.secondary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {state.eventsByHour[hour]?.map((event, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: "lightblue",
                    padding: 5,
                    margin: 2,
                    borderRadius: 5,
                    width: "90%",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "black" }}>
                    {event.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
