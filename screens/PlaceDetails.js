import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import OutlineButton from '../components/UI/OutlineButton'
import { Colors } from '../constants/colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fetchPlaceDetails } from '../util/database'

const PlaceDetails = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const [fetchedPlace,setFetchedPlace] = useState()

    const selectedPlaceId = route.params.placeId;
    function showOnMapHandler(){
        navigation.navigate("Map",{
            initialLat : fetchedPlace.location.lat,
            initialLng : fetchedPlace.location.lng
        })
    }

    useEffect(()=>{
        async function loadPlaceData(){
            const place = await fetchPlaceDetails(selectedPlaceId);
            setFetchedPlace(place);
            navigation.setOptions({
                title : place.title
            })
        }
        loadPlaceData()
    },[selectedPlaceId])

    if (!fetchedPlace) {
        return <View style={styles.fallback}><Text>Loading place data...</Text></View>
    }

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri : fetchedPlace.imageUri}}/>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
            <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlineButton icon={"map"} onPress={showOnMapHandler}>View on Map</OutlineButton>
      </View>
    </ScrollView>
  )
}

export default PlaceDetails


const styles = StyleSheet.create({
    fallback : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    image : {
        height : "35%",
        minHeight : 300,
        width : "100%",
    },
    locationContainer : {
        justifyContent : "center",
        alignItems : "center",
    },
    addressContainer : {
        padding : 20
    },
    address : {
        color: Colors.primary500,
        textAlign : "center",
        fontWeight : "bold",
        fontSize : 16,

    }
})