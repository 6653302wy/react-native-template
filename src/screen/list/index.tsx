import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

export const ListScreen = () => {
  const route = useRoute();
  return (
    <View>
      <Text>List {(route?.params as any)?.name} Screen</Text>
    </View>
  );
};
