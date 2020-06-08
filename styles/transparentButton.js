import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const TransparentButton = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default TransparentButton;

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    width: 340,
  },
};
