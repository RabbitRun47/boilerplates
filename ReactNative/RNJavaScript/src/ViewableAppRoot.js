import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {sampleCounterSliceActions} from './reducer/sampleCounter';

export const ViewableAppRoot = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const sampleCounterValue = useSelector(state => state.sampleCounter.value);

  return (
    <SafeAreaView style={styles.theme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[styles.section, styles.theme]}>
          <Text style={[styles.title, styles.theme]}>
            {JSON.stringify(sampleCounterValue)}
          </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(sampleCounterSliceActions.addToSampleCounter(1));
            }}>
            <Text style={[styles.button, styles.invertedTheme]}>
              add 1 to counter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(sampleCounterSliceActions.addToSampleCounter(-1));
            }}>
            <Text style={[styles.button, styles.invertedTheme]}>
              subtract 1 from counter
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  theme: {
    color: 'orange',
    backgroundColor: 'grey',
    borderColor: 'white',
  },
  invertedTheme: {
    backgroundColor: 'white',
    color: 'orange',
  },
  section: {
    margin: 10,
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },
});
