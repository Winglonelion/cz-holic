import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import TextHeader from '$components/Typo/TextHeader';
import { useDispatch, useSelector } from 'react-redux';
import { sortModeSelector } from '$data/ticker/ticker.selectors';
import { AppDispatch } from '$data/redux.store';
import { changeSortMode } from '$data/ticker/ticker.actions';
import { SORT_MODES } from '$data/ticker/ticker.types';

const SORT_MODE_BUTTONS = [
  //
  { key: SORT_MODES.HOT, label: 'Hot' },
  { key: SORT_MODES.GAINER, label: 'Gainers' },
  { key: SORT_MODES.LOSER, label: 'Losers' },
  { key: SORT_MODES['24VOL'], label: '24h Vol' },
];

const TickerHeader = () => {
  const currentSortMode = useSelector(sortModeSelector);
  const dispatch = useDispatch<AppDispatch>();
  const onChangeSortMode = (sortMode: SORT_MODES) => {
    dispatch(changeSortMode(sortMode));
  };
  return (
    <View style={styles.container}>
      {SORT_MODE_BUTTONS.map(button => {
        const isActive = button.key === currentSortMode;
        const tintColor = isActive ? '#333' : '#9B9B9B';
        return (
          <Pressable
            onPress={() => onChangeSortMode(button.key)}
            key={button.key}
            style={[styles.button, isActive && styles.activeButton]}>
            <TextHeader level="h4" color={tintColor} fontWeight="700">
              {button.label}
            </TextHeader>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 20,
  },
  button: {
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#AAA',
  },
  buttonLabel: {},
});

export default React.memo(TickerHeader);
