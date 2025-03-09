import { Colors } from "@/constants/Colors";
import { MONTH } from "@/constants/Month";
import { ScrollView, Text, useColorScheme, View } from "react-native";

export default function WeekPage() {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];

  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: colorTheme.background,
      }}
      contentContainerStyle={{ flexDirection: "column" }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {[null, ...MONTH[3]].map((day) => (
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
              </View>
            ))}
        </View>
      ))}
    </ScrollView>
  );
}
