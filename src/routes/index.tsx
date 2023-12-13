import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login";
import Register from "../screens/register";
import { Home } from "../screens/home";
import { Appointment } from "../screens/appointment";
import { Profile } from "../screens/profile";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="register" component={Register}options={{headerShown: false}} />
        <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="appointment" component={Appointment} options={{headerShown: false}} />
        <Stack.Screen name="profile" component={Profile} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
