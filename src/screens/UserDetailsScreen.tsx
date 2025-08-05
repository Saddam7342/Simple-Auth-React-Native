import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;

export default function UserDetailsScreen({ route }: Props) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>User Details Screen</Text>
      <Text>User ID: {id}</Text>
    </View>
  );
}
