import React from 'react';
import propTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './Style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../assets/styles/scalling';

const UserStory = props => {
  return (
    <View style={styles.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={horizontalScale(65)}
      />
      <Text style={styles.textStyle}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: propTypes.string.isRequired,
};

export default UserStory;
