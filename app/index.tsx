import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../constants/Colors'
import HomeNavbar from '../components/HomeNavbar'

type Props = {}

function Page({}: Props) {
  return (
    <View style={style.container}>
        <HomeNavbar/>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.background,
  },
})

export default Page