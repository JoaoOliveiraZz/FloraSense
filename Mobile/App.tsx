import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
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
import Routes from "./src/routes";

export default function App() {
  return <Routes />;
}
