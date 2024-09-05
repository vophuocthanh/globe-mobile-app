
import { NavigationProp } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox, TextInput } from 'react-native-paper';
import axios from 'axios';
import authApi from '../apis/auth.api';



export default function Login() {
    const [text, setText] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const [checked, setChecked] = React.useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch("/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                });
            
                if (!response.ok) {
                throw new Error(`Login failed: ${response.status}`);
                }
            
                const data = await response.json();
                console.log('Login successful:', data);
                console.log(response,"response");
                
            
                // Process the response, e.g., save the token
                return data;
        } catch (error) {
                console.error('Error:', error);
                throw error;
        }
    }
    
    return (
        <View className='px-8 py-14'>
            <Text className='mb-8 text-4xl text-center'>Hello !</Text>
            <Text className='mb-20 text-2xl text-center color-slate-500'>Welcome to Roammate</Text>
            <View >
            <View className='mb-8 rounded-3xl'>
                    <TextInput
                        theme={{ roundness: 17,colors:{primary:"black"} }} 
                        mode="outlined"
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View className='mb-8'>
                    <TextInput
                    className='text-slate-950'
                    
                        theme={{ roundness: 17,colors:{primary:"black"}}} 
                        mode="outlined"
                        label="Pasword"
                        secureTextEntry={hidePass ? true : false}
                        right={
                        <TextInput.Icon
                            icon = {hidePass ? "eye-off" : "eye"}
                            onPress={() => setHidePass(!hidePass)}
                        />
                        }
                    />
                </View>
                <View className='flex-row items-center justify-between mb-9'>
                    <View className='flex-row items-center'>
                        <Checkbox
                            theme={{ colors:{primary:"black"}}}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Text className='items-center ml-4'>Remember me</Text>
                    </View>
                    <Link href='/login/forgotpassword/forgotpassword' asChild>
                        <TouchableOpacity 
                        >
                            <Text className='text-red-600'>Forgot Password</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
            <TouchableOpacity onPress={() => handleLogin()} >
                <Text className='p-8 text-2xl text-center bg-emerald-400 rounded-3xl'>Login</Text>
            </TouchableOpacity>
            <View className='flex-row justify-center mt-8 mb-12'>
                <Text className='text-xl'>Don’t have an account? </Text>
                <Link href='/register' asChild>
                    <TouchableOpacity>
                        <Text className='text-xl text-red-600 '>Sign up</Text>
                </TouchableOpacity>
                </Link>
                
            </View>
            <Text className='text-xl text-center text-gray-400'>Or login with</Text>
            <View>
                
            </View>
        </View>
    );
}