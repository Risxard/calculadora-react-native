import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home/Home';

const Tab = createBottomTabNavigator();

export default  Routes = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>

    </Tab.Navigator>
  );
}
