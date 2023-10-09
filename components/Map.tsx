import { StyleSheet,Image,Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView , {Marker,Callout} from 'react-native-maps'
import { theme } from '../constants/Colors'

type Props = {}

const mapStyling = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d9d9d9"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ff0000"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#00ff00"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#888888"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#888888"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
] 

const Map = (props: Props) => {
    const markerCoordinates = {
        latitude: 32.359774892258095,
        longitude: -6.391043775400629,
      };
  return (
    <MapView  
        customMapStyle={mapStyling} 
        style={styles.map} 
        initialRegion={{
            latitude: 32.359774892258095,
            longitude: -6.391043775400629,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        }} 
        >
        {/* add me a custom marker */}
        <Marker coordinate={markerCoordinates}>
            <View style={styles.imageContainer}>
                <Image
                source={{uri:'https://avatars.githubusercontent.com/u/115560200?v=4'}}
                style={styles.meCustomMarker}
                />
            </View>
            <Callout tooltip={false} style={styles.callout}>
            <View >
              <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"flex-start"}}>
                <Text style={styles.name}>tchisama</Text>
                {
                    true ?
                    <Text style={styles.badgFree}>Free</Text>
                    :
                    <Text style={styles.badgBusy}>Busy</Text>
                }
              </View>
                <Text style={{fontSize:12}}>full stack web developer 💻</Text>
                <Text style={{fontSize:12}}>22 years / male</Text>
                <Text style={{fontSize:10, color:'gray'}}>contact me and lets work together Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, corporis, quidem provident voluptate suscipit hic perferendis dolor veniam itaque natus a eaque quasi dolore modi vitae non! Quo, maiores officiis!</Text>
            </View>
          </Callout>
        </Marker>
        <Marker  coordinate={{latitude: 30.359774892258095, longitude: -6.492043775500639}}>
            <View style={styles.imageContainer}>
                <Image
                   source={{uri:'https://avatars.githubusercontent.com/u/25749407?v=4'}}
                   style={styles.customMarker}
                />
            </View>
        </Marker>
        
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