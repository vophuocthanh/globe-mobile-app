import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const VerifyEmail: React.FC = () => {
    const [code, setCode] = useState(Array(6).fill(""));
    const [email, setEmail] = useState("");


    const inputs = useRef<Array<TextInput | null>>([]);

    const handleInputChange = (text: string, index: number) => {
        const updatedCode = [...code];
        updatedCode[index] = text.slice(-1); // Lấy ký tự cuối cùng
        setCode(updatedCode);

        if (text && index < 5) {
            // Tự động focus vào ô tiếp theo
            inputs.current[index + 1]?.focus();
        }
    };

    const router = useRouter();


    const handleSubmit = async () => {

        try {
            const response = await fetch("http://localhost:3001/api/auth/verify-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    verificationCode: code.join("")
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Registration successful", data);
                router.push("/login/login");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify Your Email</Text>
            <Text style={styles.subtitle}>
                Please enter the 6-digit code sent to your email.
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput value={email} onChangeText={setEmail} placeholder="john.doe@gmail.com" style={styles.inputEmail} />
            </View>

            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        id={`input-${index}`}
                        value={digit}
                        onChangeText={(text) => handleInputChange(text, index)}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VerifyEmail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#F5F7FA", // Màu nền nhẹ nhàng
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
        textAlign: "center",
    },
    codeContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 20,
        width: "80%",
        gap: 10,
    },
    input: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        textAlign: "center",
        fontSize: 18,
        color: "#333",
        backgroundColor: "#fff",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    button: {
        backgroundColor: "#4CAF50", // Màu xanh chủ đạo
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    label: {
        fontSize: 14,
        color: "#555",
        marginBottom: 5,
        alignSelf: "flex-start",
    },
    inputContainer: {
        marginBottom: 20,
        width: "100%",
    },
    inputEmail: {
        height: 48,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#fff",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        color: "#333",
    },
});
