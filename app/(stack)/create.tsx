import { ClockIcon } from "@/assets/icons/clock";
import { Colors } from "@/constants/Colors";
import { useCreateViewModel } from "@/viewModel/useCreateViewModel";
import {
  View,
  useColorScheme,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import { Controller } from "react-hook-form";
import { TimezoneIcon } from "@/assets/icons";
import { DateTimeInput } from "@/components/DateTimeInput";

export default function CreatePage() {
  const colorScheme = useColorScheme();
  const themeStyles = styles(Colors[colorScheme ?? "light"]);
  const { state, functions } = useCreateViewModel();

  return (
    <ScrollView>
      <View style={themeStyles.rowBlock}>
        <View style={themeStyles.name}>
          <Controller
            control={state.form.control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Укажите название"
                value={value}
                onChangeText={onChange}
                style={themeStyles.inputName}
              />
            )}
            name="name"
            rules={{ required: "Это поле обязательное" }}
          />
          {state.form.formState.errors.name?.message && (
            <Text style={themeStyles.errorText}>
              {state.form.formState.errors.name?.message}
            </Text>
          )}
        </View>
      </View>
      <View style={{ borderWidth: 1, borderColor: "black" }}></View>
      <View style={themeStyles.rowBlock}>
        <ClockIcon color={Colors[colorScheme ?? "light"].text} />
        <View style={themeStyles.row}>
          <View style={themeStyles.column}>
            <DateTimeInput
              defaultDate={state.form.watch("startDate")}
              control={state.form.control}
              name="startDate"
              label="Start Date"
            />
            <DateTimeInput
              defaultDate={state.form.watch("finishDate")}
              control={state.form.control}
              name="finishDate"
              label="Finish Date"
            />
          </View>
        </View>
      </View>
      <View style={themeStyles.rowBlock}>
        <TimezoneIcon color={Colors[colorScheme ?? "light"].text} />
        <View style={themeStyles.row}>
          <Text style={{ fontFamily: "InterRegular18", fontSize: 18 }}>
            {state.timeZone}
          </Text>
        </View>
      </View>
      <View style={{ borderWidth: 1, borderColor: "black" }}></View>
      <View style={themeStyles.rowBlock}>
        <Controller
          control={state.form.control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              multiline
              style={themeStyles.textDescription}
              placeholder={"Добавить описание:"}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="description"
        />
      </View>
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={state.form.handleSubmit(functions.onSubmit)}
        style={themeStyles.button}
      >
        <Text style={themeStyles.buttonText}>Сохранить</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = (colors: typeof Colors.dark | typeof Colors.light) =>
  StyleSheet.create({
    column: {
      flexDirection: "column",
      width: "100%",
      gap: 10,
    },
    row: {
      flexDirection: "row",
      paddingInline: 20,
    },
    rowBlock: {
      flexDirection: "row",
      padding: 20,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      marginInline: 20,
      padding: 10,
      borderRadius: 15,
      backgroundColor: "#faf4dc",
    },
    buttonText: {
      fontFamily: "InterRegular18",
      fontSize: 16,
      color: colors.text,
    },
    inputName: {
      fontSize: 30,
      paddingTop: 10,
      padding: 10,
      width: "100%",
    },
    textDescription: {
      fontFamily: "InterRegular18",
      fontSize: 18,
      height: 100,
      width: "100%",
    },
    errorText: {
      color: "#f64c4c",
      fontSize: 14,
      marginTop: 4,
    },
    name: {
      flexDirection: "column",
      gap: 5,
    },
  });
