import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Details({ route, navigation }) {

    return (
        <View style={globalStyles.container}>
            {/* Display the fields of the received movie object. */}
            <Text style={globalStyles.title}>{ route.params.email }</Text>
            <Text>ID: { route.params.id }</Text>
            <Text>Aka: { route.params.name }</Text>
        </View>
    );
  }
