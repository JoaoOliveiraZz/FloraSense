import { View, ActivityIndicator, Text } from "react-native";

export default function WaitingData() {
  return (
    <View className="h-screen w-screen flex-1 justify-center items-center gap-5">
      <ActivityIndicator size={"large"} />
      <Text className="text-lg leading-tight">Sincronizando dados</Text>
    </View>
  );
}
