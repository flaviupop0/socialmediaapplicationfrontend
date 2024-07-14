import React from 'react';
import propTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faBookmark,
  faComment,
} from '@fortawesome/free-regular-svg-icons';
import styles from './style';
import {horizontalScale} from '../../assets/styles/scalling';

const UserPosts = props => {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.user}>
        <View style={styles.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={horizontalScale(48)}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={styles.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={24} />
      </View>
      <View style={styles.postImage}>
        <Image source={props.image} />
      </View>
      <View style={styles.interactionsContainer}>
        <View style={styles.interactionsContainer}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={styles.interactionsText}>{props.likes}</Text>
        </View>
        <View style={styles.interactionsContainer}>
          <FontAwesomeIcon icon={faComment} color={'#79869F'} />
          <Text style={styles.interactionsText}>{props.comments}</Text>
        </View>
        <View style={styles.interactionsContainer}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={styles.interactionsText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPosts.propTypes = {
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  location: propTypes.string,
  image: propTypes.any.isRequired,
  likes: propTypes.number.isRequired,
  comments: propTypes.number.isRequired,
  bookmarks: propTypes.number.isRequired,
  profileImage: propTypes.any.isRequired,
};

export default UserPosts;
