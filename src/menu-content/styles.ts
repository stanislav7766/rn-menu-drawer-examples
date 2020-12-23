import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Styles = {
  body: ViewStyle;
  drawer: ViewStyle;
  bottom: ViewStyle;
  footer: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {flex: 1, alignItems: 'center', backgroundColor: '#11074b'},
  bottom: {position: 'absolute', bottom: 0, right: 0, left: 0},
  footer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {fontWeight: 'bold', fontSize: 16, color: '#fff'},
});
