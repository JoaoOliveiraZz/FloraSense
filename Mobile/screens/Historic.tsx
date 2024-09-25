import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import WaitingData from "../components/WaitingData";
import { shadowGenerator } from "../utils/generate-shadow";

interface WeatherData {
  humidity: number;
  brightness: number;
  temperature: number;
  created_at: string;
  hour_created: string;
}

export default function Historic({ navigation }) {
  const [arrayPosition, setArrayPosition] = useState<number>(0);
  const [data, setData] = useState<Array<WeatherData>>([
    {
      brightness: 70,
      humidity: 80,
      temperature: 32,
      created_at: "25/09/2024",
      hour_created: "19:30",
    },
    {
      brightness: 65,
      humidity: 75,
      temperature: 30,
      created_at: "25/09/2024",
      hour_created: "09:15",
    },
    {
      brightness: 90,
      humidity: 85,
      temperature: 33,
      created_at: "25/09/2024",
      hour_created: "12:45",
    },
    {
      brightness: 55,
      humidity: 60,
      temperature: 28,
      created_at: "25/09/2024",
      hour_created: "08:20",
    },
    {
      brightness: 80,
      humidity: 70,
      temperature: 31,
      created_at: "25/09/2024",
      hour_created: "14:00",
    },
    {
      brightness: 75,
      humidity: 82,
      temperature: 34,
      created_at: "25/09/2024",
      hour_created: "18:10",
    },
  ]);
  const { openDrawer } = navigation;

  async function getData() {
    await api
      .get("/weather")
      .then((response) => {
        setData(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleChangeArrayPosition = (direction: "next" | "forward") => {
    direction === "next"
      ? setArrayPosition(arrayPosition + 1)
      : setArrayPosition(arrayPosition - 1);
  };
  if (!data.length) {
    return <WaitingData />;
  } else {
  }
  return (
    <View className="bg-blue-500 h-screen w-screen flex flex-col justify-center items-center pr-5 pl-5">
      <View
        style={shadowGenerator({ value: 7 })}
        className="bg-gray-100 w-full h-12 rounded-xl flex flex-row justify-around items-center mb-3"
      >
        <Text className="text-zin-800 font-bold text-base">
          Histórico de leituras
        </Text>
        <TouchableOpacity onPress={openDrawer}>
          <Icon name="menu" size={18} />
        </TouchableOpacity>
      </View>
      <View
        style={shadowGenerator({ value: 7 })}
        className="h-[80%] m-0 w-full bg-gray-100 rounded-xl flex flex-col"
      >
        <View className="w-full mt-3 flex-row justify-around items-center">
          <TouchableOpacity
            onPress={() => handleChangeArrayPosition("forward")}
            disabled={!arrayPosition}
          >
            <Icon name="arrow-left" size={16} />
          </TouchableOpacity>
          <View className="flex flex-row gap-3 items-center">
            <Text>{arrayPosition + 1}</Text>
            <Text className="text-base">de</Text>
            <Text className="text-base">{data.length}</Text>
          </View>
          <TouchableOpacity
            onPress={() => handleChangeArrayPosition("next")}
            disabled={arrayPosition === data.length - 1}
          >
            <Icon name="arrow-right" size={16} />
          </TouchableOpacity>
        </View>
        <View className="h-[90%] m-3 ">
          <View className=" flex flex-row justify-around items-center h-[8%]">
            <Text className="text-slate-800 text-lg font-semibold leading-tight">
              {data[arrayPosition].created_at}
            </Text>
            <Text className="text-slate-800 text-lg font-semibold leading-tight">
              {data[arrayPosition].hour_created}
            </Text>
          </View>
          <View className="h-[92%] flex flex-col justify-evenly items-start ml-10">
            <View className="flex flex-row items-center">
              <Icon size={45} color={"#dd794a"} name="thermometer" />
              <Text className="font-medium text-4xl leading-tight ml-5 text-slate-700">
                {data[arrayPosition].temperature}°
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <Icon size={45} color={"#4ABADD"} name="water" />
              <Text className="font-medium text-4xl leading-tight ml-5 text-slate-700">
                {data[arrayPosition].humidity}%
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <Icon size={45} color={"#f2c415"} name="white-balance-sunny" />
              <Text className="font-medium text-4xl leading-tight ml-5 text-slate-700">
                {data[arrayPosition].brightness}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
