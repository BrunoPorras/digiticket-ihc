import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'

const ProgressBar = (props) => {

    const {step, steps, height} = props

    const [width, setWidth] = useState(0)

    const animatedValue = useRef(new Animated.Value(-1000)).current
    const reactive = useRef(new Animated.Value(-1000)).current

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true
        }).start()
    }, []);

    useEffect(() => {
        reactive.setValue(-width + (width * step) / steps)
    }, [step, width])

    return (

        <View 
            onLayout={e => {
                const newWidth = e.nativeEvent.layout.width
                setWidth(newWidth)
            }}
            style={{
                ...styles.container,
                height,
                borderRadius: height
            }}>
                <Animated.View style={{
                    ...styles.barContainer,
                    height,
                    borderRadius: height,
                    transform: [{
                        translateX: animatedValue
                    }]
                }}
                />
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E3E3E3",
        overflow: "hidden"
    },
    barContainer: {
        width: "100%",
        backgroundColor: "#FFA41D",
        position: "absolute",
        left: 0,
        top: 0
    }
})

export default ProgressBar