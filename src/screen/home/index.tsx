import { Button, Text, View } from "react-native";
import { RouterEnum } from "../../router/constants";

export const HomeScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Home Screen</Text>
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate(RouterEnum.LIST, { name: "Your" })}
      />
    </View>
  );
};
