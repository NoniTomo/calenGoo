import { NotificationsIcon, SearchIcon } from "@/assets/icons";
import { TouchableOpacity, View } from "react-native";

export const HeaderRight = () => (
  <View
    style={{
      flexDirection: "row",
      gap: 30,
      padding: 10,
      alignItems: "center",
      height: "100%",
    }}
  >
    <TouchableOpacity onPress={() => alert("Уведомления")} activeOpacity={0.7}>
      <NotificationsIcon />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => alert("Поиск")} activeOpacity={0.7}>
      <SearchIcon />
    </TouchableOpacity>
  </View>
);
