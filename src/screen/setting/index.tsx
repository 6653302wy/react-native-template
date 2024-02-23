import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { RouterEnum } from '../../router/constants';

export const SettingScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>SettingScreen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate(RouterEnum.HOME as never)}
            />
        </View>
    );
};
