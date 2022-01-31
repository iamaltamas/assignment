import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Second, Third, Fourth, Fifth, Login } from '..';
import { View, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const Route = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
           
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Image
                                source={require('../assest/home.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#8969e4' : "#000"
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Second" component={Second}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Image
                                source={require('../assest/number-2.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#8969e4' : "#000"
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Third" component={Third}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Image
                                source={require('../assest/number-3.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#8969e4' : "#000"
                                }}
                            />
                        </View>
                    )
                }}

            />
            <Tab.Screen name="Fourth" component={Fourth}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Image
                                source={require('../assest/number-four.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#8969e4' : "#000"
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Fifth" component={Fifth}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Image
                                source={require('../assest/number-5.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#8969e4' : "#000"
                                }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default Route;
