import React from 'react';
import propTypes from 'prop-types';
import {View, Image} from 'react-native';
import styles from './style';

const UserProfileImage = props => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={{
          width: props.imageDimensions,
          height: props.imageDimensions,
          borderRadius: props.imageDimensions,
        }}
        source={props.profileImage}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: propTypes.any.isRequired,
  imageDimensions: propTypes.number.isRequired,
};

export default UserProfileImage;
