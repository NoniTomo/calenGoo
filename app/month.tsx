import { CreateButton } from "@/components/CreateButton";
import { Colors } from "@/constants/Colors";
import { WEEK_DAY_NAMES } from "@/constants/Week";
import { useMonthPageViewModel } from "@/viewModel/useMonthPageViewModel";
import { ScrollView, Text, useColorScheme, View } from "react-native";

export default function MonthPage() {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];
  const { state, functions } = useMonthPageViewModel();

  return (
    <>
      <CreateButton />
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {WEEK_DAY_NAMES.map((day) => (
            <View
              style={{
                flex: 1,
                height: 20,
                borderWidth: 1,
                borderColor: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={day}
            >
              <Text>{day}</Text>
            </View>
          ))}
        </View>
        {state.month.map((week, weekIndex) => (
          <View
            key={weekIndex}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {week.map((day, dayIndex) => (
              <View
                key={dayIndex}
                style={{
                  flex: 1,
                  height: 130,
                  borderWidth: 1,
                  borderColor: "black",
                  alignItems: "center",
                  backgroundColor: day.isCurrentMonth ? "#c1c1c110" : "#dedede",
                }}
              >
                <Text style={{ color: colorTheme.text }}>{day.day}</Text>

                {/* Список событий на этот день */}
                {day.isCurrentMonth === true &&
                  state.eventsByDay[day.day]?.map((event, index) => (
                    <View
                      key={index}
                      style={{
                        backgroundColor: "lightblue",
                        padding: 2,
                        marginTop: 2,
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
