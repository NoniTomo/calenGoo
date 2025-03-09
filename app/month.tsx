import { Colors } from "@/constants/Colors";
import { MONTH } from "@/constants/Month";
import { Text, useColorScheme, View } from "react-native";

const weekDayNames = ["П", "В", "С", "Ч", "П", "С", "В"];

export default function MonthPage() {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];

  return (
    <View style={{ width: "100%" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {weekDayNames.map((day) => (
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
      {MONTH.map((week, weekIndex) => (
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
                backgroundColor: day.isCurrentMonth
                  ? colorTheme.background
                  : "#c1c1c110",
              }}
            >
              <Text style={{ color: colorTheme.text }}>{day.day}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
