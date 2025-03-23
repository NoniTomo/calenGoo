import React, { useState } from "react";
import {
  View,
  Button,
  TouchableHighlight,
  Text,
  StyleSheet,
} from "react-native";
import { Control, Controller } from "react-hook-form";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { ClockIcon } from "@/assets/icons/clock";
import { Colors } from "@/constants/Colors";

interface DateTimeInputProps {
  control: Control<any>;
  name: string;
  label: string;
  defaultDate?: number;
}

export const DateTimeInput = ({
  control,
  name,
  label,
  defaultDate,
}: DateTimeInputProps) => {
  const [date, setDate] = useState(
    defaultDate ? new Date(defaultDate) : new Date()
  );
  const [time, setTime] = useState(
    defaultDate ? new Date(defaultDate) : new Date()
  );

  const showMode = (
    currentMode: "date" | "time",
    setFunction: (selectedValue: Date) => void
  ) => {
    DateTimePickerAndroid.open({
      value: currentMode === "date" ? date : time,
      onChange: (event, date?: Date) => {
        if (date) {
          setFunction(date);
        }
      },
      mode: currentMode,
      is24Hour: true,
    });
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      <Controller
        control={control}
        name={`${name}`}
        rules={{ required: "Это поле обязательное" }}
        render={({ field: { onChange } }) => (
          <TouchableHighlight
            onPress={() =>
              showMode("date", (val) => {
                setDate(val);
                onChange(val.getTime());
              })
            }
            style={styles.button}
          >
            <Text style={styles.text}>{date.toLocaleDateString()}</Text>
          </TouchableHighlight>
        )}
      />
      <Controller
        control={control}
        name={`${name}`}
        rules={{ required: "Это поле обязательное" }}
        render={({ field: { onChange } }) => (
          <TouchableHighlight
            onPress={() =>
              showMode("time", (val) => {
                setTime(val);
                onChange(val.getTime());
              })
            }
            style={styles.button}
          >
            <Text style={styles.text}>
              {time
                .toLocaleTimeString()
                .split(":")
                .slice(0, time.toLocaleTimeString().split(":").length - 1)
                .join(":")}
            </Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "InterRegular18",
    fontSize: 20,
    paddingInline: 10,
    paddingBlock: 5,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#faf4dc",
    borderRadius: 10,
  },
});
