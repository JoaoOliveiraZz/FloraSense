import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { shadowGenerator } from "./utils/generate-shadow";

//API
import { api } from "./lib/axios";
import { dateFormater } from "./utils/dateFormater";

// Images
const plantIcon = require("./assets/plantIcon.png");

interface WeatherData {
  humidity: number;
  brightness: number;
  temperature: number;
  created_at: string;
  hour_created: string;
}

export default function App() {
  const [data, setData] = useState<Array<WeatherData>>([]);
  const [todayData, setTodayData] = useState<Array<WeatherData>>([]);

  console.log(data);
  console.log(todayData);

  function filterTodayData(data: Array<WeatherData>) {
    // const created_at = String(dateFormater(new Date(), "date"));
    const created_at = "29/11/2023";
    setTodayData(data.filter((weather) => weather.created_at === created_at));
  }

  async function getData() {
    console.log("Loading");
    const response = await api.get("/weather");

    setTimeout(() => {
      setData(response.data);
      filterTodayData(response.data);
    }, 5000);
  }

  useEffect(() => {
    console.log("Fetching weather");
    getData();
  }, []);

  if (!data.length) {
    return (
      <View className="h-screen w-screen flex-1 justify-center items-center gap-5">
        <ActivityIndicator size={"large"} />
        <Text className="text-lg leading-tight">Sincronizando dados</Text>
      </View>
    );
  } else {
    return (
      <View className="h-screen flex-1">
        <StatusBar />
        <View className="bg-blue-500 h-[70%] relative">
          <View
            style={shadowGenerator({ value: 6 })}
            className="mt-10 top-5 flex flex-row justify-between items-center bg-blue-200 h-[7%] m-3 rounded-xl"
          >
            <View className="flex flex-row gap-3 ml-3">
              <Text>{"10/10/2023 23:00"}</Text>
            </View>
            <View className="flex flex-row gap-4 mr-3">
              <TouchableOpacity onPress={() => getData()}>
                <Icon name="refresh" size={18} className="" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="history" size={18} className="" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-1 flex-col items-center justify-center gap-2">
            <Image
              source={require("./assets/3d_plant.png")}
              resizeMode="contain"
              className="h-64 w-64  rounded-full"
            />
            <Text className="text-6xl left-3 text-center font-bold leading-tight text-white">
              {data[data.length - 1].temperature + "°"}
            </Text>
          </View>
        </View>

        {/* Second View */}
        <View className="bg-gray-100 h-64  relative">
          <View
            style={shadowGenerator({ value: 7 })}
            className="h-28 mr-12 ml-12 bottom-14 rounded-lg bg-blue-200 flex-row justify-around shadow-black shadow-sm"
          >
            <View className="h-full flex flex-col justify-center items-center">
              <Icon name="water" color={"#4ABADD"} size={30} />
              <Text className="text-center">Umidade</Text>
              <Text className="text-center leading-tight font-bold text-lg">
                {data[data.length - 1].humidity + "%"}
              </Text>
            </View>
            <View className="h-full flex flex-col justify-center items-center">
              <Icon size={30} color={"#f2c415"} name="white-balance-sunny" />
              <Text className="text-center">Iluminação</Text>
              <Text className="text-center leading-tight font-bold text-lg">
                {data[data.length - 1].brightness + "%"}
              </Text>
            </View>
          </View>
          <Text className="font-bold text-lg bottom-10 left-4">
            Hoje - {todayData.length} variações
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            className="bottom-10 mr-3"
          >
            <View className="h-full flex flex-row items-center gap-3">
              {todayData.map((data, index) => {
                return (
                  <View
                    className="w-28 h-28 rounded-3xl flex flex-row items-center p-2 bg-blue-200"
                    style={shadowGenerator({ value: 2 })}
                    key={index}
                  >
                    <View>
                      <Icon size={30} name="thermometer" />
                      <Icon size={30} name="water" />
                      <Icon
                        size={30}
                        name="white-balance-sunny"
                        color={"#f2c415"}
                      />
                    </View>
                    <View className="flex gap-3 ">
                      <Text className="font-bold text-md leading-tight text-zinc-900">
                        {data.temperature} °C
                      </Text>
                      <Text className="font-bold text-md leading-tight text-zinc-900">
                        {data.humidity}%
                      </Text>
                      <Text className="font-bold text-md leading-tight text-zinc-900">
                        {data.brightness}%
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
