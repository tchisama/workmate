import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
type Props = {}

function HomeNavbar({}: Props) {
  return (
    <View style={styles.container} >
        <View style={styles.nav}>
        <View style={{...styles.navElements,...styles.search}}>
            <Text>hello world</Text>
        </View>
        <TouchableOpacity style={{...styles.navElements,...styles.button}}>
            <Ionicons name="menu-outline" size={22}  />
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 30,
        gap: 10,
        flexDirection: 'row',
    },
    nav: {
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