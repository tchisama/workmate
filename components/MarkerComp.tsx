import { StyleSheet,Image,Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView , {Marker,Callout} from 'react-native-maps'
import { theme } from '../constants/Colors'

type Props = {
    user:{
        name: string;
        work: string;
        sex: string;
        age: number;
        description: string;
        isbusy: boolean;
        img: string;
        latitude: number;
        longitude: number;
    }
}
const MarkerComp = ({user}: Props) => {
    const markerCoordinates = {
        latitude: user.latitude,
        longitude: user.longitude,
      };
  return (
    <Marker coordinate={markerCoordinates}>
        <View style={styles.imageContainer}>
            <Image
            source={{uri:user.img}}
            style={styles.meCustomMarker}
            />
        </View>
        <Callout tooltip={false} style={styles.callout}>
        <View >
            <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"flex-start"}}>
            <Text style={styles.name}>{user.name}</Text>
            {
                !user.isbusy ?
                <Text style={styles.badgFree}>Free</Text>
                :
                <Text style={styles.badgBusy}>Busy</Text>
            }
            </View>
            <Text style={{fontSize:12}}>{user.work}</Text>
            <Text style={{fontSize:10}}>{user.sex}  •  {user.age} years</Text>
            <Text style={{fontSize:10,marginTop:5, color:'gray'}}>{user.description}</Text>
        </View>
        </Callout>
    </Marker>
  )
}

export default MarkerComp

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