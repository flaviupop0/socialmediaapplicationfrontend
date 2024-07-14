import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    color: '#022150',
    fontSize: scaleFontSize(16),
    padding: horizontalScale(10),
  },
  titleNotFocused: {
    fontFamily: getFontFamily('Inter', '400'),
    color: '#79869F',
  },
});

export default style;
