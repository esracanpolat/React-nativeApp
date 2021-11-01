import React from 'react';
import { View, Image, Text } from 'react-native';

const Detail = ({ route, navigation }) => {
    const { item } = route.params;
    console.log(item);

    return (
        <View>
            <View style={{ alignItems: "center", marginTop: 50 }}>
                <Image source={{ uri: item && item.avatar }} style={{ height: 200, width: 100 }} />
                <Text>{item.name}</Text>
                <Text>{item.job}</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text>{item.about}</Text>
            </View>
        </View>
    );
}

export default Detail;
