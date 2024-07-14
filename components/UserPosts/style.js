import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';

const styles = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(20),
    borderBottomColor: '#EFF2F6',
  },
  interactionsText: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '300'),
    marginLeft: horizontalScale(3),
    marginRight: horizontalScale(20),
  },
  interactionsContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(8),
  },
});

export default styles;
