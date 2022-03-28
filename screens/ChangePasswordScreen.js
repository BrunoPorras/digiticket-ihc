import React, { useState } from 'react'
import { View, Text, Button, CheckBox, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ChangePasswordScreen = () => {
  const navigation = useNavigation()
  const handleValidatePassword = () => {
    navigation.navigate('HomeScreen')
  }
  return (
    <View>
      <TextInput
        placeholder='Contraseña nueva'>
      </TextInput>
      <TextInput
        placeholder='Confirmación'>
      </TextInput>
      <Button
        title='GUARDAR CONTRASEÑA'
        onPress={handleValidatePassword}
      />
    </View>
  )
}

export default ChangePasswordScreen