import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackList, TabList } from './routerList';
import { Image, Text, TouchableOpacity, View, Button } from 'react-native';
import * as Haptics from 'expo-haptics';

const BottomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-evenly',
                backgroundColor: '#fff',
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const tabConf = TabList.find((item) => item.name === route.name);
                console.log('route info: ', tabConf);

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: -20,
                        }}
                    >
                        <Image
                            source={isFocused ? tabConf?.selectIcon : tabConf?.icon}
                            style={{ width: 25, height: 25 }}
                        />
                        <Text style={{ color: isFocused ? '#1296db' : '#333333', fontSize: 12 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
            {TabList?.map((route) => (
                <Tab.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        title: route.title,
                        tabBarLabel: route.title,
                        // tabBarIcon: ({ focused }) => (
                        //     <Image
                        //         source={focused ? route.selectIcon : route.icon}
                        //         style={{ width: 25, height: 25 }}
                        //     />
                        // ),
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
        <Stack.Navigator initialRouteName="" screenOptions={{}}>
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{ headerShown: false, headerTitle: '' }}
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
