import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login";
import Register from "../screens/register";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="login" component={LoginScreen}  options={{headerShown: false}} />
        <Stack.Screen name="register" component={Register} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
