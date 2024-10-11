import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"

import { globalStyles } from '../styles/global';

export default function Header({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <AntDesign name={"questioncircleo"} size={20} style={globalStyles.container}></AntDesign>
            </TouchableOpacity>
        </View>
    );
};