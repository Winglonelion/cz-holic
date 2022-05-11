import { StatusBar, View } from 'react-native';
import React from 'react';
import { CommonStyles } from '$theme/CommonStyles';
import TickerScreen from '$screens/TickerScreen';

const App = () => {
  return (
    <View style={CommonStyles.container}>
      <StatusBar barStyle={'light-content'} />
      <TickerScreen />
    </View>
  );
};

export default App;
