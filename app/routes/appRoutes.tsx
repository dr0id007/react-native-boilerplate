import React, { useEffect } from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens'
import { APP_ROUTES } from './navigationConstant'

const { height } = Dimensions.get('window')

const Stack = createStackNavigator()

const styles = StyleSheet.create({
  footerText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
    color: 'white',
  },
})

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={APP_ROUTES.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes
