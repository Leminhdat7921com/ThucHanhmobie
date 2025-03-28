// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="OTP" component={OTPScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => navigation.replace('Welcome'), 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6CBF74' },
    logo: { width: 150, height: 150 },
});

export default SplashScreen;

// screens/WelcomeScreen.js
import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/welcome-bg.jpg')} style={styles.background}>
            <View style={styles.overlay}>
                <Text style={styles.title}>Welcome to our store</Text>
                <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: { flex: 1, resizeMode: 'cover' },
    overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
    title: { fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 10 },
    subtitle: { fontSize: 16, color: 'white', textAlign: 'center', marginBottom: 20 },
    button: { backgroundColor: '#6CBF74', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5 },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default WelcomeScreen;

// screens/LoginScreen.js
import React, { useState } from 'react';
import { TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [phone, setPhone] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter your mobile number</Text>
            <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OTP')}>
                <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '100%', borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 20 },
    button: { backgroundColor: '#6CBF74', padding: 15, borderRadius: 5 },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default LoginScreen;

// screens/OTPScreen.js
import React from 'react';

const OTPScreen = ({ navigation }) => {
    const [otp, setOtp] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter your 4-digit code</Text>
            <TextInput
                style={styles.input}
                placeholder="- - - -"
                keyboardType="number-pad"
                maxLength={4}
                value={otp}
                onChangeText={setOtp}
            />
            <TouchableOpacity style={styles.button} onPress={() => alert('OTP Verified!')}>
                <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Resending OTP...')}>
                <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '100%', borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 20, textAlign: 'center' },
    button: { backgroundColor: '#6CBF74', padding: 15, borderRadius: 5 },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    resendText: { marginTop: 20, color: '#6CBF74', fontSize: 16 },
});

export default OTPScreen;

