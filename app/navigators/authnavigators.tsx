import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from "../login/forgotpassword/forgotpassword";
import DetailTour from "../tour/detail-tour/detail-tour";

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="forgotpassword" 
                component={ForgotPassword}
                />
                <Stack.Screen 
                name="detail-tour" 
                component={DetailTour}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AuthNavigator