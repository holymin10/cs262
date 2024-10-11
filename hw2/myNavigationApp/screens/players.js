import React, {useEffect, useState} from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function PlayerScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://cs262-webservice.azurewebsites.net/players/')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
     }, []);
    
    return (
       <View style={ globalStyles.container }>
           {isLoading ? <ActivityIndicator /> : (
              <FlatList
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text style={globalStyles.title}>{item.email}</Text>
                  </TouchableOpacity>
                 )} />
              )}
        </View>
    );
};
