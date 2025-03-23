import { NotificationMinus } from "@/assets/icons/notificationMinus";
import { NotificationPlus } from "@/assets/icons/notificationPlus";
import { NotificationRepeatMinus } from "@/assets/icons/notificationRepeatMinus";
import { NotificationRepeatPlus } from "@/assets/icons/notificationRepeatPlus";
import { Colors } from "@/constants/Colors";
import {
  Text,
  View,
  useColorScheme,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

export default function NotificationPage() {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: colorTheme.background,
        gap: 20,
      }}
    >
      <TouchableHighlight>
        <View style={styles.button}>
          <NotificationMinus />
          <Text>За 10 минут</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.button}>
          <NotificationMinus />
          <Text>За 30 минут</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.button}>
          <NotificationPlus />
          <Text>Добавить уведомления</Text>
        </View>
      </TouchableHighlight>
      <View style={{ borderWidth: 1, borderColor: "black" }}></View>
      <TouchableHighlight>
        <View style={styles.button}>
          <NotificationRepeatMinus />
          <Text>Каждые 5 минут</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.button}>
          <NotificationRepeatPlus />
          <Text>Повторение уведомлений</Text>
        </View>
      </TouchableHighlight>
      <View style={{ borderWidth: 1, borderColor: "black" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 15,
    marginInline: 20,
    marginBlock: 5,
  },
});
