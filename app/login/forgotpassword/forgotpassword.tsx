import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

export default function ForgotPassword() {
    const [text, setText] = useState("");
    const [hidePass, setHidePass] = useState(true);
    return (
        <View className='px-8 py-44'>
            <View className='flex items-center '>
                <Text className='mb-8 text-4xl '>Forgot Password</Text>
                <View className='flex items-center mb-20 text-center color-slate-500'>
                    <Text className='text-lg'>Enter your email account to reset</Text>
                    <Text className='text-lg'>your password</Text>
                </View>
            </View>
            <View className='mb-8 rounded-3xl'>
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
            <View className='mb-14'>
                <TextInput
                className='text-slate-950'
                
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
            <View className='text-center'>
            <TouchableOpacity >
                    <Text className='p-6 text-2xl text-center bg-emerald-400 rounded-3xl'>Continue</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}
