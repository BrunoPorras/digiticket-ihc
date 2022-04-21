import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image, Modal } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../components/Home'
import R from '../components/R'
import Ticket from '../components/Ticket'
import Profile from '../components/Profile'
import IconNav from '../components/IconNavigator'

import HomeIcon from '../assets/icons-tab-nav/home.png'
import ProfileIcon from '../assets/icons-tab-nav/profile.png'
import ReserveIcon from '../assets/icons-tab-nav/reserve.png'
import ViewIcon from '../assets/icons-tab-nav/view.png'

const LandingPageScreen = ({ navigation, route }) => {

    const Tab = createBottomTabNavigator();

    useEffect(() => {
    }, [])

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 5,
                    height: 60
                }
            }}>
            <Tab.Screen name="Inicio" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <IconNav
                        Icon={HomeIcon}
                        Name="Inicio"
                        Focus={focused}
                    />
                )
            }}/>
            <Tab.Screen name="Reservar" component={R} initialParams={{ student: route.params.student }} options={{
                tabBarIcon: ({focused}) => (
                    <IconNav
                        Icon={ReserveIcon}
                        Name="Reservar"
                        Focus={focused}
                    />
                )
            }}/>
            <Tab.Screen name="Ver" component={Ticket} options={{
                tabBarIcon: ({focused}) => (
                    <IconNav
                        Icon={ViewIcon}
                        Name="Ver"
                        Focus={focused}
                    />
                )
            }}/>
            <Tab.Screen name="Mi perfil" component={Profile} options={{
                tabBarIcon: ({focused}) => (
                    <IconNav
                        Icon={ProfileIcon}
                        Name="Mi perfil"
                        Focus={focused}
                    />
                )
            }}/>
        </Tab.Navigator>
        
    )
}

export default LandingPageScreen