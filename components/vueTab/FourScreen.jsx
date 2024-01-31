import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import VueSearch from '../otherscreens/VueSearch';
import VueParams from '../otherscreens/VueParams';
import VueParams2 from '../otherscreens/VueParams2';
import VueParams3 from '../otherscreens/VueParams3';

const Stack = createStackNavigator();

export default function TwoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="params1" component={VueParams} options={{headerShown:false}}/>
      <Stack.Screen name="params2" component={VueParams2} options={{headerShown:false}} />
      <Stack.Screen name="params3" component={VueParams3} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}