import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../constants/Colors'
import { Link } from 'expo-router'

type Props = {}

const ButtonNav = (props: Props) => {
  return (
    <View style={style.container}>
        <View style={style.nav}>
            <Link href={"/"} style={style.navElement}>
                <Ionicons name="planet-outline" size={22}  color={theme.light.background}/>
            </Link>
            <Link href={"/"} style={style.navElement}>
                <Ionicons name="search-outline" size={22}  color={theme.light.background}/>
            </Link>
            <Link href={"/"} style={style.navElement}>
                <Ionicons name="chatbubble-outline" size={22}  color={theme.light.background}/>
            </Link>
            <Link href={"/"} style={style.navElement}>
                <Ionicons name="settings-outline" size={22}  color={theme.light.background}/>
            </Link>
        </View>
        <Link href={"/"} style={style.button}>
            <Ionicons name="person-outline" size={22}  color={theme.light.background}/>
        </Link>

    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 20,
    },
    button:{
        backgroundColor:theme.light.primery,
        padding: 18,
        borderRadius:30
    },
    nav:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor:theme.light.text,
        flex: 1,
        borderRadius:30,
        justifyContent:"space-around",
        alignItems:"center",
    },
    navElement:{
        justifyContent:"center",
        alignItems:"center",
        padding: 16,
        borderRadius:30,
    }
})

export default ButtonNav
