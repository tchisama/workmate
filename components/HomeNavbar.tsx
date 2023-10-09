import { Ionicons } from '@expo/vector-icons'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Categories from './Categories'
type Props = {}

function HomeNavbar({}: Props) {
  return (
    <View style={styles.container}>
    <View style={styles.container2} >
        <View style={styles.nav}>
            <View style={{...styles.navElements,...styles.search}}>
                <Text>hello world</Text>
            </View>
            <TouchableOpacity style={{...styles.navElements,...styles.button}}>
                <Ionicons name="menu-outline" size={22}  />
            </TouchableOpacity>
        </View>
    </View>
    <Categories/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        zIndex:4,
        marginTop: 30,
        position: 'absolute',
        top: 0,
        left:0,
        width:"100%",
    },
    container2: {
        zIndex:4,
        paddingHorizontal: 20,
        marginVertical: 30,
        marginBottom:10,
        gap: 10,
        width:"100%",
    },
    nav: {
        width:"100%",
        flexDirection: 'row',
        gap: 10,
        flex: 1,
    },
    navElements:{
        borderRadius:10,
        backgroundColor: '#fff',
        padding: 15,

        // i want a small box shadow
        shadowColor: '#3332',
        elevation: 4,
    },
    search: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
    }
})

export default HomeNavbar