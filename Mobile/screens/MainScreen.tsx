import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

//Utils
import { shadowGenerator } from "../utils/generate-shadow";

//API
import { api } from "../lib/axios";
import { dateFormater } from "../utils/dateFormater";
import VariationCard from "../components/VariationsCard";
import NavigationBar from "../components/NavigationBar";
import MostRecentRead from "../components/MostRecentRead";

interface WeatherData {
  humidity: number;
  brightness: number;
  temperature: number;
  created_at: string;
  hour_created: string;
}

// Images
//const plantIcon = require("../../assets/plantIcon.png");

interface WeatherData {
  humidity: number;
  brightness: number;
  temperature: number;
  created_at: string;
  hour_created: string;
}

export default function MainScreen({ navigation }) {
  const [data, setData] = useState<Array<WeatherData>>([
    {
      humidity: 1,
      temperature: 1,
      brightness: 1,
      created_at: "12",
      hour_created: "12",
    },
  ]);
  const [todayData, setTodayData] = useState<Array<WeatherData>>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { openDrawer } = navigation;

  console.log(data);

  let pollingInterval;

  const handleRefreshAplication = () => {
    clearInterval(pollingInterval);
    getData();
  };

  function filterTodayData(data: Array<WeatherData>) {
    //const created_at = String(dateFormater(new Date(), "date"));
    const created_at = data[data.length - 1].created_at;
    setTodayData(
      data.filter((weather) => weather.created_at === created_at).reverse()
    );
  }

  async function getData() {
    await api
      .get("/weather")
      .then((response) => {
        setData(response.data);
        filterTodayData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    pollingInterval = setTimeout(() => {
      getData();
      return;
    }, 1000);
  }

  useEffect(() => {
    getData();

    return () => clearInterval(pollingInterval);
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
      <ScrollView>
        <View className="h-screen flex-1">
          <StatusBar />
          <NavigationBar
            created_at={String(
              data[data.length - 1].created_at +
                " - " +
                data[data.length - 1].hour_created
            )}
            refreshApplication={handleRefreshAplication}
            openMenu={openDrawer}
          />
          {/* Second View */}
          <View className="bg-gray-100 h-64  relative">
            <MostRecentRead
              temperature={String(data[data.length - 1].temperature)}
              humidity={String(data[data.length - 1].humidity)}
              brightness={String(data[data.length - 1].brightness)}
            />
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
                    <VariationCard
                      key={index}
                      brightness={data.brightness}
                      temperature={data.temperature}
                      humidity={data.humidity}
                      hour_created={data.hour_created}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
