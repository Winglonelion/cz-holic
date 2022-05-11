import { View, FlatList } from 'react-native';
import React, { useCallback } from 'react';
import useTickerScreenLogic from './TickerScreen.logic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyles } from '$theme/CommonStyles';
import TickerItem from '$components/TickerItem';
import { TickerResponse } from '$api/ticker/ticker.data.types';
import TickerHeader from './components/TickerHeader';
import ItemSeparator from './components/ItemSeparator';

const TickerScreen = () => {
  const { tickers, isLoading, onRefresh } = useTickerScreenLogic();

  const renderItem = useCallback(({ item }: { item: TickerResponse }) => {
    return <TickerItem ticker={item} />;
  }, []);

  const keyExtractor = useCallback((item: TickerResponse) => item.symbol, []);

  return (
    <View style={CommonStyles.container}>
      <SafeAreaView mode="padding" style={CommonStyles.flex1}>
        <FlatList
          ListHeaderComponent={TickerHeader}
          onRefresh={onRefresh}
          refreshing={isLoading}
          data={tickers}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          ItemSeparatorComponent={ItemSeparator}
        />
      </SafeAreaView>
    </View>
  );
};

export default TickerScreen;
