import { View, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import { TickerResponse } from '$api/ticker/ticker.data.types';
import TextHeader from '$components/Typo/TextHeader';
import TextContent from '$components/Typo/TextContent';

interface Props {
  ticker: TickerResponse;
}

const TickerItem: React.FC<Props> = ({ ticker }) => {
  const priceChangeNumber = useMemo(() => {
    const { priceChange } = ticker;
    return Number.parseFloat(priceChange);
  }, [ticker]);

  const lastPriceLabel = useMemo(() => {
    const { lastPrice } = ticker;
    const priceFloat = Number.parseFloat(lastPrice);
    if (priceFloat === 0) {
      return '0';
    }

    const numberOfDecimals = lastPrice.match(/\.(\d+)/)?.[1].length || 1;
    const numberOfUnusedDecimals =
      lastPrice.match(/\.(0*)([123456789]+)(0+)$/)?.[3].length || 0;
    const precision = Math.max(
      numberOfDecimals - numberOfUnusedDecimals - 1,
      1,
    );

    const result =
      priceFloat > 1 ? priceFloat.toFixed(2) : priceFloat.toFixed(precision);

    return result;
  }, [ticker]);

  const priceChangePercentLabel = useMemo(() => {
    const { priceChangePercent } = ticker;
    return Number.parseFloat(priceChangePercent).toPrecision(2);
  }, [ticker]);

  const isNegative = priceChangeNumber < 0;
  const isPositive = priceChangeNumber > 0;

  return (
    <View style={styles.container}>
      <View style={styles.symbol}>
        <TextHeader color={'#DDD'} level="h3">
          {ticker.symbol}
        </TextHeader>
      </View>
      <View style={styles.price}>
        <TextContent
          adjustsFontSizeToFit
          fontWeight="700"
          level="big"
          color={'#ccc'}>
          {lastPriceLabel}
        </TextContent>
      </View>
      <View style={styles.change}>
        <View
          style={[
            styles.box,
            isPositive && styles.box__positive,
            isNegative && styles.box__negative,
          ]}>
          <TextContent
            adjustsFontSizeToFit
            fontWeight="700"
            level="small"
            color={'#ccc'}
            numberOfLines={1}>
            {priceChangePercentLabel}
            {'%'}
          </TextContent>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#222',
  },
  symbol: {
    flex: 4,
  },
  price: {
    flex: 4,
  },
  change: {
    flex: 2,
  },
  box: {
    alignItems: 'center',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#a3a3a3',
  },
  box__positive: {
    backgroundColor: '#669a33',
  },
  box__negative: {
    backgroundColor: '#b32332',
  },
});

export default React.memo(TickerItem);
