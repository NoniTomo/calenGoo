import { CreateButton } from "@/components/CreateButton";
import { Colors } from "@/constants/Colors";
import { WEEK_DAY_NAMES } from "@/constants/Week";
import { useWeekPageViewModel } from "@/viewModel/useWeekPageViewModel";
import { ScrollView, Text, useColorScheme, View } from "react-native";

export default function WeekPage() {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];
  const { state } = useWeekPageViewModel();

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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[null, ...WEEK_DAY_NAMES].map((day) => (
            <View
              style={{
                flex: 1,
                height: 20,
                borderWidth: 1,
                borderColor: !day ? "transparent" : colorTheme.secondary,
                alignItems: "center",
                justifyContent: "center",
              }}
              key={day}
            >
              <Text>{day}</Text>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[null, ...state.week].map((day) => (
            <View
              key={day?.day}
              style={{
                flex: 1,
                height: 40,
                borderWidth: 1,
                borderColor: !day ? "transparent" : colorTheme.secondary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: colorTheme.text }}>{day?.day}</Text>
            </View>
          ))}
        </View>

        {Array.from({ length: 24 }, (_, hour) => (
          <View
            key={hour}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {Array(8)
              .fill("")
              .map((_, index) => (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    height: 80,
                    borderWidth: 1,
                    borderColor:
                      index === 0 ? "transparent" : colorTheme.secondary,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 && hour !== 0 && (
                    <Text style={{ color: colorTheme.text, top: -40 }}>
                      {hour.toString().padStart(2, "0")}:00
                    </Text>
                  )}

                  {index > 0 &&
                    state.eventsByDayAndHour[state.week[index - 1]?.day]?.[
                      hour
                    ]?.map((event, eventIndex) => (
                      <View
                        key={eventIndex}
                        style={{
                          backgroundColor: "lightblue",
                          padding: 2,
                          margin: 2,
                          borderRadius: 5,
                        }}
                      >
                        <Text style={{ fontSize: 10 }}>{event.name}</Text>
                      </View>
                    ))}
                </View>
              ))}
          </View>
        ))}
      </ScrollView>
    </>
  );
}
