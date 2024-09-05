import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styleHello";
import { Link } from "expo-router";
import { EyeOff, Eye } from "lucide-react-native";

import { Checkbox } from "react-native-paper";

const Hello: React.FC = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.subtitle}>
        Please fill the details and create an account
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="john.doe@gmail.com" style={styles.inputEmail} />
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

      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </Link>

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

export default Hello;











