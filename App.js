import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Màn hình Trang chủ
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Chào mừng bạn đến Trang chủ! 🎉</Text>
    </View>
  );
};

// Màn hình Đăng nhập
const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage('');
      navigation.navigate('Home'); // Chuyển đến HomeScreen nếu số hợp lệ
    } else {
      setErrorMessage('❌ Số điện thoại không hợp lệ! ❌');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Đăng Nhập</Text>
      <StatusBar style="auto" />
      <View style={styles.hr} />
      <Text style={styles.h2}>Nhập số điện thoại</Text>
      <Text style={styles.h3}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      <TextInput
        placeholder="Nhập số điện thoại của bạn"
        style={styles.textinput}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
      <Button title="Kiểm tra" onPress={() => validatePhoneNumber(phoneNumber)} />
    </View>
  );
};

const Stack = createStackNavigator();

// Gói toàn bộ trong NavigationContainer
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Đăng Nhập' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 10,
  },
  h1: {
    fontSize: 31,
    fontWeight: 'bold',
  },
  hr: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  h2: {
    marginTop: 80,
    fontSize: 25,
  },
  h3: {
    marginTop: 30,
    fontSize: 17,
  },
  textinput: {
    marginTop: 30,
    marginBottom: 30,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
