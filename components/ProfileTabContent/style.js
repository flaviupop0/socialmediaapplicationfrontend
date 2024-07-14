import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: 'white',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: horizontalScale(140),
    height: verticalScale(90),
    marginTop: verticalScale(11),
  },
});

export default style;
