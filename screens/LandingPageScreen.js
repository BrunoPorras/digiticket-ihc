import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../components/Home'
import R from '../components/R'
import Ticket from '../components/Ticket'
import Profile from '../components/Profile'

const LandingPageScreen = ({ navigation, route }) => {

    const Tab = createBottomTabNavigator();

    useEffect(() => {
    }, [])

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="R" component={R} initialParams={{ student: route.params.student }} />
            <Tab.Screen name="Ticket" component={Ticket} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default LandingPageScreen