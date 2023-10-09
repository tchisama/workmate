import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories } from '../constants/data'
import { theme } from '../constants/Colors'

type Props = {}

const Categories = (props: Props) => {
    const [selected, setSelected] = React.useState(0)
  return (
    <ScrollView style={styles.container} horizontal>
        {
            categories.map((category,index) => {
                return (
                    <TouchableOpacity onPress={() => setSelected(index)}  key={index} style={{...styles.category,borderColor:theme.light.primery+"88",borderWidth:selected == index ? 2 : 0}}>
                        <Text style={{fontSize:22}}>{category.emoji}</Text>
                        <Text> {category.category}</Text>
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