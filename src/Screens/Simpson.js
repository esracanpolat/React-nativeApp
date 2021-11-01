import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Simpson = ({ navigation }) => {
    const [data, setdata] = useState([]);
    const [stroge, setStroge] = useState();

    async function getdata() {
        const newdata = await AsyncStorage.getItem('AddNewCharacter');
        if (newdata) {
            setStroge(JSON.parse(newdata))
            if (stroge) { data.push(stroge); }
        }
    }
    async function getAllList() {
        const response = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons');
        setdata(response.data);
        getdata();
    }
    console.log(data, "data", stroge);
    useEffect(() => {
        getAllList();
    }, [stroge]);

    const onRemove = id => {
        setdata(data.filter(todo => todo.id !== id));
    };
    console.log(stroge && stroge.name);
    return (
        <View>
            <ScrollView>
                {data && data.map((list) => (
                    <View style={{ flexDirection: 'row', backgroundColor: "white", marginTop: 3, justifyContent: 'space-between' }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }} onPress={() => navigation.navigate('Detail', {
                                item: list
                            })}>
                                <Image source={{ uri: list.avatar }} style={{ height: 70, width: 40 }} />
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ marginLeft: 30 }}>{list.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 15, justifyContent: "center", alignItems: "flex-end" }} >
                            <TouchableOpacity onPress={() => onRemove(list.id)}>
                                <FontAwesome name="trash-o" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
                }
                <View style={{ marginTop: 30, alignItems: "center" }}>
                    <Pressable style={{ backgroundColor: "blue", borderRadius: 50, width: 40, height: 40, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate('AddNew')}>
                        <Text style={{ color: 'white', fontSize: 30, marginBottom: 10, fontWeight: "bold" }}>+</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View >
    );
}

export default Simpson;
