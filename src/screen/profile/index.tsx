import { Button, Text, View } from "react-native";
import { RouterEnum } from "../../router/constants";

export const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is Profile screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(RouterEnum.HOME)}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate(RouterEnum.SETTING)}
      />
    </View>
  );
};
