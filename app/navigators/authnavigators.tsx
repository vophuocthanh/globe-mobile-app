import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from "../login/forgotpassword/forgotpassword";

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="forgotpassword" 
                component={ForgotPassword}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AuthNavigator