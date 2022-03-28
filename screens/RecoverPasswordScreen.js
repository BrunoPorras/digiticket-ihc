import React, { useState } from 'react'
import { View, Text, Button, CheckBox, StyleSheet, TextInput } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const RecoverPasswordScreen = () => {

  const navigation = useNavigation()
  const handleValidateCode = () => {
    navigation.navigate('ChangePasswordScreen')
  }
  return (
    <View>
      <TextInput
        placeholder='Ingresar el código'>
      </TextInput>
      <Button
        title="Siguiente"
        onPress={handleValidateCode}
      />

    </View>
  )
}

export default RecoverPasswordScreen