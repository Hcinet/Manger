import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity elevation={3}  onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    color: '#113135',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    height:'90%',
    alignSelf: 'stretch',
    backgroundColor: '#d7f0f4',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#c9f2f8',
    marginLeft: 70,
    marginRight: 70,

    
  }
};

export { Button };
