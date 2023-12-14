import { View, Text } from "react-native";
import { shadowGenerator } from "../utils/generate-shadow";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useState } from "react";

interface VariationCardProps {
  humidity: number;
  temperature: number;
  brightness: number;
  hour_created: string;
}

export default function VariationCard({
  humidity,
  temperature,
  brightness,
  hour_created,
}: VariationCardProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleChangeCard = (event: HTMLElement) => {
    console.log("Event");
  };

  return (
    <TouchableOpacity
      onPress={() => setIsVisible(!isVisible)}
      className="flex flex-row items-center"
      activeOpacity={1}
    >
      <View
        className={
          isVisible
            ? "hidden"
            : "flex flex-col items-center justify-center w-28 h-28 m-2 top-1 rounded-3xl p-2 bg-blue-200 "
        }
        style={shadowGenerator({ value: 2 })}
      >
        <Text className="text-slate-800 font-bold text-lg">{hour_created}</Text>
        <View className="flex-row gap-1 items-center mt-1">
          <Icon size={25} color={"#dd794a"} name="thermometer" />
          <Icon size={25} color={"#4ABADD"} name="water" />
          <Icon size={25} color={"#f2c415"} name="white-balance-sunny" />
        </View>
      </View>
      <View
        className={
          isVisible
            ? "flex flex-row items-center w-28 h-28 m-2 top-1 rounded-3xl p-2 bg-blue-200 "
            : "hidden"
        }
        style={shadowGenerator({ value: 2 })}
      >
        <View>
          <Icon size={30} color={"#dd794a"} name="thermometer" />
          <Icon size={30} color={"#4ABADD"} name="water" />
          <Icon size={30} color={"#f2c415"} name="white-balance-sunny" />
        </View>
        <View className="flex gap-3 ">
          <Text className="font-bold text-md leading-tight text-zinc-900">
            {temperature} °C
          </Text>
          <Text className="font-bold text-md leading-tight text-zinc-900">
            {humidity}%
          </Text>
          <Text className="font-bold text-md leading-tight text-zinc-900">
            {brightness}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
