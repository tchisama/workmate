import { StyleSheet,Image,Text, View } from 'react-native'
import React from 'react'
import MapView , {Marker} from 'react-native-maps'
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
    <MapView  customMapStyle={mapStyling} style={styles.map} >
        {/* add me a custom marker */}
        <Marker coordinate={markerCoordinates}>
            <View style={styles.imageContainer}>
                <Image
                source={{uri:'https://avatars.githubusercontent.com/u/115560200?v=4'}}
                style={styles.meCustomMarker}
                />
            </View>
        </Marker>
        <Marker coordinate={{latitude: 30.359774892258095, longitude: -6.492043775500639}}>
            <View style={styles.imageContainer}>
                <Image
                source={{uri:'https://avatars.githubusercontent.com/u/115560200?v=4'}}
                style={styles.customMarker}
                />
            </View>
        </Marker>
        
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
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
    borderWidth:2,
    borderColor:theme.light.primery+"88",
    width: 32,
    height: 32,
    borderRadius:40,
  },
  customMarker:{
    borderWidth:2,
    borderColor:'white',
    width: 30,
    height: 30,
    borderRadius:40,
  }
})