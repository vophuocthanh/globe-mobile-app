import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import styles from './style';

export default function ForgotPassword() {
    const [text, setText] = useState("");
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Forgot Password</Text>
            <Text style={styles.subtitle}>Enter your email account to reset</Text>
            <Text style={styles.subtitle}>your password</Text>
            <View style={styles.header}>
                <View style={styles.input}>
                    <TextInput
                        left={
                            <TextInput.Icon
                                icon = "email"
                                onPress={() => setHidePass(!hidePass)}
                            />
                            }
                        theme={{ roundness: 17,colors:{primary:"black"} }} 
                        mode="outlined"
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View >
                    <TextInput
                    
                        theme={{ roundness: 17,colors:{primary:"black"}}} 
                        mode="outlined"
                        label="Phone number"
                        secureTextEntry={hidePass ? true : false}
                        left={
                        <TextInput.Icon
                            icon = "phone"
                            onPress={() => setHidePass(!hidePass)}
                        />
                        }
                    />
                </View>
            </View>
            <View >
                <TouchableOpacity >
                        <Text style={styles.button}>Continue</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
