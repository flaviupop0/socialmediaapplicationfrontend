import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  envelope: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
  },
  messageContainer: {
    justifyContent: 'center',
    backgroundColor: '#F35BAC',
    flexDirection: 'row',
    width: horizontalScale(12),
    height: horizontalScale(12),
    borderRadius: horizontalScale(50),
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: horizontalScale(10),
    top: verticalScale(9),
  },
  messageNumber: {
    color: 'white',
    fontSize: scaleFontSize(8),
    fontFamily: getFontFamily('Inter', '600'),
    textAlign: 'center',
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
