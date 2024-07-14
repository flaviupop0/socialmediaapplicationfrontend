import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: scaleFontSize(14),
    marginTop: verticalScale(8),
    fontFamily: getFontFamily('Inter', '500'),
    color: '#022150',
  },
  storyContainer: {
    marginRight: horizontalScale(20),
  },
});

export default styles;
