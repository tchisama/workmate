import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../constants/Colors'
import { Link } from 'expo-router'

type Props = {}

const ButtonNav = (props: Props) => {
  return (
    <View style={style.container}>
        <View style={style.nav}>
            <Link href={"/"} style={{...style.navElement,backgroundColor:theme.light.primery+"66"}} asChild>
                <TouchableOpacity>
                    <Ionicons name="planet-outline" size={22}  color={theme.light.primerylight}/>
                </TouchableOpacity>
            </Link>
            <Link href={"/"} style={style.navElement} asChild>
                <TouchableOpacity>
                    <Ionicons name="search-outline" size={22}  color={theme.light.background}/>
                </TouchableOpacity>
            </Link>
            <Link href={"/"} style={style.navElement} asChild>
                <TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={22}  color={theme.light.background}/>
                </TouchableOpacity>
            </Link>
            <Link href={"/"} style={style.navElement} asChild>
                <TouchableOpacity>
                    <Ionicons name="person-outline" size={22}  color={theme.light.background}/>
                </TouchableOpacity>
            </Link>
        </View>

        <Link href={"/"} style={style.button} asChild>
            <TouchableOpacity>
                <Ionicons name="add-outline" size={28}  color={theme.light.background}/>
            </TouchableOpacity>
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
        alignContent: 'center',
    },
    button:{
        backgroundColor:theme.light.primery,
        padding: 15,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",

        shadowColor: '#7c3aed',
        elevation: 12,
    },
    nav:{
        flexDirection: 'row',
        paddingHorizontal: 5,
        backgroundColor:theme.light.text,
        flex: 1,
        borderRadius:30,
        justifyContent:"space-around",
        alignItems:"center",
        padding: 4,

        // i want a small box shadow
        shadowColor: '#000',
        elevation: 12,
    },
    navElement:{
        justifyContent:"center",
        alignItems:"center",
        padding: 10,
        borderRadius:30,
    }
})

export default ButtonNav
