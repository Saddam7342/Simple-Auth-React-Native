import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from '../styles/globalStyles';

type props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
};

const TextInputWithLabel: React.FC<props> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <View>
      <Text
        style={{
          alignContent: 'flex-start',
          marginBottom: 5,
          marginLeft: 5,
          fontSize: 16,
          fontWeight: '500',
          color: '#555555ff',
        }}
      >
        {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        cursorColor={'grey'}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={'grey'}
      />
    </View>
  );
};

export default TextInputWithLabel;
