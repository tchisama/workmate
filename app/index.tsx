import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../constants/Colors'
import HomeNavbar from '../components/HomeNavbar'
import MapView from 'react-native-maps'
import Map from '../components/Map'

type Props = {}

function Page({}: Props) {
  return (
    <View style={style.container}>
        <HomeNavbar/>
        <Map/>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    flex: 1,
    backgroundColor: "#f3f4f6",    
  }
})

export default Page