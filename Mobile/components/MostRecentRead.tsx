import { View, Text } from "react-native";
import { shadowGenerator } from "../utils/generate-shadow";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface MostRecentReadProps {
  brightness: string;
  temperature: string;
  humidity: string;
}

export default function MostRecentRead({
  brightness,
  temperature,
  humidity,
}: MostRecentReadProps) {
  return (
    <View
      style={shadowGenerator({ value: 7 })}
      className="h-28 mr-12 ml-12 bottom-14 rounded-lg bg-blue-200 flex-row justify-around shadow-black shadow-sm"
    >
      <View className="h-full flex flex-col justify-center items-center">
        <Icon name="thermometer" color={"#dd794a"} size={30} />
        <Text className="text-center">Temperatura</Text>
        <Text className="text-center leading-tight font-bold text-lg">
          {temperature + "°"}
        </Text>
      </View>
      <View className="h-full flex flex-col justify-center items-center">
        <Icon name="water" color={"#4ABADD"} size={30} />
        <Text className="text-center">Umidade</Text>
        <Text className="text-center leading-tight font-bold text-lg">
          {humidity + "%"}
        </Text>
      </View>
      <View className="h-full flex flex-col justify-center items-center">
        <Icon size={30} color={"#f2c415"} name="white-balance-sunny" />
        <Text className="text-center">Iluminação</Text>
        <Text className="text-center leading-tight font-bold text-lg">
          {brightness + "%"}
        </Text>
      </View>
    </View>
  );
}
