import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
    fontFamily: getFontFamily('Inter', '500'),
    color: '#022150',
  },
  storyContainer: {
    marginRight: 20,
  },
});

export default styles;
