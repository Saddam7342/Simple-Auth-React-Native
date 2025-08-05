import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import styles from '../styles/globalStyles';
import Toast from 'react-native-toast-message';
import TextInputWithLabel from '../components/text_input_with_label';
import CustomButton from '../components/custom_button';

export default function LoginScreen({ navigation }: any) {
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
            <Text style={styles.title}>Login Page</Text>

            <TextInputWithLabel
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />

            <TextInputWithLabel
              label="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
            />

            <CustomButton
              title="Login"
              backgroundColor="#5b5b5cff"
              onPress={() =>
                email.toLocaleLowerCase() === 'admin@gmail.com' &&
                password.toLocaleLowerCase() === 'admin'
                  ? navigation.navigate('Dashboard')
                  : Toast.show({
                      type: 'error',
                      text1: 'Invalid Credentials',
                      text2: 'Please try again',
                    })
              }
            />

            <Text
              style={{ color: 'black', marginTop: 20, textAlign: 'center' }}
            >
              Don’t have an account?{' '}
              <Text
                style={{
                  color: '#272727ff',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}
                onPress={() => navigation.navigate('Signup')}
              >
                Signup
              </Text>
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
