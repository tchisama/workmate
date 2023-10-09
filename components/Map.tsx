import { StyleSheet,Image,Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView , {Marker,Callout} from 'react-native-maps'
import { mapStyling, theme } from '../constants/Colors'
import MarkerComp from './MarkerComp'
import { users } from '../constants/data'

type Props = {}

const Map = (props: Props) => {
  return (
    <MapView  
        customMapStyle={mapStyling} 
        style={styles.map} 
        initialRegion={{
            latitude: 32.359774892258095,
            longitude: -6.391043775400629,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }} 
        >
            {
                users.map((user,index) => <MarkerComp key={index} user={user}/>)
            }
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
    name:{
        fontSize:18,

    },
    bage:{
        padding:2,
        paddingHorizontal:8,
        borderRadius:30,
        fontSize:10,
        color:"white",
    },
    badgFree:{
        padding:2,
        paddingHorizontal:8,
        borderRadius:30,
        fontSize:10,
        color:"white",
        backgroundColor:theme.light.primery,
    },
    badgBusy:{
        fontSize:10,
        color:"white",
        backgroundColor:"tomato",
        padding:2,
        paddingHorizontal:8,
        borderRadius:30,
    },
    button:{
        backgroundColor:theme.light.primery,
        padding: 6,
        paddingHorizontal:12,
        color:"white",
        borderRadius:30,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
    },
  map:{
    flex: 1,
    backgroundColor: "#f3f4f6",    

  },
  imageContainer:{
    // i want a small box shadow
    shadowColor: '#3335',
    elevation: 4,

    position:'relative',
    borderRadius:40,
    backgroundColor:'white',
  },
  meCustomMarker:{
    borderWidth:1,
    borderColor:"#fff",
    width: 32,
    height: 32,
    borderRadius:40,
  },
  customMarker:{

    borderWidth:2,
    width: 30,
    height: 30,
    borderRadius:40,
  },
  callout:{
    width: 250,
    height: "auto",
    padding: 6,
  }
})