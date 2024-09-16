import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Link } from "expo-router";

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.subtitle}>
        Please fill the details and create an account
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First name</Text>
        <TextInput placeholder="Tonny" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last name</Text>
        <TextInput placeholder="Jonh" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput placeholder="090577666" style={styles.input} />
      </View>
      <Link href="/register/hello" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Register;
