import React, { useState } from 'react'
import { View, Text, Button, CheckBox, StyleSheet, TextInput } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const [isSelected, setSelection] = useState(false)
    const navigation = useNavigation()
    const handleSubmit = () => {
        navigation.navigate("ActivateAccountScreen1")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txtSignIn}>
                INICIAR SESIÓN
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Código Universitario'>
                </TextInput>
                <Icon
                    name='rowing'
                    color='#B2B2B2'>
                </Icon>
            </View>
            <View style={styles.rememberUserContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    disabled={false}
                />
                <Text>Recordar Usuario</Text>
            </View>
            <Button
                style={styles.buttonNext}
                title='Siguiente'
                color='#136CF1'
                onPress={handleSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    txtSignIn: {
        paddingVertical: 70,
        textAlign: 'center',
        width: 139,
        height: 22
    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#B2B2B2',
    },
    rememberUserContainer: {
        flexDirection: 'row'
    }
})

export default HomeScreen