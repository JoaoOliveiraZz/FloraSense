import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import MainScreen from "../../screens/MainScreen";
import Historic from "../../screens/Historic";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início",
        }}
      />
      <Drawer.Screen
        name="Historic"
        component={Historic}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="clock" color={color} size={size} />
          ),
          drawerLabel: "Histórico",
        }}
      />
    </Drawer.Navigator>
  );
}
