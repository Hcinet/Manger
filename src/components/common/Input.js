import React from 'react';
import { TextInput, View, Text,KeyboardAvoidingView } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <KeyboardAvoidingView style={containerStyle}  behavior="padding" enabled>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        returnKeyType="next"
        placeholderTextColor = "#d7f0f4"
        autoCorrect={false}
        underlineColorAndroid='transparent'
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </KeyboardAvoidingView>
  );
};

const styles = {
  inputStyle: {
    width: '80%',
    color: '#fff',
    backgroundColor:'transparent',
    paddingRight: 5,
    paddingLeft: 15,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    borderWidth:1,
    borderColor:"#d7f0f4",
    borderRadius:5,
    
    
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color:'#d7f0f4',
    flex: 1
  },
  containerStyle: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    
    
  }
};

export { Input };
