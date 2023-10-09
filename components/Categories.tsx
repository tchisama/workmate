import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories } from '../constants/data'
import { theme } from '../constants/Colors'
import useCatStore from '../hooks/categories'

type Props = {}

const Categories = (props: Props) => {
    const {category,setCategory} = useCatStore()
  return (
    <ScrollView style={styles.container} horizontal>
                    <TouchableOpacity onPress={() => setCategory(0)}   style={{...styles.category,borderColor:theme.light.primery+"88",borderWidth:category == 0 ? 2 : 0}}>
                        <Text style={{fontSize:22}}>🌍</Text>
                        <Text>All</Text>
                    </TouchableOpacity>
        {
            categories.map((_category,index) => {
                return (
                    <TouchableOpacity onPress={() => setCategory(index+1)}  key={index} style={{...styles.category,borderColor:theme.light.primery+"88",borderWidth:category == index+1 ? 2 : 0}}>
                        <Text style={{fontSize:22}}>{_category.emoji}</Text>
                        <Text> {_category.category}</Text>
                    </TouchableOpacity>
                )
            })
        }
        <View style={{width:20}}>

        </View>
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
    },
    category:{
        backgroundColor:"white",
        width:"auto",
        padding:10,
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        paddingHorizontal:15,
        borderRadius:20,
        marginRight:10,
    }
})