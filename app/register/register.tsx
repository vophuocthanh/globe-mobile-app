import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styleRegister";
import { Link, useRouter } from "expo-router";
import { EyeOff, Eye } from "lucide-react-native";

import { Checkbox } from "react-native-paper";

const RegisterPage2: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const router = useRouter();


  const handleRegister = async () => {

    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          confirmPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful", data);
        router.push("/register/verifyEmail");
      } else {
        const errorData = await response.json();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.subtitle}>
        Please fill the details and create an account
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput value={name} onChangeText={setName}
          placeholder="john" style={styles.inputEmail} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="john.doe@gmail.com" style={styles.inputEmail} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput value={phone} onChangeText={setPhone} placeholder="000000000" style={styles.inputEmail} />
      </View>

      {/* Input Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.inputPassword}
          />
          <TouchableOpacity
            onPress={handleTogglePassword}
            style={styles.eyeButton}
          >
            {showPassword ? (
              <Eye size={24} color="black" />
            ) : (
              <EyeOff size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Input Confirm Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            style={styles.inputPassword}
          />
          <TouchableOpacity
            onPress={handleToggleConfirmPassword}
            style={styles.eyeButton}
          >
            {showConfirmPassword ? (
              <Eye size={24} color="black" />
            ) : (
              <EyeOff size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Agreement Section */}
      <View style={styles.agreementContainer}>
        <Checkbox
          theme={{ colors: { primary: "gray" } }}
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />

        <Text style={styles.agreementText}>
          I agree to all the <Text style={styles.underlineText}>Terms</Text> and{" "}
          <Text style={styles.underlineText}>Privacy Policies</Text>
        </Text>
      </View>

      <TouchableOpacity onPress={handleRegister}
        style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.already}>
          Already have an account?{" "}
          <Link href="/login" asChild>
            <Text style={styles.login}>Login</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default RegisterPage2;
