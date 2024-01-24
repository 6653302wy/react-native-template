import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackList, TabList } from "./routerList";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    // screenOptions={() => ({ tabBarActiveTintColor: '#1296db', tabBarInactiveTintColor: '#333333' })}
    <Tab.Navigator>
      {TabList?.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            title: route.title,
            tabBarLabel: route.title,
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? route.selectIcon : route.icon}
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Stacks = () => {
  const defaultOptions = {
    headerBackTitleVisible: true,
  };
  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false, headerTitle: "" }}
      />
      {StackList?.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{ ...defaultOptions, ...route.options }}
        />
      ))}
    </Stack.Navigator>
  );
};

export const Routers = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};
