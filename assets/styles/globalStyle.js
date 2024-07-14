import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  envelope: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageContainer: {
    justifyContent: 'center',
    backgroundColor: '#F35BAC',
    flexDirection: 'row',
    width: 12,
    height: 12,
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    top: 10,
  },
  messageNumber: {
    color: 'white',
    fontSize: 8,
    fontFamily: getFontFamily('Inter', '600'),
    textAlign: 'center',
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});

export default globalStyle;
