import { NotificationsIcon, SearchIcon } from "@/assets/icons";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export const HeaderRight = () => {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 30,
        padding: 10,
        alignItems: "center",
        height: "100%",
      }}
    >
      <TouchableOpacity
        onPress={() => router.navigate("/notifications")}
        activeOpacity={0.7}
      >
        <NotificationsIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Поиск")} activeOpacity={0.7}>
        <SearchIcon />
      </TouchableOpacity>
    </View>
  );
};
