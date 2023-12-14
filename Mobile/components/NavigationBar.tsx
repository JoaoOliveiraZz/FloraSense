import { View, Text, TouchableOpacity, Image } from "react-native";
import { shadowGenerator } from "../utils/generate-shadow";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface NavigationBarProps {
  created_at: string;
  refreshApplication: () => void;
  openMenu: () => void;
}

export default function NavigationBar({
  created_at,
  refreshApplication,
  openMenu,
}: NavigationBarProps) {
  return (
    <View className="bg-blue-500 h-[70%] relative">
      <View
        style={shadowGenerator({ value: 6 })}
        className="mt-10 top-[5%] flex flex-row justify-between items-center bg-blue-200 h-[7%] m-3 rounded-xl"
      >
        <View className="flex flex-row gap-3 ml-3">
          <Text>{created_at}</Text>
        </View>
        <View className="flex flex-row gap-4 mr-3">
          <TouchableOpacity onPress={refreshApplication}>
            <Icon name="refresh" size={18} className="" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openMenu}>
            <Icon name="menu" size={18} className="" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1 flex-col items-center justify-center gap-2">
        <Image
          source={require("../assets/3d_plant.png")}
          resizeMode="contain"
          className="h-64 w-64  rounded-full"
        />
      </View>
    </View>
  );
}
