import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import VueSearch from '../otherscreens/VueSearch';

const Stack = createStackNavigator();

export default function TwoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="search1" component={VueSearch} options={{headerShown:false}}/>
      <Stack.Screen name="search2" component={VueSearch} options={{
      title: 'Spark',
      headerTitleStyle: { fontWeight: "bold", color: "#F63A6E", fontSize: 25 },
      }} />
    </Stack.Navigator>
  );
}