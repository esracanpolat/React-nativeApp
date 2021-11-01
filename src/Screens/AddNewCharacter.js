import React, { useEffect, useState } from 'react';
import { TextInput, View, Button, Text } from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNewCharacter = ({ navigation }) => {

    async function SaveStroge(values) {
        const jsonValue = JSON.stringify(values)
        await AsyncStorage.setItem('AddNewCharacter', jsonValue)
            .then((resp) => {
                if (values) {
                    navigation.navigate('Simpsons')
                }
            }).catch((error) => {
                console.log(error);
            });

    }

    return (
        <View style={{ margin: 20 }}>
            <Formik
                initialValues={{ name: '', job: '', avatar: '', about: '' }}
                onSubmit={values => SaveStroge(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={{ marginTop: 10 }}>
                            <Text>Name Surname:</Text>
                            <TextInput
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                style={{
                                    height: 40,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    padding: 10,
                                    borderRadius: 10,
                                    backgroundColor: 'white'
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text>Job Title:</Text>
                            <TextInput
                                onChangeText={handleChange('job')}
                                onBlur={handleBlur('job')}
                                value={values.job}
                                style={{
                                    height: 100,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    padding: 10,
                                    borderRadius: 10,
                                    backgroundColor: 'white'
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text>about him/her:</Text>
                            <TextInput
                                onChangeText={handleChange('about')}
                                onBlur={handleBlur('about')}
                                value={values.about}
                                style={{
                                    height: 100,
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 10,
                                    borderColor: 'gray',
                                    backgroundColor: 'white'
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text>Image Link:</Text>
                            <TextInput
                                onChangeText={handleChange('avatar')}
                                onBlur={handleBlur('avatar')}
                                value={values.avatar}
                                style={{
                                    height: 40,
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 10,
                                    borderColor: 'gray',
                                    backgroundColor: 'white'
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Button onPress={handleSubmit} style={{ borderRadius: 10 }} title="Add Character" />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default AddNewCharacter;
