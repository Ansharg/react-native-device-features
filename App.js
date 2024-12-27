import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/Map';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500
          },
          headerTintColor: Colors.gary700,
          contentStyle: {
            backgroundColor: Colors.gary700
          }
        }}>
          <Stack.Screen name='AllPlaces' component={AllPlaces} options={({navigation})=>({
            title: "Your Favourite Places",
            headerRight : ({tintColor}) => (
              <IconButton icon={"add"} size={24} color={tintColor} onPress={()=>navigation.navigate("AddPlace")}/>
            )
          })}/>
          <Stack.Screen name='AddPlace' component={AddPlace} options={{
            title: "Add a new Place"
          }}/>
          <Stack.Screen name='Map' component={Map}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}