import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: horizontalScale(80),
    height: horizontalScale(80),
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: horizontalScale(32),
    padding: horizontalScale(4),
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'center',
    borderColor: '#0150EC',
  },
  name: {
    textAlign: 'center',
    margin: horizontalScale(10),
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
  },
  informationContainer: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderBottomColor: '#E9EFF1',
  },
  numbers: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
  },
  statType: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
    marginHorizontal: horizontalScale(10),
  },
  stat: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(8),
  },
});

export default style;
