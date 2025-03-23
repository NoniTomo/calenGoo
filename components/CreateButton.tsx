import { PlusIcon } from "@/assets/icons/plus";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  TouchableHighlight,
  useColorScheme,
  View,
} from "react-native";

export const CreateButton = () => {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];
  const stylesWithTheme = styles(colorTheme);
  const router = useRouter();

  return (
    <TouchableHighlight
      style={stylesWithTheme.button}
      onPress={() => {
        router.push("/(stack)/create");
      }}
    >
      <View style={{ transform: "scale(2)" }}>
        <PlusIcon color={colorTheme.background} />
      </View>
    </TouchableHighlight>
  );
};

const styles = (colorTheme: typeof Colors.dark | typeof Colors.light) =>
  StyleSheet.create({
    button: {
      position: "absolute",
      zIndex: 100,
      bottom: 10,
      right: 10,
      flex: 1,
      height: 60,
      width: 60,
      borderRadius: 15,
      backgroundColor: colorTheme.text,
      justifyContent: "center",
      alignItems: "center",
    },
  });
