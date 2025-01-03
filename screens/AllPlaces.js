import React, { useEffect, useState } from 'react'
import PlacesList from '../components/Places/PlacesList'
import { useRoute, useIsFocused } from '@react-navigation/native'
import { fetchPlaces } from '../util/database';

const AllPlaces = () => {
  const [loadedPlaces,setLoadedPlaces] = useState([]);
  const route = useRoute()
  const isFocused = useIsFocused();

  useEffect(()=>{
    async function loadPlaces(){
      const places = await fetchPlaces()
      setLoadedPlaces(places);
    }
    if (isFocused && route.params) {
      const data = loadPlaces()
      // setLoadedPlaces(curPlaces => [...curPlaces, route.params.place])
    }
  },[isFocused,route])
  return (
    <PlacesList places={loadedPlaces} />
  )
}

export default AllPlaces
