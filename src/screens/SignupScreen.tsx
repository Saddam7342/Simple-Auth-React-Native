import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../styles/globalStyles';
import Toast from 'react-native-toast-message';
import CustomButton from '../components/custom_button';
import TextInputWithLabel from '../components/text_input_with_label';
import { validateEmail, validatePassword } from '../utils/validations';

export default function SignupScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            padding: 20,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Image
              source={require('../../assets/logo.png')}
              style={{
                width: 80,
                height: 80,
                marginBottom: 20,
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />

            <Text style={styles.title}>Signup</Text>

            <TextInputWithLabel
              label="Name"
              value={name}
              onChangeText={setName}
              placeholder="Name"
            />

            <TextInputWithLabel
              label="Email"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />

            <TextInputWithLabel
              label="Password"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <CustomButton
              title="Signup"
              backgroundColor="#5b5b5cff"
              onPress={() => {
                if (name === '' || email === '' || password === '') {
                  Toast.show({
                    type: 'error',
                    text1: 'Invalid Credentials',
                    text2: 'Please fill all the details',
                  });
                  return;
                } else if (!validateEmail(email)) {
                  Toast.show({
                    type: 'error',
                    text1: 'Invalid Credentials',
                    text2: 'Please enter a valid email',
                  });
                  return;
                } else if (!validatePassword(password)) {
                  Toast.show({
                    type: 'error',
                    text1: 'Invalid Credentials',
                    text2: 'Please enter a valid password',
                  });
                  return;
                }
                navigation.navigate('Dashboard');
              }}
            />

            <Text
              style={{ color: 'black', marginTop: 20, textAlign: 'center' }}
            >
              Already have an Account?{' '}
              <Text
                style={{
                  color: '#272727ff',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}
                onPress={() => navigation.navigate('Login')}
              >
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
