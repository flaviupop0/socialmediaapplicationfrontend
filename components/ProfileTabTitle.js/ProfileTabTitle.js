import React from 'react';
import {Text} from 'react-native';
import propTypes from 'prop-types';
import style from './style';
const ProfileTabTitle = props => {
  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
      {props.title}
    </Text>
  );
};

ProfileTabTitle.propTypes = {
  title: propTypes.string.isRequired,
  isFocused: propTypes.bool.isRequired,
};

export default ProfileTabTitle;
