import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/globalStyles';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function DashboardScreen() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // API call function
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Toast.show({ text1: item.title })}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  margin: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 12,
                  shadowColor: '#000',
                  shadowOpacity: 0.2,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                }}
              >
                <Image
                  source={{
                    uri: 'https://tse2.mm.bing.net/th/id/OIP.Vo1CZ4tw0uwTek6cSoVGJQHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
                  }}
                  style={{
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                    // tintColor: '#000',
                    backgroundColor: '#ccc',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 10,
                  }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                  <Text>{item.url}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
